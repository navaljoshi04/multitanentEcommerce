import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "../Home/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Footer from "../Home/Footer";
import { PencilLine, Play } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginsuccess } from "../../store/authslices";
const Layout = () => {
  const dispatch = useDispatch();
  const [authModal, setAuthModal] = useState(null);
  const [otpEmail, setOtpEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const auth= useSelector((state)=>state.auth);
  console.log(auth,'auth');

  const [otpPurpose, setOtpPurpose] = useState(null);

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  console.log("otp", otp);
  const handleOTPSent = (email, purpose) => {
    setOtpEmail(email);
    setAuthModal("otp");
    setOtpPurpose(purpose);
  };

  const handleVerifyOtp = async () => {
    const finalOtp = otp.join("");
    if (finalOtp.length != 4) {
      alert("please enter complete otp");
      return;
    }

    const endpoint =
      otpPurpose === "signup"
        ? "http://localhost:3000/api/users/verify"
        : "http://localhost:3000/api/users/verify-login";
   
    try {
      const response = await axios.post(endpoint, {
        email: otpEmail,
        otp: finalOtp,
      });

      dispatch(
        loginsuccess({
          user: response?.data?.user,
          token: response?.data?.token,
        })
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert(response?.data.message);
      setOtp(["", "", "", ""]);
      setAuthModal(null);
    } catch (error) {
      alert(error.response?.data?.message || "OTP verification failed");
      setOtp(["", "", "", ""]);
      setAuthModal(null);
      console.log("Unable to login", error.message);
    }
  };

  return (
    <div>
      <Header onLoginClick={() => setAuthModal("login")} />
      <Outlet />
      <Footer />

      {authModal === "login" && (
        <Login
          onClose={() => setAuthModal(null)}
          onSignup={() => setAuthModal("signup")}
          onOTPSent={handleOTPSent}
        />
      )}

      {authModal === "signup" && (
        <Signup
          onClose={() => setAuthModal(null)}
          onLogin={() => setAuthModal("login")}
          onOTPSent={handleOTPSent}
        />
      )}

      {authModal === "otp" && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl p-6 max-w-md w-full">
            <h2 className="text-md font-bold text-center mb-4">
              Verify your email{" "}
            </h2>
            <p className="text-xs text-gray-600 mb-4 text-center">
              Enter the verification code sent to your email
              <span className="flex  justify-center items-center gap-1 mt-1">
                ({otpEmail})
                <PencilLine size={14} className="text-orange-600" />
              </span>
            </p>
            <div className="flex justify-center gap-3 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  id={`otp-${index}`}
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  className="w-10 h-10 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              ))}
            </div>
            <p className="text-xs font-semibold text-center">
              Didn't recieve a code? Resend{" "}
            </p>
            <div className="flex justify-center mt-4 bg-slate-700 p-3 rounded-lg">
              <button
                onClick={handleVerifyOtp}
                disabled={otp.join("").length !== 4}
                className="flex items-center justify-center gap-2 text-white disabled:opacity-50 disabled:cursor-not-allowed w-full"
              >
                <span>Continue</span>
                <Play size={12} />
              </button>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="w-full border-b border-orange-200 rounded-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
