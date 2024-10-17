
"use client";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="text-black text-lg">
      <Breadcrumb.Item className="text-black" icon={HiHome}>
        <Link to={"/"} className="text-black">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item ><Link to={"/shop"} className="text-black">Shop</Link></Breadcrumb.Item>
    </Breadcrumb>
  );
}
