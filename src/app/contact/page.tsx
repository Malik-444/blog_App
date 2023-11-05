import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="mx-5 md:mx-10 lg:mx-40 px-2 md:px-16 py-8 flex gap-11 flex-col">
        <h1 className="font-semibold text-black text-center capitalize p-0 md:p-4 text-4xl md:text-5xl">
          Feel free to contact us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          perspiciatis, doloribus vitae impedit, aperiam voluptas, omnis
          voluptate sequi iste consequatur fugit tenetur beatae officia?
          Distinctio fuga hic sed praesentium ipsum.
        </p>
        <div className="flex flex-col md:flex-row justify-around ">
          <div className="flex-1 flex flex-col mt-3 md:mt-7">
            <h2 className="font-medium text-black text-2xl capitalize mb-3">
              Where to find us
            </h2>
            <span className="font-normal text-base text-[#757578]">
              F9-Isb viewpark
            </span>
            <span className="font-normal text-base text-[#757578]">
              Mountain view
            </span>
            <span className="font-normal text-base text-[#757578]">
              2564 PK
            </span>
          </div>
          <div className="flex-1 flex flex-col mt-7">
            <h2 className="font-medium text-black text-2xl capitalize mb-3">
              Conatact Info
            </h2>
            <span className="font-normal text-base text-[#757578]">
              talhahusnain75@gmail.com
            </span>
            <span className="font-normal text-base text-[#757578]">
              www.linkedin/tlahusnain
            </span>
            <span className="font-normal text-base text-[#757578]">
              Phone: +92 323 656 0041
            </span>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-3xl text-black">Say Hello.</h1>
          <form className="flex flex-col gap-8 mt-7">
            <input
              type="text"
              placeholder="Your Name"
              className="border-b-2  text-[#155aa6] text-xl border-gray-500 outline-none py-4 bg-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-b-2  text-[#155aa6] text-xl border-gray-500 outline-none py-4 bg-transparent"
            />
            <input
              type="text"
              placeholder="Website"
              className="border-b-2  text-[#155aa6] text-xl border-gray-500 outline-none py-4 bg-transparent"
            />
            <textarea
              cols={3}
              rows={3}
              placeholder="Your Message"
              className="border-b-2 text-[#155aa6] text-xl  border-gray-500 outline-none py-2 bg-transparent"
            ></textarea>
            <button className="text-lg font-semibold tracking-wider py-4 bg-black text-white hover:bg-[#155aab] hover:transition-all hover:ease-in-out hover:delay-300 duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
