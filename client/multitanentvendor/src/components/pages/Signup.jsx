import React from "react";
import { FcGoogle } from "react-icons/fc";
import { X, Play, CircleDashed } from "lucide-react";
import axios from "axios";
import { useState } from "react";

const Signup = ({ onClose, onLogin, onOTPSent }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!formData.firstname || !formData.email || !formData.password) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_URL || "http://localhost:3000"
        }/api/users/signup`,
        formData
      );

      if (response.data.message) {
        onClose();
        if (onOTPSent) {
          onOTPSent(formData.email);
        }
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        <div className="p-6 pb-4 shrink-0">
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-black z-10"
          >
            <X />
          </button>

          <h2 className="font-bold text-xl md:text-2xl mt-4 text-center md:font-medium">
            Create your account
          </h2>

          <p className="mt-4 text-center text-sm font-light md:text-sm lg:text-sm">
            Welcome back! Please fill in the details to get started
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          <div className="mt-6 border border-gray-300 w-full rounded-lg">
            <button className="flex items-center justify-center gap-3 w-full rounded-lg py-2 font-">
              <FcGoogle className="w-6 h-6" />
              Continue with Google
            </button>
          </div>

          <div className="my-6 flex items-center w-full">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-sm text-gray-800 font-medium">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <form onSubmit={handleSignup} className="mt-2 gap-1 pb-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold text-gray-700">
                  {" "}
                  First name
                </label>
                <div className="border border-gray-300 mt-2 rounded-md p-2 focus-within:border-gray-500">
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First name"
                    className="text-sm w-full outline-none focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold text-gray-700">
                  {" "}
                  Last name
                </label>
                <div className="border border-gray-300 mt-2 rounded-md p-2 focus-within:border-gray-500">
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="text-sm w-full outline-none focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <label className="text-sm font-semibold text-gray-700">
                {" "}
                Email address
              </label>
              <div className="border border-gray-300 mt-2 rounded-md p-2 focus-within:border-gray-500">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="text-sm w-full outline-none focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-2">
              <label className="text-sm font-semibold text-gray-700">
                {" "}
                Password
              </label>
              <div className="border border-gray-300 mt-2 rounded-md p-2 focus-within:border-gray-500">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="text-sm w-full outline-none focus:outline-none"
                />
              </div>
            </div>
            {error && (
              <div className="mt-2 text-red-600 text-sm text-center">
                {error}
              </div>
            )}
            <div className="flex justify-center mt-4 bg-slate-700 p-3 rounded-lg">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 text-white disabled:opacity-50 disabled:cursor-not-allowed w-full"
              >
                {loading ? (
                  <>
                    <CircleDashed size={18} className="animate-spin" />
                    <span>Sending OTP...</span>
                  </>
                ) : (
                  <>
                    <span>Continue</span>
                    <Play size={12} />
                  </>
                )}
              </button>
            </div>
            <div className="my-6 w-full flex ">
              <div className="flex-1 bg-gray-300 h-px"></div>
            </div>
            <div className="flex justify-center">
              <p className="font-medium text-sm">
                Already have an acount?{" "}
                <span
                  onClick={onLogin}
                  className="text-slate-600 font-semibold cursor-pointer"
                >
                  Sign in
                </span>{" "}
              </p>
            </div>
            <div className="my-6 w-full flex">
              <div className="flex-1 bg-gray-300 h-px">
                <p className="text-center text-[12px] mt-4 text-orange-600 font-semibold">
                  Development Mode
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
