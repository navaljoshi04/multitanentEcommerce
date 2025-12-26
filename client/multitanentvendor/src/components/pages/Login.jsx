import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { X, Play, CircleDashed } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginsuccess } from "../../store/authslices";
const Login = ({ onClose, onSignup, onOTPSent }) => {
  const dispatch = useDispatch();
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/loginGoogle`,
        { token: credentialResponse.credential }
      );
      console.log("data is ", response.data);
      dispatch(
        loginsuccess({
          user: response.data.user,
          token: response.data.token,
        })
      );
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      onClose();
    } catch (error) {
      console.error("Google login failed", error);
    }
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(email);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter the email field.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_URL || "http://localhost:3000"
        }/api/users/login`,
        { email }
      );
      console.log(response.data.message);
      if (response.data.message) {
        onClose();
        if (onOTPSent) {
          onOTPSent(email, "login");
        }
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center 
                  items-start "
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm 
                    p-4 sm:p-6 md:p-10 flex justify-center"
      >
        <div
          className="relative w-full md:max-w-[60vw] lg:max-w-[30vw] lg:rounded-xl rounded-2xl bg-white 
                    p-6 shadow-2xl flex flex-col 
                    mt-16 max-h-[80vh]"
        >
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-black"
          >
            <X />
          </button>

          <h2 className="font-bold text-xl md:text-2xl mt-4 text-center md:font-medium">
            Sign in to GoCart
          </h2>

          <p className="mt-4 text-center text-sm font-light md:text-md lg:text-sm">
            Welcome back! Please sign in to continue
          </p>
          <div className="mt-6 border border-gray-300 w-full rounded-lg">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              render={({ onClick, disabled }) => (
                <button
                  onClick={onClick}
                  disabled={disabled}
                  className="flex items-center justify-center gap-3 w-full rounded-lg py-2"
                >
                  <FcGoogle className="w-6 h-6" />
                  Continue with Google
                </button>
              )}
            />
          </div>

          <div className="my-6 flex items-center w-full">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-sm text-gray-800 font-medium">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <div className="mt-4 gap-1 ">
            <label className="text-sm font-bold text-gray-700">
              {" "}
              Email address
            </label>
            <div className="border border-gray-300 mt-2 rounded-md p-2 focus-within:border-gray-500">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="text-sm w-full outline-none focus:outline-none"
              />
            </div>
            {error && (
              <div className="mt-2 text-red-600 text-xs text-center">
                {error}
              </div>
            )}
            <div className="flex justify-center  mt-4 bg-slate-700 p-3 rounded-lg">
              <button
                type="submit"
                onClick={handleLogin}
                className="flex gap-2 text-white "
              >
                {loading ? (
                  <>
                    <CircleDashed size={18} className="animate-spin" />
                    <span>Verify OTP...</span>
                  </>
                ) : (
                  <>
                    <span>Continue</span>
                    <Play size={12} className="mt-2 gap-1" />
                  </>
                )}
              </button>
            </div>
            <div className="my-6 w-full flex ">
              <div className="flex-1 bg-gray-300 h-px"></div>
            </div>
            <div className="flex justify-center">
              <p className="font-medium text-sm">
                Don't have an acount?{" "}
                <span
                  onClick={onSignup}
                  className="text-slate-600 font-semibold"
                >
                  Sign up
                </span>{" "}
              </p>
            </div>
            <div className="my-6 w-full flex ">
              <div className="flex-1 bg-gray-300 h-px">
                <p className="text-center text-[12px] mt-4 text-orange-600 font-semibold ">
                  Development Mode
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
