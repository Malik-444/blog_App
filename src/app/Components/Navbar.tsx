"use client";
import React, { useState } from "react";
import Link from "next/link";
import Social from "./Social";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerMeun = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" flex flex-col w-full h-fit bg-[#19191b] text-white p-6">
      <div className="flex justify-around md:justify-around items-center">
        <button
          className="md:hidden text-xl transition-transform delay-100 ease-in-out"
          onClick={hamburgerMeun}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <div className="hidden md:flex"><Social/></div>
        <h1 className="text-6xl ">Talha</h1>
        <div className="text-lg flex md:bg-[#161618] gap-2 items-center py-1 px-2 border-none rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="uppercase tracking-wide font-light hidden md:flex bg-transparent border-none outline-none px-2 py-1 "
          />
          <div className="cursor-pointer">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center gap-10 text-xl mt-8">
        <Link
          href={"#"}
          className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
        >
          Home
        </Link>
        <Link
          href={"#"}
          className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
        >
          Categories
        </Link>
        <Link
          href={"#"}
          className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
        >
          Blog
        </Link>
        <Link
          href={"#"}
          className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
        >
          About
        </Link>
        <Link
          href={"/contact"}
          className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
        >
          Contact
        </Link>
        <Link
          href={"#"}
          className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
        >
          SignIn
        </Link>
      </div>
      <div className="flex flex-col w-[100%] max-h-fit justify-center items-center gap-10 text-xl mt-8 ">
        {isOpen && (
          <>
            <Link
              href={"#"}
              className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
            >
              Home
            </Link>
            <Link
              href={"#"}
              className="text-[#818b96c9] cursor-pointer hover:text-[#fff] "
            >
              Categories
            </Link>
            <Link
              href={"#"}
              className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
            >
              Blog
            </Link>
            <Link
              href={"#"}
              className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
            >
              About
            </Link>
            <Link
              href={"#"}
              className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
            >
              Contact
            </Link>
            <Link
              href={"#"}
              className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
            >
              SignIn
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
