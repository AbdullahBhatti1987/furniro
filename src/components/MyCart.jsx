import React, { useContext } from "react";
import CartProduct from "./CartProduct";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AddtoCartContext } from "../context/AddToCart";
import { UserContext } from "../context/UserContext";

export default function MyCart() {
  const location = useLocation();

  const { user } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const {
    addtoCart,
    setAddtoCart,
    addItemToCart,
    lessQuanityFromCart,
    removeItemFromCart,
    isItemAdded,
  } = useContext(AddtoCartContext);

  return (
    <div className="py-12">
      <div className="w-10/12 mx-auto flex gap-6">
        <div className="left flex flex-col w-8/12 ">
          <div className="heading lightColor flex flex-row font-bold text-center py-6">
            <h4 className="w-2/12">Products</h4>
            <h4 className="w-3/12">Title</h4>
            <h4 className="w-2/12">Price</h4>
            <h4 className="w-2/12">Quantity</h4>
            <h4 className="w-2/12">Subtotal</h4>
            <h4 className="w-1/12"></h4>
          </div>
          <div className="w-full flex flex-col gap-2 py-2">
            {addtoCart.map((data) => (
              <CartProduct
                key={data.id}
                src={data.thumbnail}
                title={data.title}
                price={data.price}
                onClick={() => removeItemFromCart()}
                removeItem={()=> removeItemFromCart()}
                addItem={()=> addItemToCart()}
              />
            ))}
          </div>
        </div>
        <div className="relative right w-4/12 lightColor py-2 md:py-4 lg:py-6 px-4 md:px-8 lg:px-12 flex flex-col justify-start">
          <div>
            <h1 className="text-center font-black text-2xl md:text-3xl lg:text-4xl py-2">
              Cart Total
            </h1>
          </div>
          <div className="flex flex-row justify-between items-center py-2">
            <h3 className="w-2/5 text-sm md:text-md lg:text-lg">Subtotal</h3>
            <h3 className="w-3/5 text-sm md:text-md lg:text-lg text-gray-500 font-bold">
              $
              <span className="pl-2">
                {addtoCart
                  .reduce((total, item) => total + item.price, 0)
                  .toFixed(2)}
              </span>
            </h3>
          </div>
          <div className="flex flex-row justify-between items-center py-2">
            <h3 className="w-2/5 text-sm md:text-md lg:text-lg">Delivery</h3>
            <h3 className="w-3/5 text-sm md:text-md lg:text-lg text-gray-500 font-bold">
              $<span className="pl-2">Free</span>
            </h3>
          </div>
          <div className="flex flex-row justify-between items-center py-2">
            <h3 className="w-2/5 text-sm md:text-md lg:text-lg">Discount</h3>
            <h3 className="w-3/5 text-sm md:text-md lg:text-lg text-gray-500 font-bold">
              $
              <span className="pl-2">
                {addtoCart
                  .reduce((total, item) => {
                    const discountAmount =
                      (item.price * item.discountPercentage) / 100; 
                    return total + discountAmount; 
                  }, 0)
                  .toFixed(2)}
              </span>
            </h3>
          </div>
          <div className="flex flex-row justify-between items-center py-2">
            <h3 className="w-2/5 text-sm md:text-md lg:text-lg">Total</h3>
            <h3 className="w-3/5 text-sm md:text-md  lg:text-lg darkFont font-bold">
              $
              <span className="pl-2">
                {addtoCart
                  .reduce((total, item) => {
                    const discountAmount =
                      (item.price * item.discountPercentage) / 100; 
                    return total + (item.price - discountAmount); 
                  }, 0)
                  .toFixed(2)}
              </span>
            </h3>
          </div>
          <div className="w-full mx-auto text-center">
            <button className="w-full border-2 darkBorder font-bold darkFont shadow-lg py-2">
            <Link to={user.isLogin ? "/checkout" : "/auth/login"}>Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
