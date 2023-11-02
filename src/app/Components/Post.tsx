import React from "react";
import Image from "next/image";
import Social from "./Social";
type Props = {};

const Post = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-[2] gap-5  flex flex-col justify-center  ">
        <h1 className="font-bold text-3xl tracking-wide ml-10 mt-10">
          Popular Post
        </h1>
        <div className="flex px-9 py-6 gap-5 flex-wrap">
          <div className="flex flex-row gap-3">
            <Image
              src={"/card6.png"}
              alt="post-img"
              width={70}
              height={70}
              className="rounded-lg w[70] h-[70px]"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-medium">
                Throwback To The Good Old Days.
              </h2>
              <span className="font-light">By Talha H</span>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              src={"/card6.png"}
              alt="post-img"
              width={70}
              height={70}
              className="rounded-lg w[70] h-[70px]"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-medium">
                Throwback To The Good Old Days.
              </h2>
              <span className="font-light">By Talha H</span>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              src={"/card6.png"}
              alt="post-img"
              width={70}
              height={70}
              className="rounded-lg w[70] h-[70px]"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-medium">
                Throwback To The Good Old Days.
              </h2>
              <span className="font-light">By Talha H</span>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              src={"/card6.png"}
              alt="post-img"
              width={70}
              height={70}
              className="rounded-lg w[70] h-[70px]"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-medium">
                Throwback To The Good Old Days.
              </h2>
              <span className="font-light">By Talha H</span>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              src={"/card6.png"}
              alt="post-img"
              width={70}
              height={70}
              className="rounded-lg w[70] h-[70px]"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-medium">
                Throwback To The Good Old Days.
              </h2>
              <span className="font-light">By Talha H</span>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              src={"/card6.png"}
              alt="post-img"
              width={70}
              height={70}
              className="rounded-lg w[70] h-[70px]"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-medium">
                Throwback To The Good Old Days.
              </h2>
              <span className="font-light">By Talha H</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <div className=" container mx-auto py-5 px-4 sm:py-8 lg:pt-10 gap-10 flex flex-col">
          <h1 className="font-bold text-3xl">About philosophy</h1>
          <p className="font-medium text-[#696565]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo libero
            cupiditate beatae nisi aliquam consequatur. Saepe sint velit amet
            ipsum illum excepturi id repudiandae optio et. Doloremque maiores
            cum corporis nihil ullam ipsa, alias molestiae voluptatem atque
            eligendi fugit unde repellat hic eius rerum quaerat ad. Et, iure
            quos. Saepe!
          </p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Post;
