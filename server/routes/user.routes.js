
import express from "express";
import { signup, verifyOTP } from "../controllers/user.controller.js";
import { googleLogin } from "../controllers/googleauth.controller.js";


const router= express.Router();

router.post("/signup", signup);
router.post("/verify", verifyOTP);
router.post("/loginGoogle",googleLogin );


export default router;