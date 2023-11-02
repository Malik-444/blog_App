import React from "react";

type Props = {};

const Tags = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="font-bold text-5xl ">Tags</h1>
      <div className="flex flex-wrap items-center justify-center gap-5 px-20 md:px-40 py-10">
        <button className="border rounded-md bg-[#e2e2e2] text-black uppercase tracking-wider hover:bg-black hover:text-white px-4 py-2 font-semibold hover:transition-colors duration-200 hover:delay-500 hover:ease-in-out">Coding</button>
        <button className="border rounded-md bg-[#e2e2e2] text-black uppercase tracking-wider hover:bg-black hover:text-white px-4 py-2 font-semibold hover:transition-colors duration-200 hover:delay-500 hover:ease-in-out">Programming</button>
        <button className="border rounded-md bg-[#e2e2e2] text-black uppercase tracking-wider hover:bg-black hover:text-white px-4 py-2 font-semibold hover:transition-colors duration-200 hover:delay-500 hover:ease-in-out">Hacking</button>
        <button className="border rounded-md bg-[#e2e2e2] text-black uppercase tracking-wider hover:bg-black hover:text-white px-4 py-2 font-semibold hover:transition-colors duration-200 hover:delay-500 hover:ease-in-out">Cyber Security</button>
        <button className="border rounded-md bg-[#e2e2e2] text-black uppercase tracking-wider hover:bg-black hover:text-white px-4 py-2 font-semibold hover:transition-colors duration-200 hover:delay-500 hover:ease-in-out">artificial intelligence</button>
        <button className="border rounded-md bg-[#e2e2e2] text-black uppercase tracking-wider hover:bg-black hover:text-white px-4 py-2 font-semibold hover:transition-colors duration-200 hover:delay-500 hover:ease-in-out">JavaScript</button>
        <button className="border rounded-md bg-[#e2e2e2] text-black uppercase tracking-wider hover:bg-black hover:text-white px-4 py-2 font-semibold hover:transition-colors duration-200 hover:delay-500 hover:ease-in-out">Web Development</button>
        <button className="border rounded-md bg-[#e2e2e2] text-black uppercase tracking-wider hover:bg-black hover:text-white px-4 py-2 font-semibold hover:transition-colors duration-200 hover:delay-500 hover:ease-in-out">Machine Learning</button>
        <button className="border rounded-md bg-[#e2e2e2] text-black uppercase tracking-wider hover:bg-black hover:text-white px-4 py-2 font-semibold hover:transition-colors duration-200 hover:delay-500 hover:ease-in-out">Data Scince</button>
        <button className="border rounded-md bg-[#e2e2e2] text-black uppercase tracking-wider hover:bg-black hover:text-white px-4 py-2 font-semibold hover:transition-colors duration-200 hover:delay-500 hover:ease-in-out">Dark Web</button>
        <button className="border rounded-md bg-[#e2e2e2] text-black uppercase tracking-wider hover:bg-black hover:text-white px-4 py-2 font-semibold hover:transition-colors duration-200 hover:delay-500 hover:ease-in-out">App Development</button>

      </div>
    </div>
  );
};

export default Tags;
