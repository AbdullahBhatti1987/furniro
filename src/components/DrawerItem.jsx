import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Drawer } from "flowbite-react";

export default function DrawerItem({ title, count, amount, image }) {
  return (
    <Drawer.Items className={"shadow-md rounded-xl py-2"}>
      <div className=" flex flex-row justify-between items-center">
        <div className="w-6/6 flex flex-row justify-between items-center border rounded-xl p-1">
          <div className="w-2/6 lightColor rounded-lg">
            <img
              src={image}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="">
            <h3 className="text-lg">{title}</h3>
            <p className="flex flex-row gap-2">
              <span>{count}</span> X
              <span className="darkFont">
                Rs. <span>{amount}</span>
              </span>
            </p>
          </div>
          <div>
            <IoIosCloseCircle className="text-2xl text-gray-400" />
          </div>
        </div>
      </div>
    </Drawer.Items>
  );
}
