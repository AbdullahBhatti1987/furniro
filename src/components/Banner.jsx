import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { LuBadgeCheck } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";

function Banner() {
  return (
    <div className="lightColor py-24">
      <div className="lg:w-10/12 mx-auto flex lg:flex-row md:flex-row flex-col justify-between items-center gap-12">
        <div className="lg:w-1/2 w-5/6 flex flex-row justify-between items-center gap-4">
          <div className=" flex flex-row justify-between items-center gap-3">
            <HiOutlineTrophy className="text-5xl" />
            <div
              className="flex flex-col justify-between
             items-start"
            >
              <h2 className="text-start font-black text-xl">High Quality</h2>
              <h3 className="text-start font-gray-400 text-lg">
                crafted from top materials
              </h3>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-3">
            <LuBadgeCheck className="text-5xl" />
            <div
              className="flex flex-col justify-between
             items-start"
            >
              <h2 className="text-start font-black text-xl">High Quality</h2>
              <h3 className="text-start font-gray-400 text-lg">
                crafted from top materials
              </h3>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-5/6 flex flex-row justify-between items-center gap-4">
          <div className="flex flex-row justify-between items-center gap-3">
            <LiaShippingFastSolid className="text-5xl" />
            <div
              className="flex flex-col justify-between
             items-start"
            >
              <h2 className="text-start font-black text-xl">High Quality</h2>
              <h3 className="text-start font-gray-400 text-lg">
                crafted from top materials
              </h3>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-3">
            <BiSupport className="text-5xl" />
            <div
              className="flex flex-col justify-between
             items-start"
            >
              <h2 className="text-start font-black text-xl">High Quality</h2>
              <h3 className="text-start font-gray-400 text-lg">
                crafted from top materials
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
