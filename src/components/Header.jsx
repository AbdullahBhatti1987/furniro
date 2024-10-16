import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { TbUserExclamation } from "react-icons/tb";

export function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V-KgMF65bBpedJXfxnEh5Re44eKl0ptjo1vHE0H2caKlZSKxSiipCgF9xMEBLT8rrCzA4qLXt6vUNroksYtvS2SrZ4PFU1TG6OtrH5UjO~XMt8JFfNVgS~fQzJiRvpPn7hvXPyXfdgVMgVfyKtFgkwlDXg7B9QBgKybRWGg8BTCd5RlnYtNW57N4FcL3m9o64gdFFannJlge4WJFhm1UKBfZ3js-VcQb6DhAmaNCdg9XL8cr0cbT68Y6XV6g1S3IZcJUjmWtbQhteIxuhhMdTsAiglZLBo1WRY6tIoLAz3Sjq8xJxydvHnf76FX-HmucGkl6FgUjLxbUYIiwEPPCNw__" className="lg:h-16 sm:h-9 " alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-3xl font-bold dark:text-white ">Furniro</span>
      </Navbar.Brand>
      <div className="flex md:order-2 sm:order-2 h-full justify-center items-center">
        <div className="flex lg:gap-10">
          <TbUserExclamation className="text-lg font-bold"/>
          <IoIosSearch className="text-lg font-bold"/>
          <FaRegHeart className="text-lg font-bold"/>
          <BsCart className="text-lg font-bold"/>

        </div>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="flex gap-12">
        <Navbar>
          <Link to={"/"}>Home</Link>
        </Navbar>
        <Navbar>
          <Link to={"/shop"}>Shop</Link>
        </Navbar>
        <Navbar>
          <Link to={"/about"}>About</Link>
        </Navbar>
        <Navbar>
          <Link to={"/contact"}>Contact</Link>
        </Navbar>      
      </Navbar.Collapse>
    </Navbar>
  );
}
