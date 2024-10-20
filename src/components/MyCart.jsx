import React from "react";
import CartProduct from "./CartProduct";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function MyCart() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 


  return (
    <div className="py-12">
      <div className="w-10/12 mx-auto flex gap-6">
        <div className="left flex flex-col w-8/12 ">
          <div className="heading lightColor flex flex-row font-bold text-center py-6">
            <h4 className="w-2/6">Products</h4>
            <h4 className="w-1/6">Price</h4>
            <h4 className="w-1/6">Quantity</h4>
            <h4 className="w-2/6">Subtotal</h4>
          </div>
          <CartProduct/>
          <CartProduct/>
          <CartProduct/>
     



        </div>
        <div className="relative right w-4/12 lightColor py-6 px-12 flex flex-col justify-start">
  <div>
    <h1 className="text-center font-black text-2xl md:text-3xl lg:text-4xl py-2">Cart Total</h1>
  </div>
  <div className="flex flex-row justify-between items-center py-2">
    <h3 className="w-2/5 text-lg md:text-xl lg:text-2xl">Subtotal</h3>
    <h3 className="w-3/5 text-lg md:text-xl lg:text-2xl text-gray-500 font-bold">Rs. <span>50,000</span></h3>
  </div>
  <div className="flex flex-row justify-between items-center py-2">
    <h3 className="w-2/5 text-lg md:text-xl lg:text-2xl">DC</h3>
    <h3 className="w-3/5 text-lg md:text-xl lg:text-2xl text-gray-500 font-bold">Rs. <span>500</span></h3>
  </div>
  <div className="flex flex-row justify-between items-center py-2">
    <h3 className="w-2/5 text-lg md:text-xl lg:text-2xl">Discount</h3>
    <h3 className="w-3/5 text-lg md:text-xl lg:text-2xl text-gray-500 font-bold">Rs. -<span>7,500</span></h3>
  </div>
  <div className="flex flex-row justify-between items-center py-2">
    <h3 className="w-2/5 text-lg md:text-xl lg:text-2xl">Total</h3>
    <h3 className="w-3/5 text-lg md:text-xl lg:text-2xl darkFont font-bold">Rs. <span>42,500</span></h3>
  </div>
  <div className="w-full mx-auto text-center">
    <button className="w-full border-2 darkBorder font-bold darkFont shadow-lg py-2">
      <Link to="/checkout">Checkout</Link>
    </button>
  </div>
</div>

      </div>
    </div>
  );
}
