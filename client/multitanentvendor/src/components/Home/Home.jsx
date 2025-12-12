import React, { useState } from "react";
import {  ArrowRight, ShoppingCart } from "lucide-react";

import Cart from "../pages/Cart";
import Main from "./Main";
import Header from "./Header";
const Home = () => {
  const [showcount, setShowCount] = useState(4);
  return (
    <>
      {/* this is for mobile and small elements: */}
      <Header />

      <div className="mx-6">
       <Main />

        <div className="mt-6 overflow-hidden w-full relative max-w-7xl mx-auto select-none sm:my-20  ">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent "></div>
          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent "></div>
          <div className=" flex min-w-[200%] animate-marqueeScroll gap-4 will-change-transform">
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Headphones
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Speakers
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Watch
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Earbuds
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Mouse
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Decorations
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Headphones
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Speakers
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Watch
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Earbuds{" "}
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Mouse
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Decorations
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Headphones
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Speakers
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Watch
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Earbuds
            </button>
            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
              Mouse
            </button>
          </div>
        </div>

        <div className="px-6 my-30 max-w-6xl mx-auto ">
          <div className=" flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold text-slate-800">
              Latest Products
            </h2>
            <div className="flex">
              <p className="mt-2 flex">
                Showing {showcount} of 10 products{" "}
                <span
                  onClick={() => setShowCount(10)}
                  className="text-green-400 flex items-center gap-2 ml-2 cursor-pointer"
                >
                  View more <ArrowRight size={20} />{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Cart showcount={showcount} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
