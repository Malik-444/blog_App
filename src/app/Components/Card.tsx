import React from "react";
import Image from "next/image";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="bg-white rounded-3xl px-4 py-2 shadow-2xl w-96">
      <div className="w-[100%] flex items-center justify-center mt-2 ">
        <Image
          src="/card4.png"
          alt="Card image"
          width={300}
          height={200}
          className="w-[90%]  rounded-lg transition duration-700 ease-in-out delay-150 hover:scale-110 cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-start gap-3 px-2 py-4">
        <span className="text-[#85858c] items-start font-light text-sm">
          December 15, 2022
        </span>
        <h1 className="text-3xl font-bold">Just a Standard Format Post.</h1>
        <p className="text-lg font-normal ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iusto
          veniam error odio quidem mollitia repudiandae, nemo id pariatur
          ratione eos laudantium similique sit molestias!
        </p>
      </div>
      <div className="flex px-5 gap-1 py-3 ">
        <span className="text-sm font-medium cursor-pointer text-[#0054a5] hover:text-black">Security</span>
        <span className="text-sm font-medium cursor-pointer text-[#0054a5] hover:text-black">Cyber</span>
      </div>
    </div>
  );
};

export default Card;
