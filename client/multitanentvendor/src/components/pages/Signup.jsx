import React from "react";
import { FcGoogle } from "react-icons/fc";
import { X, Play } from "lucide-react";

const Signup = ({onClose, onLogin}) => {
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
          className="relative w-full md:max-w-[40vw] lg:max-w-[30vw] lg:rounded-xl rounded-2xl bg-white 
                    p-6 shadow-2xl flex flex-col 
                    mt-16 max-h-[95vh]"
        >
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-black"
          >
            <X />
          </button>

          <h2 className="font-bold text-xl md:text-2xl mt-4 text-center md:font-medium">
            Create your account
          </h2>

          <p className="mt-4 text-center text-sm font-light md:text-sm lg:text-sm">
            Welcome back! Please fill in the details to get started
          </p>
          <div className="mt-6 border border-gray-300 w-full rounded-lg">
            <button className="flex items-center justify-center gap-3 w-full rounded-lg  py-2 font-">
              <FcGoogle className="w-6 h-6" />
              Continue with Google
            </button>
          </div>

          <div className="my-6 flex items-center w-full">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-sm text-gray-800 font-medium">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <div className="mt-2 gap-1 ">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold text-gray-700">
                  {" "}
                  First name
                </label>
                <div className="border border-gray-300 mt-2 rounded-md p-2 focus-within:border-gray-500">
                  <input
                    type="text"
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
                placeholder="Enter your email address"
                className="text-sm w-full outline-none focus:outline-none"
              />
            </div>
             </div>
           <div className="mt-2">
             <label className="text-sm font-semibold text-gray-700"> Password</label>
            <div className="border border-gray-300 mt-2 rounded-md p-2 focus-within:border-gray-500">
              <input
                type="password"
                placeholder="Enter your email address"
                className="text-sm w-full outline-none focus:outline-none"
              />
            </div>
           </div>
            <div className="flex justify-center  mt-4 bg-slate-700 p-3 rounded-lg">
              <button className="flex gap-2 text-white ">
                Continue
                <Play size={12} className="mt-2" />{" "}
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

export default Signup;
