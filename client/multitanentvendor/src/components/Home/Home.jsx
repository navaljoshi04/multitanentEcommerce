import React, { useState } from "react";
import { ArrowRight, } from "lucide-react";


import Cart from "../pages/Cart";
import Main from "./Main";

import Specification from "../pages/Specification";
import Newsletter from "../pages/Newsletter";

const Home = () => {
  const [latestCount, setLatestCount] = useState(4);
  const [bestSellingCount, setBestSellingCount] = useState(8);

  return (
    <>
     
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
                Showing {latestCount} of 10 products{" "}
                <span
                  onClick={() => setLatestCount(latestCount == 10 ? 4 : 10)}
                  className="text-green-400 flex items-center gap-2 ml-2 cursor-pointer"
                >
                  View more <ArrowRight className="hover:scale-140" size={20} />{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Cart showcount={latestCount} />
          </div>
        </div>

        <div className="px-6 my-30 max-w-6xl mx-auto ">
          <div className=" flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold text-slate-800">
              Best Selling Products
            </h2>
            <div className="flex">
              <p className="mt-2 flex">
                Showing {bestSellingCount} of 10 products{" "}
                <span
                  onClick={() =>
                    setBestSellingCount(bestSellingCount == 10 ? 8 : 10)
                  }
                  className="text-green-400 flex items-center gap-2 ml-2 cursor-pointer"
                >
                  {bestSellingCount == 10 ? "View Less" : "View more"}{" "}
                  <ArrowRight size={20} />{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Cart showcount={bestSellingCount} />
          </div>
        </div>

        <div>
          <Specification />
          <Newsletter />
        </div>
 
      </div>
    </>
  );
};
export default Home;
