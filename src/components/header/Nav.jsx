import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./media/logo.png";

function Nav() {
  const [navToggle, setNavToggle] = useState(true);

  function closeNav() {
    setNavToggle(true);
  }

  function openNav() {
    setNavToggle(false);
  }

  return (
    <>
      <nav className="pt-5 lg:pt-10 w-full px-[1rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem] flex justify-between items-center">
        <div className="flex-[40%] flex items-center">
          <img className=" w-[6rem] md:w-[8rem] lg:w-[10rem]" src={logo} />
        </div>
        <div className="flex-[40%] hidden lg:flex justify-evenly items-center md:text-[1.125rem] lg:text-[1.125rem] ">
          <div className="font_inter hover:underline cursor-pointer font-medium">
            <a>Home</a>
          </div>
          <div className="font_inter hover:underline cursor-pointer text-gray-400 ">
            <a>Product</a>
          </div>
          <div className="font-inter hover:underline cursor-pointer text-gray-400">
            <a>FAQ</a>
          </div>
          <div className="font_inter hover:underline cursor-pointer text-gray-400 ">
            <a>Blog</a>
          </div>
          <div className="font_inter hover:underline cursor-pointer text-gray-400 ">
            <a>About Us</a>
          </div>
        </div>
        <div className="flex-[20%] lg:text-[1.125rem] md:text-[0.8rem] hidden lg:flex items-center justify-end font_inter gap-3">
          <button className="text-[1rem] text-gray-400  p-2">Login</button>
          <button className="text-[1rem] text-white bg-[#54BD95]  p-2 rounded-md">
            Sign Up
          </button>
        </div>
        <div className="lg:hidden">
          <GiHamburgerMenu size={24} onClick={openNav} />
        </div>
      </nav>
      <div
        className={`${
          navToggle ? "w-[0vw] h-[0vh]" : "w-[100vw] h-[100vh]"
        } fixed overflow-x-hidden transition_mobile flex flex-col items-center justify-center font_inter  top-0 left-0 mobile_nav_bg_color text-white text-[1.5rem] md:text-[2rem]`}
      >
        <button className="absolute top-3 right-3 md:top-6 md:right-11 cursor-pointer">
          <MdClose size={30} onClick={closeNav} />
        </button>
        <div className="font_inter hover:underline cursor-pointer mb-2">
          <a>Home</a>
        </div>
        <div className="font_inter hover:underline cursor-pointer mb-2">
          <a>Product</a>
        </div>
        <div className="font-inter hover:underline cursor-pointer mb-2">
          <a>FAQ</a>
        </div>
        <div className="font_inter hover:underline cursor-pointer mb-2">
          <a>Blog</a>
        </div>
        <div className="font_inter hover:underline cursor-pointer mb-2">
          <a>About Us</a>
        </div>
      </div>
    </>
  );
}

export default Nav;
