import Link from "next/link";
import React from "react";
import { FaMailBulk } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#19191b]">
      <div className="flex flex-col md:flex-row justify-center items-center p-20 ">
        <div className="flex md:flex-1 flex-col md:flex-row justify-between ">
          <div className="flex flex-col text-center gap-3">
            <h1 className="text-white font-bold tracking-wider uppercase">
              Quick Links
            </h1>
            <p className="w-[100px] h-[2px] bg-[#303032] text-[#303032] mb-4"></p>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
            Blog
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              About
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              Styles
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              Contact
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              Privacy Policy
            </Link>
          </div>
          <div className=" flex-col text-center  gap-3 hidden lg:flex ">
            <h1 className="text-white font-bold tracking-wider uppercase">
              Archives
            </h1>
            <p className="w-[100px] h-[2px] bg-[#303032] text-[#303032] mb-4"></p>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              January 2018
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              December 2019
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              October 2020
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              November 2021
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              March 2022
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              May 2023
            </Link>
          </div>
          <div className="flex flex-col  text-center  gap-3 mt-6 md:mt-0">
            <h1 className="text-white font-bold tracking-wider uppercase">
              Social
            </h1>
            <p className="w-[100px] h-[2px] bg-[#303032] text-[#303032] mb-4"></p>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              Facebook
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              Instagram
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              Twitter
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              LinkedIn
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              GitHub
            </Link>
            <Link
              href={"/"}
              className="capitalize text-[#818b96c9] hover:text-[#fff] cursor-pointer font-light"
            >
              YouTube
            </Link>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center   md:flex-1 md:ml-[150px] gap-3 text-white ">
          <h1 className="text-white font-bold   tracking-widest uppercase mt-6 md:mt-0">
            Our NewsLetter
          </h1>
          <p className="w-[100px] h-[2px] bg-[#303032] text-[#303032] mb-4"></p>
          <p className=" text-[#818b96c9] font-light  pl-5 pr-5 capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta
            ad nesciunt quidem quo iusto. Tenetur quibusdam vel sed iusto.
          </p>
          <div className="flex flex-row ">
            <div className="flex bg-[#161618] gap-2 items-center p-3">
              <FaMailBulk className="text-white" />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-none outline-none"
              />
            </div>
            <button className="bg-[#0054a5] p-3 text-white tracking-wider font-semibold">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className=" text-[#818b96c9] p-4 flex md:flex-row flex-col text-center md:ml-16 md:gap-4">
        <p>&copy;Copyright 2023  </p>
        <span className="hidden md:flex">|</span>
        <p> Talha JazZy </p>
      </div>
    </div>
  );
};

export default Footer;
