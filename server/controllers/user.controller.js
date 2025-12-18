import User from "../models/user/user.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import OTP from "../models/otp.model.js";
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
      {upsert:true}
    );
    const otp= Math.floor(1000 + Math.random()*9000).toString();
    const otpHash=crypto.createHash("sha256").update(otp).digest("hex");
    await OTP.deleteMany({email});
    await OTP.create({
        email,
        otpHash,
        expiresAt:Date.now()+5*60*1000,
    });

    //send mail logic here :
    await sendEmail({
      to:email,
      subject:"Verify your email",
      html:otpTemplate(otp)
    })
    res.json({message:"OTP sent to your email.Please sign up."});
  } catch (error) {
        res.status(500).json({ message: "Signup failed : " + error.message });

  }
};
