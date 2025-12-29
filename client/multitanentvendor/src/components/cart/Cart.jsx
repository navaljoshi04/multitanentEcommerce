import { ArrowRight, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty } from "../../store/cartslices";
import { useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [paymentType, setPaymentType]=useState("stripe");
  return (
    <div className=" min-h-screen">
      <div className="md:hidden flex flex-col">
        {/* Header */}
        <div className="px-4 py-4">
          <h2 className="text-[22px] font-semibold px-4
           py-4">My Cart</h2>
          <p className="flex items-center text-sm">
            items in your cart
            <span className="text-green-400 px-2 flex items-center gap-1">
              Add more <ArrowRight className="w-4 h-4" />
            </span>
          </p>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[2fr_1fr_1fr] px-3 py-2 text-[14px] font-semibold border-b border-gray-300">
          <div>Product</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Total Price</div>
        </div>

        {/* Cart Rows */}
        <div className="px-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="
                grid grid-cols-[2fr_1fr_1fr]
                items-center
                bg-white
                border border-gray-200
                rounded-lg
                p-3
                mt-3
                hover:border-gray-400
                transition-colors
              "
            >
              {/* Product */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md border border-gray-200"
                />
                <div className="flex flex-col">
                  <p className="text-[12px] font-semibold whitespace-nowrap">
                    {item.name}
                  </p>
                  <span className="text-[11px] text-gray-600">
                    ₹{item.price}
                  </span>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex justify-center">
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50">
                  <button
                    onClick={() => dispatch(decrementQty({ id: item.id }))}
                    className="px-3 py-1 font-semibold hover:bg-gray-200 transition"
                  >
                    -
                  </button>
                  <div className="px-3 text-sm">{item.qty}</div>
                  <button
                    onClick={() => dispatch(incrementQty({ id: item.id }))}
                    className="px-3 py-1 font-semibold hover:bg-gray-200 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="text-right font-semibold text-sm">
                ₹{item.qty * item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-300 shadow  rounded-md m-4">
          <div className="flex flex-col h-98">
              <h2 className="px-4 py-4 font-mono text-lg "> Payment Summary</h2>
              <label className="flex items-center gap-3   rounded-lg cursor-pointer hover:border-gray-400">
                <input type="radio" name="payment" value="stripe" checked={paymentType === "stripe"} onChange={(e)=>setPaymentType(e.target.value)} className="accent-indigo-600 ml-4" />
                 <p className="text-gray-600 text-[14px] font-serif ">Stripe Payment </p>
              </label>
              <label className="flex items-center gap-3 rounded-lg cursor-pointer hover:border-gray-400" >
                    <input type="radio"  name="payment" value="cod" checked={paymentType === "cod"} onChange={(e) => setPaymentType(e.target.value)} className="accent-green-600 ml-4" />
                    <p className="text-gray-600 text-[14px] font-serif">Cash on Delivery</p>
              </label>
            <div className="border border-b border-gray-100 mt-2 w-80 ml-4"></div>
            <div>
              <h2 className="px-4 text-gray-400" >Address</h2>
             <div className="flex">
               <h4 className="px-4 text-gray-400 text-[14px]">Add Address</h4>
              <Plus size={14} className="mt-1"  />
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


