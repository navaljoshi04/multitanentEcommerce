import mongoose from "mongoose";

const otpSchema= new mongoose.Schema({
    email:String,
    otpHash:String,
    lastSentAt:Date,
    expiresAt:Date
})


const OTP= mongoose.model("otp", otpSchema);
export default OTP;