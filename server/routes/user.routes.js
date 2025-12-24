
import express from "express";
import { login, signup, verifyLoginOTP, verifyOTP } from "../controllers/user.controller.js";
import { googleLogin } from "../controllers/googleauth.controller.js";
import { otpSendLimiter, otpVerifyLimiter } from "../middlewares/otplimiter.middleware.js";


const router= express.Router();

router.post("/signup",otpSendLimiter, signup);
router.post("/verify",otpVerifyLimiter, verifyOTP);
router.post("/loginGoogle",googleLogin );
router.post("/login",otpSendLimiter, login)
router.post("/verify-login", otpVerifyLimiter, verifyLoginOTP);

export default router;