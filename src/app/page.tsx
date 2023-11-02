import Image from "next/image";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Post from "./Components/Post";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className=" px-20 py-20 flex flex-wrap justify-around items-center gap-3 bg-[#f2f2f2] ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-[100%]">
        <Post />
      </div>
    </div>
  );
}
