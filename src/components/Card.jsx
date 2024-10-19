import React, { useState } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

function Card({ src, alt, title, category, newPrice, oldPrice, discountPercentage}) {
  const [isHovered, setIsHovered] = useState(false);
  const [discount, setDiscount] = useState(false);
  // const [newArrival, setNewArrival] = useState(false);

  return (
    <div
      className="w-[47%] md:w-[30%] lg:w-[23%] relative overflow-hidden group shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <img className="w-full" src={src} alt={alt} />

      {/* Product Information */}
      <div className="p-2 md:p-4 flex flex-col justify-between flex-grow">
        <h3 className="font-bold text-lg md:text-xl text-start">{title}</h3>
        <p className="text-gray-600 text-start text-sm md:text-base">{category}</p>
        <div className="flex flex-row items-center justify-between">
          <span className="text-base md:text-xl font-semibold">${newPrice}</span>
          <span className="text-base md:text-xl line-through text-gray-400">
            ${oldPrice}.00
          </span>
        </div>
      </div>

      {/* Discount Badge */}
      {!discount && (
        <div className="absolute top-2 left-2 min-w-12 min-h-12 flex justify-center items-center bg-red-500 text-white px-2 py-1 rounded-full text-xs md:text-sm">
          {discountPercentage}
        </div>
      )}
        {/* NewArrival Badge */}
        {/* {!newArrival && (
        <div className="absolute top-2 right-2 min-w-12 min-h-12 flex justify-center items-center bg-green-400 text-white px-2 py-1 rounded-full text-xs md:text-sm">
          {newArrival}
        </div>
      )} */}

     
<div
  className={`absolute inset-0 hoverColor opacity-80 text-white flex flex-col items-center justify-center gap-4 md:gap-8
  transform ${isHovered ? "translate-y-0" : "-translate-y-full"} 
  transition-transform duration-500 ease-out`}
>
  {/* Button without opacity */}
  <button className="addToCartBtn darkFont text-nowrap bg-white opacity-100 px-4 py-2 font-bold text-sm md:text-base">
    Add to cart
  </button>

  <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-2 md:gap-4 text-sm md:text-lg">
    <div className="flex justify-center items-center gap-1">
      <IoShareSocialSharp />
      <span className="cursor-pointer">Share</span>
    </div>
    <div className="flex justify-center items-center gap-1">
      <MdOutlineCompareArrows />
      <span className="cursor-pointer">Compare</span>
    </div>
    <div className="flex justify-center items-center gap-1">
      <FaRegHeart />
      <span className="cursor-pointer">Like</span>
    </div>
  </div>
</div>

    </div>
  );
}

export default Card;
