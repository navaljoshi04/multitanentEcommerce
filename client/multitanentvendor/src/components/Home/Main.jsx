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
          <div className="flex flex-1 items-center justify-between w-full bg-blue-200 rounded-3xl p-6 px-8  overflow-hidden">
            <div>
              <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text bg-transparent max-w-40">
                20% discounts
              </p>
              <button className="flex items-center group gap-1 mt-4">
                View More1{" "}
                <ArrowRight
                  className="transition-transform duration-300 ease-out group-hover:translate-x-2  group-hover:scale-110"
                  size={20}
                />{" "}
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

      {/* this is for bigger screens which i have to update */}
      <div className="hidden xl:grid xl:grid-cols-3">
        <div className="xl:col-span-2 p-6">
          <div className="relative bg-green-200 rounded-3xl p-10 h-[460px] overflow-hidden">
            {/* LEFT CONTENT (does not change parent height) */}
            <div className="flex h-full flex-col justify-center gap-6 max-w-md">
              <button className="inline-flex items-center gap-3 bg-green-300 text-green-700 px-4 py-1 rounded-full text-base w-fit min-w-[200px] truncate">
                <span className="text-white bg-green-600 text-base px-3 py-1 rounded-full">
                  NEWS
                </span>
                <span className="truncate">
                  Free shipping on Orders Above $50!
                </span>
              </button>

              <h2 className="text-5xl leading-tight font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent">
                Gadgets you'll love. Prices you'll trust.
              </h2>

              <div className="flex items-baseline gap-2 text-slate-900">
                <span className="text-base">Starts from</span>
                <span className="text-3xl font-semibold">$4.90</span>
              </div>

              <button className="box-border w-[140px] px-2 py-3 bg-slate-800 text-white text-lg rounded-md">
                LEARN MORE
              </button>
            </div>

            {/* IMAGE — Bigger but does NOT increase box height */}
            <div className="absolute inset-y-0 right-6 flex items-end justify-end">
              <img
                src="/heromodal.png"
                alt="hero"
                loading="lazy"
                className="h-[140%] max-h-[320px] w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className=" xl:col-span-1 flex flex-col gap-5 text-slate-600 p-6">
          <div className="flex-1 flex items-center justify-between w-full bg-orange-200 rounded-3xl p-6 px-8">
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40">
                  Best Products
                </p>
                <button className="flex items-center gap-1 mt-4 font-light text-[12px] group">
                  View More
                    <ArrowRight
                  className="transition-transform duration-300 ease-out group-hover:translate-x-2  group-hover:scale-110"
                  size={20}
                />{" "}
                </button>
              </div>
              <img
                src="/productsImages/img4.webp"
                loading="lazy"
                height="110"
                width="110"
                alt=""
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between w-full bg-blue-200 rounded-3xl p-6 px-8">
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40">
                  20% Discount
                </p>
                <button className="flex  group items-center gap-1 mt-4 font-light text-[12px]">
                  View More
                     <ArrowRight
                  className="transition-transform duration-300 ease-out group-hover:translate-x-2  group-hover:scale-110"
                  size={20}
                />{" "}
                </button>
              </div>
              <img
                src="/productsImages/img10.webp"
                loading="lazy"
                height="110"
                width="110"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
