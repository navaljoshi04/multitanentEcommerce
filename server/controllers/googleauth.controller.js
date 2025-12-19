import { OAuth2Client } from "google-auth-library";
import User from "../models/user/user.model.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ message: "Google token required" });
    }

    //1. verify token with Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    //extract user data
    const payload = ticket.getPayload();
    const { email, name, picture, sub: googleId, email_verified } = payload;
    if (!email_verified) {
      return res.status(400).json({ message: "Google email not verified" });
    }

    //  Find existing user
    let user = await User.findOne({ email });

    //if user exists but signed up via email -upgrade account:
    if(user && user.provider=="email"){
        user.provider="google";
        user.googleId= googleId;
        user.avatar=picture;
        user.isVerified= true;
        await user.save();
    }

    //if user does not exist-- create new 
    if (!user) {
      user = await User.create({
        firstname: name.split(" ")[0],
        lastname: name.split(" ")[1] || "",
        email,
        provider: "google",
        googleId,
        avatar: picture,
        isVerified: true,
      });
    }
    res.json({
      message: "Google login successful",
      user,
    });
  } catch (error) {
    console.log("Googel login error:", error.message)
    res.status(500).json({
      message: "Google authentication failed"
    });
  }
};
