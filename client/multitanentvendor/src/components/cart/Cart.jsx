import { ArrowRight } from "lucide-react";
import React from "react";

const Cart = () => {
  return (
    <div className="bg-red-50 h-screen">
      <div className="md:hidden flex flex-col">
        <div className="px-4 py-4 ">
          <h2 className="text-[22px] font-semibold">My Cart</h2>
          <p className="flex items-center">
            items in your cart{" "}
            <span className="text-green-400 px-2 flex items-center gap-1">
              Add more <ArrowRight className="w-4 h-4" />{" "}
            </span>{" "}
          </p>
        </div>

        <div className="grid grid-cols-3 ">
          <div className="px-2 py-2">
            <h2 className="text-[14px] ">Product</h2>
          </div>
          <div className="px-2 py-2">
            <h2 className="text-[14px] ">Quantity</h2>
          </div>
          <div
            className="px-2
                 py-2"
          >
            <h2 className="text-[14px]">Total Price</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
