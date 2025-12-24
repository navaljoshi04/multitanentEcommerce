
import rateLimit from "express-rate-limit";

export const otpSendLimiter= rateLimit({
    windowMs: 10 * 60 *1000,
    max:3,
    message:{
        message:"Too many OTP requests. Please try again after 10 minutes."
    },
    standardHeaders:true,
    legacyHeaders:false
})

export const otpVerifyLimiter= rateLimit({
    windowMs:10 * 60 * 1000,
    max:5,
    standardHeaders:true,
    legacyHeaders:false,
    message:{
         message: "Too many incorrect OTP attempts. Please try again later.",
    }
})