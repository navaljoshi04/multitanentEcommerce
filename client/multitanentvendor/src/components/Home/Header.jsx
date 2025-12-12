import React from "react";
import { ChevronRight, ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";
const Header = () => {
  return (
    <>
      {/* this is for mobile and small elements: */}
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
            <Link className="flex gap-1 items-center " to="/cart">
              <ShoppingCart /> Cart{" "}
            </Link>
            <button
              className="px-7 text-sm bg-green-400 rounded-full text-white py-2 transition hover:bg-green-500 cursor-pointer "
              to="/login"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="mx-6">
        <div className="flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10">
          <div className="relative flex-1 flex flex-col bg-green-200 row-3xl xl:min-h-100 group">
            <div className="p-5 sm:p-16">
              <button className="inline-flex items-center gap-3 bg-green-300 text-green-600 pr-4 p-1 rounded-full text-sm sm:text-sm">
                <span className="text-white bg-green-600 px-3 rounded-full py-1 max-sm:ml-1 text-sm">
                  NEWS
                </span>{" "}
                " Free shipping on Orders Above $50! "
                <ChevronRight />
              </button>
              <h2 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs sm:max-w-md ">
                Gadgets you'll love. Prices you'll trust.
              </h2>

              <div className="text-slate-900 text-sm font-medium mt-4 sm:mt-8">
                <p>Starts from</p>
                <p className="text-3xl">$ 4.90</p>
              </div>
              <button className="px-7 bg-slate-800 text-white text-sm py-2.5 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 transition ">
                LEARN MORE{" "}
              </button>
              <img
                width={210}
                height={210}
                loading="lazy"
                src="/heromodal.png"
                alt="hero"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600">
          <div className="flex flex-1 items-center justify-between w-full bg-orange-200 rounded-3xl p-6 px-6 group">
            <div>
              <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40">
                Best products{" "}
              </p>
              <button className="flex items-center gap-1 mt-4">
                View More <ArrowRight size={20} />{" "}
              </button>
            </div>
            <img src="/heroearbuds.png" alt="earbuds" />
          </div>
          <div className="flex flex-1 items-center justify-between w-full bg-blue-200 rounded-3xl p-6 px-8 group overflow-hidden">
            <div>
              <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text bg-transparent max-w-40">
                20% discounts
              </p>
              <button className="flex items-center gap-1 mt-4">
                View More <ArrowRight size={20} />{" "}
              </button>
            </div>
            <img
              className="max-w-full h-auto object-contain"
              width={210}
              src="herowatch.png"
              alt="watch"
            />
          </div>
        </div>

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
          <h2 className="text-2xl font-semibold text-slate-800">Latest Products</h2>
          <p>Showing 4 of 12 products</p>
        </div>
          <div className="mt-12">
            <Cart />

          </div>
         </div>
      </div>
    </>
  );
};
export default Header;
