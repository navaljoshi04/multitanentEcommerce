import React from "react";
import { ChevronRight } from "lucide-react";
const Header = () => {
 
  return (
    <>
      {/* this is for mobile and small elements: */}
      <div className="border-b border-gray-300">
         <div className="flex items-center justify-between lg:hidden md:hidden">
        <h2 className="font-poppins font-bold text-4xl mx-2 px-4 py-2">
          <span className="text-green-400">go</span>cart<span className="text-green-400">.</span>
        </h2>
       <button className="px-7 py-2 text-sm bg-indigo-500 hover:bg-indigo-600  transition rounded-full text-white ">Login</button>
        </div>

        {/* desktop and larger screens will come here  */}
      </div>


      <div className="mx-6">
        <div className="flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10">
            <div className="relative flex-1 flex flex-col bg-green-200 row-3xl xl:min-h-100 group">
        <div className="p-5 sm:p-16">
        <button className="inline-flex items-center gap-3 bg-green-300 text-green-600 pr-4 p-1 rounded-full text-sm sm:text-sm">
          <span className="text-white bg-green-600 px-3 rounded-full py-1 max-sm:ml-1 text-sm">NEWS</span> " Free shipping on Orders Above $50! "
          <ChevronRight />
        </button>
        <h2 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs sm:max-w-md ">Gadgets you'll love. Prices you'll trust.</h2>

        <div className="text-slate-900 text-sm font-medium mt-4 sm:mt-8">
          <p>Starts from</p>
          <p className="text-3xl">$ 4.90</p>
        </div>
        <button className="px-7 bg-slate-800 text-white text-sm py-2.5 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 transition ">LEARN MORE </button>
      </div>
      </div>
      </div>
      </div>
     
    </>
  );
};
export default Header;
