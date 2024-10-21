"use client";

import { useContext, useState } from "react";
import { BsCart } from "react-icons/bs";
import { Drawer } from "flowbite-react";
import DrawerItem from "./DrawerItem";
import { Link } from "react-router-dom";
import { AddtoCartContext } from "../context/AddToCart";
import { UserContext } from "../context/UserContext";

export function CartSidebar({ totalCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const { user } = useContext(UserContext);

  const {
    addtoCart,
    setAddtoCart,
    addItemToCart,
    lessQuanityFromCart,
    removeItemFromCart,
    isItemAdded,
  } = useContext(AddtoCartContext);

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative"
        >
          <BsCart className="text-xl lg:text-2xl font-bold "></BsCart>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold  text-white darkColor border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            <span>{totalCart}</span>
          </div>
        </button>
      </div>
      <Drawer
        className="flex flex-col gap-1 h-fit max-h-[100vh]  shadow-lg overflow-y-scroll"
        open={isOpen}
        onClose={handleClose}
        position="right"
      >
        <Drawer.Header title="Shopping Cart" />
        <div className="overflow-y-scroll min-h-[60vh]">
          {addtoCart.map((data) => (
            <DrawerItem
              key={data.id}
              title={data.title}
              count={1}
              amount={data.price}
              image={data.thumbnail}
            />
          ))}
        </div>

        <div className="flex flex-row py-2 border-b-2">
          <div className="w-2/6">Subtotal</div>
          <div className="w-4/6 darkFont font-bold"> 
          
          $   
  <span> 
    {addtoCart.reduce((total, item) => total + item.price, 0).toFixed(2)}
  </span>
          
          
          </div>
        </div>

        <div className="flex flex-row gap-2 justify-between items-center">
          <div className="w-3/12">
            <Link to={"/cart"}>
              <button
                onClick={handleClose}
                className="rounded-full border border-gray-500 text-gray-500 active:text-black active:bg-gray-200 w-full py-1 shadow-md active:shadow-sm"
              >
                Cart
              </button>
            </Link>
          </div>
          <div className="w-4/12">
            <Link to={user.isLogin ? "/checkout" : "/auth/login"}>
              <button
                onClick={handleClose}
                className="rounded-full border border-gray-500 text-gray-500 active:text-black active:bg-gray-200 w-full py-1 shadow-md active:shadow-sm"
              >
                Checkout
              </button>
            </Link>
          </div>
          <div className="w-5/12">
            <button
              onClick={handleClose}
              className="rounded-full border border-gray-500 text-gray-500 active:text-black active:bg-gray-200 w-full py-1 shadow-md active:shadow-sm"
            >
              comparison
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
