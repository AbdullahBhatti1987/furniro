"use client";

import { Navbar } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { TbUserExclamation } from "react-icons/tb";
import { Link } from "react-router-dom";

export function Component() {
  return (
   <div className="w-full">
    <div className="lg:w-10/12 md:w-11/12 w-full mx-auto">
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V-KgMF65bBpedJXfxnEh5Re44eKl0ptjo1vHE0H2caKlZSKxSiipCgF9xMEBLT8rrCzA4qLXt6vUNroksYtvS2SrZ4PFU1TG6OtrH5UjO~XMt8JFfNVgS~fQzJiRvpPn7hvXPyXfdgVMgVfyKtFgkwlDXg7B9QBgKybRWGg8BTCd5RlnYtNW57N4FcL3m9o64gdFFannJlge4WJFhm1UKBfZ3js-VcQb6DhAmaNCdg9XL8cr0cbT68Y6XV6g1S3IZcJUjmWtbQhteIxuhhMdTsAiglZLBo1WRY6tIoLAz3Sjq8xJxydvHnf76FX-HmucGkl6FgUjLxbUYIiwEPPCNw__"
          className="lg:h-16 h-16"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl lg:text-3xl font-bold dark:text-white">
          Furniro
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="flex lg:gap-8 gap-4 justify-evenly items-center min-w-[25%] me-4">
          <Link to={"/auth/login"}>
          <TbUserExclamation className="text-xl lg:text-3xl font-bold" />
          </Link>
          <IoIosSearch className="text-xl lg:text-3xl font-bold" />
          <FaRegHeart className="text-xl lg:text-2xl font-bold" />
          <BsCart className="text-xl lg:text-3xl font-bold" />
        </div>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="transition-all duration-300 ease-in-out ">
        <Navbar.Link>
          <Link
            to="/"
            className="lg:text-xl md:text-lg text-base font-semibold dark:text-white hover:text-gray-500"          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/shop"
            className="lg:text-xl md:text-lg text-base font-semibold dark:text-white hover:text-gray-500"         >
            Shop
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/blog"
            className="lg:text-xl md:text-lg text-base font-semibold dark:text-white hover:text-gray-500"         >
            Blog
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/about"
            className="lg:text-xl md:text-lg text-base font-semibold dark:text-white hover:text-gray-500"          >
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/contact"
            className="lg:text-xl md:text-lg text-base font-semibold dark:text-white hover:text-gray-500"
          >
            Contact
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
   </div>
  );
}
