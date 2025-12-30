import { ArrowRight, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty } from "../../store/cartslices";
import { useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [paymentType, setPaymentType] = useState("stripe");
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  return (
    <div>
      <div className="md:hidden flex flex-col">
        {/* Header */}
        <div className="px-4 py-4">
          <h2 className="text-[22px] font-semibold ">My Cart</h2>
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
              <input
                type="radio"
                name="payment"
                value="stripe"
                checked={paymentType === "stripe"}
                onChange={(e) => setPaymentType(e.target.value)}
                className="accent-indigo-600 ml-4"
              />
              <p className="text-gray-600 text-[14px] font-serif ">
                Stripe Payment{" "}
              </p>
            </label>
            <label className="flex items-center gap-3 rounded-lg cursor-pointer hover:border-gray-400">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentType === "cod"}
                onChange={(e) => setPaymentType(e.target.value)}
                className="accent-green-600 ml-4"
              />
              <p className="text-gray-600 text-[14px] font-serif">
                Cash on Delivery
              </p>
            </label>
            <div className="border border-b border-gray-200 mt-2 w-80 ml-4"></div>
            <div className="mt-2">
              <h2 className="px-4 text-gray-400">Address</h2>
              <div className="flex">
                <h4 className="px-4 text-gray-400 text-[14px]">Add Address</h4>
                <Plus
                  onClick={() => setIsAddressOpen(true)}
                  size={14}
                  className="mt-1"
                />
                {isAddressOpen && (
                  <div className="z-50 inset-0 flex items-center justify-center fixed">
                    <div
                      className="absolute inset-0 bg-white/40 backdrop-blur-sm"
                      onClick={() => setIsAddressOpen(false)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="border border-b border-gray-200 mt-2 w-80 ml-4"></div>
            <div className="flex justify-between mt-2">
              <p className="text-gray-400 mx-2 text-[14px]">Subtotal: </p>
              <p className="text-gray-400 mx-2 text-[14px]"> ₹{subtotal} </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400 mx-2 text-[14px]">Shipping: </p>
              <p className="text-gray-400 mx-2 text-[14px]"> ₹50 </p>
            </div>
            <div className="mt-2 flex gap-1">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-gray-300 rounded-md w-60 px-6 py-1  ml-2"
              />
              <button className="bg-gray-600 text-white px-4 rounded-md ml-2">
                Apply
              </button>
            </div>
            <div className="border border-b mt-4 border-gray-200  w-80 ml-4"></div>
            <div className="flex justify-between mt-4">
              <p className="text-gray-400 mx-2 text-[14px] ">Total</p>
              <p className="text-gray-400 mx-2 text-[14px]">
                {" "}
                ₹{subtotal + 50}{" "}
              </p>
            </div>
            <button className="bg-gray-700 text-white rounded-md px-4 py-2 w-80 ml-8 mt-2 font-thin">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
