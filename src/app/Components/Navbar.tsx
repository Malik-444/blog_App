"use client";
import React, { useState } from "react";
import Link from "next/link";
import Social from "./Social";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [catIsHover, setCatIsHover] = useState(false);
  const [blogIsHover, setBlogIsHover] = useState(false);

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
        <div className="hidden md:flex">
          <Social />
        </div>
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
          href={"/"}
          className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
        >
          Home
        </Link>
        <div
          className="text-[#818b96c9] cursor-pointer hover:text-[#fff] relative inline-block"
          onMouseEnter={() => setCatIsHover(true)}
          onMouseLeave={() => setCatIsHover(false)}
        >
          <Link href={"#"} className="flex items-end">
            Categories <BiChevronDown />
          </Link>
          {catIsHover && (
            <div className="absolute -left-4 top-7 text-[#818b96c9] font-normal text-base bg-black py-4 px-4  flex flex-col gap-3 w-max">
              <Link href={"/categories/webDevelopment"} className="  text-[#818b96c9] hover:text-white">
                Web Development
              </Link>
              <Link href={"/categories/appDevelopment"} className="  text-[#818b96c9] hover:text-white">
                App Development
              </Link>
              <Link href={"categories/machineLearning"} className="  text-[#818b96c9] hover:text-white">
                Machine Leraning
              </Link>
              <Link href={"/categories/dataScience"} className="  text-[#818b96c9] hover:text-white">
                Data Science
              </Link>
              <Link href={"/categories/darkWeb"} className=" text-[#818b96c9] hover:text-white">
                Dark Web
              </Link>
            </div>
          )}
        </div>
        <div
          className="text-[#818b96c9] cursor-pointer hover:text-[#fff] relative inline-block"
          onMouseEnter={() => setBlogIsHover(true)}
          onMouseLeave={() => setBlogIsHover(false)}
        >
          <Link href={"#"} className="flex items-end">
            Blogs <BiChevronDown />
          </Link>
          {blogIsHover && (
            <div className="absolute -left-4 top-7 text-[#818b96c9] font-normal text-base bg-black py-4 px-4  flex flex-col gap-3 w-max">
              <Link href={"#"} className="  text-[#818b96c9] hover:text-white">
                JavaScript
              </Link>
              <Link href={"#"} className="  text-[#818b96c9] hover:text-white">
                React Js
              </Link>
              <Link href={"#"} className="  text-[#818b96c9] hover:text-white">
                Tailwind CSS
              </Link>
              <Link href={"#"} className="  text-[#818b96c9] hover:text-white">
                Python
              </Link>
              <Link href={"#"} className=" text-[#818b96c9] hover:text-white">
                C++
              </Link>
            </div>
          )}
        </div>
        <Link
          href={"/about"}
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
      <div className="flex flex-col md:hidden w-[100%] max-h-fit justify-center items-center gap-10 text-xl mt-8 ">
        {isOpen && (
          <>
            <Link
              href={"#"}
              className="text-[#818b96c9] cursor-pointer hover:text-[#fff]"
            >
              Home
            </Link>
            <div
              className="text-[#818b96c9] cursor-pointer hover:text-[#fff] relative inline-block"
              onMouseEnter={() => setCatIsHover(true)}
              onMouseLeave={() => setCatIsHover(false)}
            >
              <Link href={"#"} className="flex items-end">
                Categories <BiChevronDown />
              </Link>
              {catIsHover && (
                <div className="absolute -left-4 top-7 text-[#818b96c9] font-normal text-base bg-black py-4 px-4  flex flex-col gap-3 w-max z-50">
                  <Link
                    href={"/categories/webDevelopment"}
                    className="  text-[#818b96c9] hover:text-white"
                  >
                    Web Development
                  </Link>
                  <Link
                    href={"/categories/appDevelopment"}
                    className="  text-[#818b96c9] hover:text-white"
                  >
                    App Development
                  </Link>
                  <Link
                    href={"/categories/machineLearning"}
                    className="  text-[#818b96c9] hover:text-white"
                  >
                    Machine Leraning
                  </Link>
                  <Link
                    href={"/categories/dataScience"}
                    className="  text-[#818b96c9] hover:text-white"
                  >
                    Data Science
                  </Link>
                  <Link
                    href={"/categories/darkWeb"}
                    className=" text-[#818b96c9] hover:text-white"
                  >
                    Dark Web
                  </Link>
                </div>
              )}
            </div>
            <div
              className="text-[#818b96c9] cursor-pointer hover:text-[#fff] relative inline-block"
              onMouseEnter={() => setBlogIsHover(true)}
              onMouseLeave={() => setBlogIsHover(false)}
            >
              <Link href={"#"} className="flex items-end">
                Blogs <BiChevronDown />
              </Link>
              {blogIsHover && (
                <div className="absolute -left-4 top-7 text-[#818b96c9] font-normal text-base bg-black py-4 px-4  flex flex-col gap-3 w-max">
                  <Link
                    href={"#"}
                    className="  text-[#818b96c9] hover:text-white"
                  >
                    JavaScript
                  </Link>
                  <Link
                    href={"#"}
                    className="  text-[#818b96c9] hover:text-white"
                  >
                    React Js
                  </Link>
                  <Link
                    href={"#"}
                    className="  text-[#818b96c9] hover:text-white"
                  >
                    Tailwind CSS
                  </Link>
                  <Link
                    href={"#"}
                    className="  text-[#818b96c9] hover:text-white"
                  >
                    Python
                  </Link>
                  <Link
                    href={"#"}
                    className=" text-[#818b96c9] hover:text-white"
                  >
                    C++
                  </Link>
                </div>
              )}
            </div>
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
