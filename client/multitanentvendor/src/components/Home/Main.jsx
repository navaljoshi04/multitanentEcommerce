import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
const Main = () => {
  return (
    <div>
      <div className="xl:hidden">
        <div className="flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10">
          <div className="relative rounded-3xl flex-1 flex flex-col bg-green-200 row-3xl xl:min-h-100 group">
            <div className="p-5 sm:p-16 ">
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
                width={513}
                height={510}
                loading="lazy"
                className="sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm"
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
      </div>

      <div className="hidden xl:grid xl:grid-cols-4">
        <div className="xl:col-span-3 p-6">
          <div className="bg-green-200 rounded-3xl p-6 flex flex-col justify-between min-h-[220px]">
            {/* NEWS SECTION — 30-40% WIDTH */}
            <button
              className="inline-flex items-center gap-3 bg-green-300 text-green-700 
               px-3 py-1 rounded-full text-base w-1/2 min-w-[160px] truncate"
            >
              <span className="text-white bg-green-600 text-base px-3 py-1 rounded-full">
                NEWS
              </span>

              <span className="truncate">
                Free shipping on Orders Above $50!
              </span>
            </button>

            {/* HEADING */}
            <h2
              className="text-4xl leading-tight font-medium 
                 bg-gradient-to-r from-slate-600 to-[#A0FF74] 
                 bg-clip-text text-transparent max-w-sm mt-4"
            >
              Gadgets you'll love. Prices you'll trust.
            </h2>

            {/* IMAGE — Bigger but does NOT increase box height */}
            <div className="flex justify-end mt-4">
              <img
                src="/heromodal.png"
                alt="hero"
                loading="lazy"
                className="w-[55%] max-w-[350px] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 xl:col-span-1 p-6">
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
