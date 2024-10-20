"use client";

import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { Drawer } from "flowbite-react";
import DrawerItem from "./DrawerItem";
import { Link } from "react-router-dom";

export function CartSidebar({totalCart}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

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
      <Drawer className="flex flex-col gap-1 h-fit max-h-[100vh]  shadow-lg overflow-y-scroll" open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Shopping Cart" />       
        <div className="overflow-y-scroll min-h-[60vh]">
        <DrawerItem title={"Asgaard sofa"} count={1} amount={"250,000"} image={"https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A48V1PV1lZVvMFoFBeOVQueiIleT9L4nXivR7zHgx96OJZhvl5af353WPur8rpJAoMPzXUqcpOAcB9f-hOZxASk3qL9PXugNgsIJxJD8eEMvvNoE3ghPq3wxRRQxwvjNTmVrKE6CohfgM6t0Cr8opCxbM6QCPDyXBz1C-Y0wLdxSvywczpAG8376zNkORfD-l5k4YSqM1h9rjiVO9uTIz6uwxPpoXDDJLkskBACsQEtJslBVEKqpsVWTHNZ63t-3Fq0DluBS6Oc-~X8QyrmncM4jsuTPDI2klnq8PVKx6Eq3tsdv-zfGLHCuoTB5iFfvZDcx0fPrcM804f5GrjiQbg__"}/>       
      
        </div>
        

        <div className="flex flex-row py-2 border-b-2">
          <div className="w-2/6">Subtotal</div>
          <div className="w-4/6 darkFont font-bold"> Rs. <span>25,00,000</span></div>
        </div>

          <div className="flex flex-row gap-2 justify-between items-center">
          <div className="w-3/12"><Link to={"/cart" }><button onClick={handleClose} className="rounded-full border border-gray-500 text-gray-500 active:text-black active:bg-gray-200 w-full py-1 shadow-md active:shadow-sm">Cart</button></Link></div>
          <div className="w-4/12"><Link to={"/checkout" }><button onClick={handleClose} className="rounded-full border border-gray-500 text-gray-500 active:text-black active:bg-gray-200 w-full py-1 shadow-md active:shadow-sm">Checkout</button></Link></div>
          <div className="w-5/12"><button onClick={handleClose} className="rounded-full border border-gray-500 text-gray-500 active:text-black active:bg-gray-200 w-full py-1 shadow-md active:shadow-sm">comparison</button></div>
        </div>
    


      </Drawer>
    </>
  );
}
