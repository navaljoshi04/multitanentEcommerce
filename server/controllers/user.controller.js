import User from "../models/user/user.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import OTP from "../models/otp.model.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";
import { otpTemplate } from "../utils/otpTemplate.js";

export const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please enter email and password." });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser && existingUser.isVerified) {
      return res.status(400).json({ message: "User already exists" });
    }

    const lastotp = await OTP.findOne({ email });
    if (lastotp && Date.now() - lastotp.lastSentAt < 60 * 1000) {
      return res.status(429).json({
        message: "Please wait 60 seconds before requesting another OTP.",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);
    await User.findOneAndUpdate(
      { email },
      {
        firstname,
        lastname,
        email,
        password: hashedPass,
        provider: "email",
        isVerified: false,
      },
      { upsert: true }
    );
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const otpHash = crypto.createHash("sha256").update(otp).digest("hex");
    await OTP.deleteMany({ email });
    await OTP.create({
      email,
      otpHash,
      expiresAt: Date.now() + 5 * 60 * 1000,
      lastSentAt: Date.now(),
    });

    await sendEmail({
      to: email,
      subject: "Verify your email",
      html: otpTemplate(otp),
    });
    res.json({ message: "OTP sent to your email.Please sign up." });
  } catch (error) {
    res.status(500).json({ message: "Signup failed : " + error.message });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required",
      });
    }
    const otpDoc = await OTP.findOne({ email });
    if (!otpDoc) {
      return res.status(400).json({
        message: "OTP not found or already used",
      });
    }
    if (otpDoc.expiresAt < Date.now()) {
      await OTP.deleteOne({ email });
      return res.status(400).json({
        message: "OTP expired",
      });
    }
    const hashedOTP = crypto.createHash("sha256").update(otp).digest("hex");
    if (hashedOTP != otpDoc.otpHash) {
      return res.status(400).json({ message: "Invalid OTP." });
    }

    const user= await User.findOneAndUpdate({ email }, { isVerified: true }, {new:true}).select("-password");
    if(!user){
            return res.status(404).json({ message: "User not found" });
    }
    await OTP.deleteOne({ email });

    const token= jwt.sign(
      {userId:user._id},
      process.env.JWT_SECRET,
      {expiresIn: "7d"}
    )

    res.json({
      message: "Email Verified Successfully !",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "OTP is not verified : " + error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Please enter email." });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found. Please sign up first.",
      });
    }

    if (!existingUser.isVerified) {
      return res
        .status(400)
        .json({ message: "User not verified, signup to verify the user.!" });
    }

    const lastotp = await OTP.findOne({ email });
    if (lastotp && Date.now() - lastotp.lastSentAt < 60 * 1000) {
      return res.status(429).json({
        message: "Please wait 60 seconds before requesting another OTP.",
      });
    }
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const otpHash = crypto.createHash("sha256").update(otp).digest("hex");
    await OTP.deleteMany({ email });
    await OTP.create({
      email,
      otpHash,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });
    await sendEmail({
      to: email,
      subject: "Verify your email",
      html: otpTemplate(otp),
    });
    res.json({ message: "OTP sent to your email.Please verify to login." });
  } catch (error) {
    res.status(500).json({ message: "Login failed : " + error.message });
  }
};

export const verifyLoginOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required",
      });
    }
    const otpDoc = await OTP.findOne({ email });
    if (!otpDoc) {
      return res.status(400).json({
        message: "OTP not found or already used",
      });
    }
    if (otpDoc.expiresAt < Date.now()) {
      await OTP.deleteOne({ email });
      return res.status(400).json({
        message: "OTP expired.",
      });
    }

    const hashedOTP = crypto.createHash("sha256").update(otp).digest("hex");
    if (hashedOTP != otpDoc.otpHash) {
      return res.status(400).json({ message: "Invalid OTP." });
    }

    await OTP.deleteOne({ email });
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.json({
      message: "Login Successful !",
      user,
      token
    });
  } catch (error) {
    res.status(500).json({ message: "OTP is not verified : " + error.message });
  }
};
