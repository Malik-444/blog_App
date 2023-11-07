import Card from "@/app/Components/Card";
import React from "react";

type Props = {};

const Programming = (props: Props) => {
  return (
    <div className="bg-[#f2f2f2] ">
      <div className="flex flex-col items-center justify-center gap-10  py-8 ">
        <h1 className="font-semibold text-4xl md:text-6xl mt-2 md:mt-6">Category : Programming</h1>
        <p className="text-[#757578] font-normal text-xl px-6 md:px-20 mx-6 md:mx-20  text-center">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis harum ea consectetur sapiente maxime deleniti aliquam aperiam quia cum commodi magnam, error, reiciendis ipsa quas quae dolores rem amet rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sunt.
        </p>
        <div className=" px-10  py-16 flex flex-wrap justify-center items-center gap-7 bg-[#f2f2f2] ">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Programming;
