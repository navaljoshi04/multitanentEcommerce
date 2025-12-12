import React from "react";
import { ShoppingCart , Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="border-b border-gray-300">
        <div className="flex items-center justify-between lg:hidden md:hidden">
          <h2 className="font-poppins font-bold text-4xl mx-2 px-4 py-2">
            <span className="text-green-400">go</span>cart
            <span className="text-green-400">.</span>
          </h2>
          <button className="px-7 py-2 text-sm bg-indigo-500 hover:bg-indigo-600  transition rounded-full text-white ">
            Login
          </button>
        </div>

        {/* desktop and larger screens will come here  */}
        <div className="hidden md:flex items-center justify-between xl:hidden">
          <div>
            <h2 className="font-poppins font-bold text-4xl mx-2 px-4 py-2">
              <span className="text-green-400">go</span>cart
              <span className="text-green-400">.</span>
            </h2>
          </div>
          <div className="flex items-center gap-6 font-light">
            <Link to="/">Home </Link>
            <Link to="/shop">Shop </Link>
            <Link className="border-b-2 border-green-400 pb-1" to="/admin">
              Admin{" "}
            </Link>

            <Link className="flex gap-1 items-center" to="/cart">
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />

                <span
                  className="absolute -top-2 -right-2 bg-gray-500 text-white 
                    rounded-full text-xs px-1.5 py-0.5 border border-white"
                >
                  0
                </span>
              </div>
              Cart
            </Link>

            <button
              className="px-7 text-sm bg-green-400 rounded-full text-white py-2 transition hover:bg-green-500 cursor-pointer "
              to="/login"
            >
              Login
            </button>
          </div>
        </div>

        {/* for bigger devices this will come  */}
        <div className="hidden xl:flex items-center justify-between px-6 py-4 w-full">
          {/* Logo */}
          <div>
            <h2 className="font-poppins font-bold text-4xl">
              <span className="text-green-400">go</span>cart
              <span className="text-green-400">.</span>
            </h2>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6 font-light">
            <Link to="/">Home</Link>
            <Link to="/shop" className="border-b-2 border-green-400 pb-1" >Shop</Link>
            <Link className="border-b-2 border-green-400 pb-1" to="/admin">
              Admin
            </Link>
          </div>

          {/* Search */}
          <div className="relative w-80">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="search products"
              className="w-full bg-blue-100 rounded-3xl pl-10 px-3 py-2"
            />
          </div>

          {/* Cart + Login */}
          <div className="flex items-center gap-6">
            {/* Cart */}
            <Link className="flex items-center gap-1 relative" to="/cart">
              <ShoppingCart className="w-6 h-6" />
              <span
                className="absolute -top-2 -right-3 bg-gray-500 text-white 
        rounded-full text-xs px-1.5 py-0.5 border border-white"
              >
                0
              </span>
              Cart
            </Link>

            {/* Login Button */}
            <button
              className="px-7 text-sm bg-green-400 rounded-full text-white py-2 
      transition hover:bg-green-500 cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
