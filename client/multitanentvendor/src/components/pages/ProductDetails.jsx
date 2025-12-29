import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BadgeIndianRupee, Globe, CreditCard, User } from "lucide-react";
import { products } from "../data/products";
import {useDispatch} from "react-redux"
import { addToCart } from "../../store/cartslices";
const Stars = ({ rating }) => {
  const filled = Array(rating).fill("★");
  const empty = Array(5 - rating).fill("☆");
  return (
    <div className="text-green-400 text-lg">
      {filled}
      {empty}
    </div>
  );
};

const ProductDetails = () => {
  const dispatch=useDispatch();
  const { id } = useParams();
  const navigate=useNavigate();
  const product = products.find((product) => product.id == id);
  const [toggleCart, setToggleCart] = useState(false);
  const [qty, setQty] = useState(1);
  console.log("qty", qty);
    const handleAddToCart=()=>{
    dispatch(
      addToCart({
        id:product.id,
        name:product.name,
        price:product.price,
        image:product.image,
        qty:qty
      })
    );
    setToggleCart(true);
  }
  return (
    <>
      <div>
        <div className="flex flex-col md:hidden">
          <div className="m-8 bg-gray-200 rounded-md flex justify-center items-center ">
            <img
              src={product.image}
              className="w-80 h-80 items-center"
              alt="image"
            />
          </div>
          <div className="m-8 bg-gray-200 w-22 rounded-md flex justify-start ">
            <img
              src={product.image}
              className="w-20 h-20 items-center"
              alt="image"
            />
          </div>
          <div className="ml-4 ">
            <h2 className="font-semibold text-2xl ">{product.name} </h2>
            <Stars rating={product.rating} />
            <h2 className="font-semibold mx-2 py-2 px-2"> {product.price}</h2>

            <p className="mt-2 text-gray-400 flex gap-2">
              <BadgeIndianRupee className="w-6 h-6" /> Save 23% right now{" "}
            </p>
          </div>
          {toggleCart ? (
            <div className="space-y-3 mt-4">
              <h2 className="text-sm px-2 font-semibold text-[16px]">
                Quantity
              </h2>
              <div className="flex items-center gap-4 ">
                <div className="flex items-center border border-gray-300 ml-2 rounded-md overflow-hidden ">
                  <button
                    onClick={() => {
                      if (qty <= 1) {
                        setToggleCart(false);
                        setQty(1);
                      } else {
                        setQty(qty - 1);
                      }
                    }}
                    className="px-3 py-2 text-lg font-semibold hover:bg-gray-200"
                  >
                    -
                  </button>
                  <div> {qty} </div>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-2 text-lg font-semibold hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <button onClick={()=>navigate('/cart')}  className="bg-black text-white px-4 py-4 rounded-md text-sm mb-1 ">
                  View Cart
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-2 py-4 w-42 rounded-md m-4 text-sm "
            >
              Add to Cart
            </button>
          )}
          <div className="mx-4 border-b border-gray-300" />
          <div className="flex flex-col mt-2">
            <div className="flex text-gray-400 px-4 py-2 gap-2">
              <Globe /> Free shipping worldwide
            </div>
            <div className="flex text-gray-400 px-4 py-2 gap-2">
              <CreditCard /> 100% Secured Payment
            </div>
            <div className="flex text-gray-400 px-4 py-2 gap-2">
              <User /> Trusted by top brands
            </div>
          </div>
          <div className="mt-8 px-4 py-4">
            <h2 className="text-sm font-semibold pb-2 border-b border-gray-200">
              Description
            </h2>
            <p className="text-xs mt-2 font-light">{product.description} </p>
          </div>
          <div className="px-2 py-4 flex mb-4 ">
            <img
              src="/happystore.webp"
              alt=""
              className="h-14 w-14 border border-gray-400 rounded-full"
            />
            <h2 className="text-[12px] gap-2 mt-4 ml-2">
              Product by Happy shop
            </h2>
          </div>
        </div>

        <div className="hidden lg:hidden md:flex flex-col">
          <div className="flex">
            <div className="bg-gray-100 max-w-20 max-h-20 rounded-md m-8">
              <img
                src={product.image}
                className="w-20 px-4 py-4 h-20 items-center"
                alt="image"
              />
            </div>
            <div className="bg-gray-100 rounded-md m-8">
              <img
                src={product.image}
                className="w-80 px-4 py-4 h-80 items-center"
                alt="image"
              />
            </div>
          </div>

          <div className="px-8">
            <h2 className="font-semibold text-2xl "> {product.name} </h2>
            <Stars rating={product.rating} />
            <h2 className="font-semibold mx-2 py-2 px-2"> {product.price}</h2>

            <p className="mt-2 text-gray-400 flex gap-2">
              <BadgeIndianRupee className="w-6 h-6" /> Save 23% right now{" "}
            </p>
          </div>
          {toggleCart ? (
            <div className="space-y-3 mt-4">
              <h2 className="px-4 py-2 font-semibold text-[20px]">Quantity</h2>
              <div className="flex items-center gap-4 ">
                <div className="flex items-center border border-gray-300 ml-2 w-26 rounded-md overflow-hidden ">
                  <button
                    onClick={() => {
                      if (qty <= 1) {
                        setToggleCart(false);
                        setQty(1);
                      } else {
                        setQty(qty - 1);
                      }
                    }}
                    className="px-3 py-2 text-lg font-semibold hover:bg-gray-200"
                  >
                    -
                  </button>
                  <div className="px-2 py-2 text-lg"> {qty} </div>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-2 text-lg font-semibold hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <button onClick={()=>navigate('/cart')} className="bg-black text-white px-4 py-4 rounded-md text-sm mb-1 w-32">
                  View Cart
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-2 py-4 w-42 rounded-md m-4 text-sm "
            >
              Add to Cart
            </button>
          )}
          <div className="mx-4 mt-2 border-b border-gray-300" />
          <div className="flex flex-col mt-2">
            <div className="flex text-gray-400 px-4 py-2 gap-2">
              <Globe /> Free shipping worldwide
            </div>
            <div className="flex text-gray-400 px-4 py-2 gap-2">
              <CreditCard /> 100% Secured Payment
            </div>
            <div className="flex text-gray-400 px-4 py-2 gap-2">
              <User /> Trusted by top brands
            </div>
          </div>

          <div className="mt-8 px-4 py-4">
            <h2 className="text-sm font-semibold pb-2 border-b border-gray-200">
              Description
            </h2>
            <p className="text-sm mt-2 max-w-lg gap-2 font-light">
              {product.description}{" "}
            </p>
          </div>

          <div className="px-2 py-4 flex mb-4 ">
            <img
              src="/happystore.webp"
              alt=""
              className="h-14 w-14 border border-gray-400 rounded-full"
            />
            <h2 className="text-[14px] gap-2 mt-4 ml-2">
              Product by Happy shop
            </h2>
          </div>
        </div>

        <div className="hidden lg:flex flex-col">
          <div className="flex">
            <div className="bg-gray-100 max-w-20 max-h-20 rounded-md m-8">
              <img
                src={product.image}
                className="w-20 px-4 py-4 h-20 items-center"
                alt="image"
              />
            </div>
            <div className="bg-gray-100 rounded-md m-8">
              <img
                src={product.image}
                className="w-80 px-4 py-4 h-80 items-center"
                alt="image"
              />
            </div>
            <div>
              <h2 className="px-4 mt-8 py-4 font-semibold text-3xl">
                {product.name}{" "}
              </h2>
              <div className="text-[4px] ml-4">
                <Stars rating={product.rating} />
              </div>
              <h2 className="font-semibold ml-2 py-2 px-2"> {product.price}</h2>

              <p className="mt-2 text-gray-400 flex gap-2">
                <BadgeIndianRupee className="w-6 ml-4 h-6" /> Save 23% right now{" "}
              </p>

              {toggleCart ? (
                <div className="space-y-3 mt-6">
                  <h2 className="px-4 py-2 font-semibold text-[20px]">
                    Quantity
                  </h2>
                  <div className="flex items-center gap-4 ">
                    <div className="flex items-center border border-gray-300 ml-2 w-26 rounded-md overflow-hidden ">
                      <button
                        onClick={() => {
                          if (qty <= 1) {
                            setToggleCart(false);
                            setQty(1);
                          } else {
                            setQty(qty - 1);
                          }
                        }}
                        className="px-3 py-2 text-lg font-semibold hover:bg-gray-200"
                      >
                        -
                      </button>
                      <div className="px-2 py-2 text-lg"> {qty} </div>
                      <button
                        onClick={() => setQty(qty + 1)}
                        className="px-3 py-2 text-lg font-semibold hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    <button onClick={()=>navigate('/cart')} className="bg-black text-white px-4 py-4 rounded-md text-sm mb-1 w-32">
                      View Cart
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="bg-black text-white px-2 py-4 w-42 mt-6 rounded-md m-4 text-sm "
                >
                  Add to Cart
                </button>
              )}
              <div className="mx-4 mt-2 mb-4 border-b border-gray-300 w-88" />
              <div className="flex flex-col mt-2">
                <div className="flex text-gray-400 px-4 py-2 gap-2">
                  <Globe /> Free shipping worldwide
                </div>
                <div className="flex text-gray-400 px-4 py-2 gap-2">
                  <CreditCard /> 100% Secured Payment
                </div>
                <div className="flex text-gray-400 px-4 py-2 gap-2">
                  <User /> Trusted by top brands
                </div>
              </div>
            </div>
          </div>

          <div>
              <div className="mt-8 px-4 py-4">
            <h2 className="text-[12px] font-semibold pb-2 border-b border-gray-200">
              Description
            </h2>
            <p className="text-sm mt-2 max-w-lg gap-2 font-light">
              {product.description}{" "}
            </p>
          </div>

          <div className="px-2 py-4 flex mb-4 ">
            <img
              src="/happystore.webp"
              alt=""
              className="h-14 w-14 border border-gray-400 rounded-full"
            />
            <h2 className="text-[14px] gap-2 mt-4 ml-2">
              Product by Happy shop
            </h2>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
