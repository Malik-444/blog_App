import React from "react";
import Image from "next/image";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[#19191b] max-h-fit">
      <div className="flex flex-col lg:flex-row p-10 gap-3">
        <div className="flex-[2] bg-[url('/Hero3.jpg')] w-[100%] h-[600px] bg-cover bg-center text-[#ffffff] hover:opacity-50 hover:delay-150 hover:duration-300 ease-in-out">
          <div className="flex flex-col p-5 gap-2 mt-52  justify-start items-start z-50">
            <button className="px-2 py-1 ml-4 text-lg cursor-pointer  font-semibold tracking-wider text-white bg-[#01aef0]">Programming</button>
            <h1 className="text-4xl cursor-pointer p-4 font-semibold font-serif">What Your Progamming language Preference Says About You and Your Personality.</h1>
            <div className="p-0 md:p-4 text-[#818b96c9] flex items-center gap-5   ">
              <Image src={'/user-1.webp'} alt="user" width={50} height={50} className="rounded-full border hidden md:flex"/>
              <span className="cursor-pointer">Rehan</span>
              <span>May 9, 2023</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:flex-row lg:flex-col gap-3">
          <div className="bg-[url('/3.png')] w-[100%] h-[300px] bg-cover bg-center text-[#ffffff] hover:opacity-50 hover:delay-150 hover:duration-300 ease-in-out">
          <div className="flex flex-col gap-2  justify-start items-start z-50">
            <button className="px-2 py-1 p-2 ml-4 mt-20 text-base cursor-pointer  font-base tracking-wider text-white bg-[#679a23]">Hacking</button>
            <h1 className="text-xl cursor-pointer px-3 font-semibold font-serif">The Hacking Really Works.</h1>
            <div className="p-4 flex items-center gap-5  ">
              <span className="cursor-pointer">JazZy B</span>
              <span>November 20, 2023</span>
            </div>
          </div>
          </div>
          <div className="bg-[url('/2.png')] w-[100%] h-[300px] bg-cover bg-center text-[#ffffff] hover:opacity-50 hover:delay-150 hover:duration-300 ease-in-out">
          <div className="flex flex-col gap-2  justify-start items-start z-50">
            <button className="px-2 py-1 p-2 ml-4 mt-20 text-base cursor-pointer  font-base tracking-wider text-white bg-[#679a23]">Web 3.0</button>
            <h1 className="text-xl cursor-pointer px-3 font-semibold font-serif">Be Ready, Future is web 3.0</h1>
            <div className="p-4 flex items-center gap-5  ">
              <span className="cursor-pointer">Talha H</span>
              <span>October 15, 2023</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

