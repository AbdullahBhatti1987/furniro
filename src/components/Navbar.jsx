"use client";

import { Navbar } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoFingerPrintSharp } from "react-icons/io5";
import { TbUserExclamation } from "react-icons/tb";
import { Link, useNavigate} from "react-router-dom";
import { CartSidebar } from "./CartSidebar";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { DropdownOption } from "./dropdownOption";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { AddtoCartContext } from "../context/AddToCart";

export function Component() {
  const { user } = useContext(UserContext);
  const { addtoCart } = useContext(AddtoCartContext);

  const navigate = useNavigate();

  const HandleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        console.log("An error happened.", error);
        alert("An error happened.", error);
      });
  };

  return (
    <div className="w-full">
      <div className="lg:w-11/12 w-full mx-auto">
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
            <div className="flex lg:gap-8 md:gap-4 gap-2 justify-evenly items-center min-w-[25%] me-4">
              {user.isLogin ? (
                <DropdownOption
                  label={<IoFingerPrintSharp className="text-2xl" />}
                  email={user.email}
                  onClick={HandleSignOut}
                  username={user.userName}
                />
              ) : (
                <Link to={"/auth/login"}>
                  <TbUserExclamation className="text-lg lg:text-3xl" />
                </Link>
              )}

              <IoIosSearch className="text-xl lg:text-3xl" />
              <FaRegHeart className="text-xl lg:text-2xl" />

              <CartSidebar totalCart={addtoCart.length} />
            </div>

            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="transition-all duration-300 ease-in-out ">
            <Navbar.Link>
              <Link
                to="/"
                className="lg:text-lg md:text-md text-sm font-semibold dark:text-white hover:text-gray-500 focus:text-black
                "
              >
                Home
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link
                to="/shop"
                className="lg:text-lg md:text-md text-sm font-semibold dark:text-white hover:text-gray-500 focus:text-black"
              >
                Shop
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link
                to="/blog"
                className="lg:text-lg md:text-md text-sm font-semibold dark:text-white hover:text-gray-500 focus:text-black"
              >
                Blog
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link
                to="/about"
                className="lg:text-lg md:text-md text-sm font-semibold dark:text-white hover:text-gray-500 focus:text-black"
              >
                About
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link
                to="/contact"
                className="lg:text-lg md:text-md text-sm font-semibold dark:text-white hover:text-gray-500 focus:text-black"
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
