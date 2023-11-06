import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="mx-5 md:mx-10 lg:mx-40 px-2 md:px-16 py-8 flex gap-11 flex-col">
        <h1 className="font-semibold text-black text-center capitalize p-0 md:p-4 text-4xl md:text-5xl">
          Learn more about us.
        </h1>
        <div className="flex justify-center ">
          <Image src={"/about.webp"} alt="about-img" width={900} height={300} />
        </div>
        <div className="mx-14 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            repudiandae laborum nihil aperiam excepturi aliquam deserunt aut
            obcaecati, eaque, quas consequatur, corrupti inventore. Cum odio
            dignissimos, voluptas doloremque a repellendus eligendi saepe minima
            laborum quos autem ratione architecto iusto suscipit ducimus
            adipisci quisquam at quidem repudiandae officia delectus, officiis
            tempore.
          </p>
          <span className="font-normal text-base text-[#757578]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum
            necessitatibus pariatur dignissimos commodi similique consequuntur
            officia eaque obcaecati neque accusantium facere, exercitationem
            distinctio aliquam eum fugit minus animi cum.
          </span>
          <div className="flex flex-col md:flex-row justify-around gap-8 ">
            <div className="flex-1 flex flex-col mt-3 md:mt-7">
              <h2 className="font-medium text-black text-3xl capitalize mb-3">
                Who we are?
              </h2>
              <span className="font-normal text-lg text-[#757578] ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non omnis repudiandae quasi consectetur atque modi fugiat magnam voluptas praesentium! Ea.
              </span>
            </div>
            <div className="flex-1 flex flex-col mt-3 md:mt-7">
              <h2 className="font-medium text-black text-3xl capitalize mb-3">
                Our Mission.
              </h2>
              <span className="font-normal text-lg text-[#757578] ">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti necessitatibus numquam rerum officia corrupti, beatae exercitationem eum molestiae! Iure nobis asperiores maiores mollitia cumque odit repellat? Dignissimos.
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around gap-8 ">
            <div className="flex-1 flex flex-col mt-3 md:mt-7">
              <h2 className="font-medium text-black text-3xl capitalize mb-3">
               Our Vision.
              </h2>
              <span className="font-normal text-lg text-[#757578] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eos maxime ipsam ullam obcaecati, impedit magni totam magnam dolores ipsa, iste id dolore suscipit ut!
              </span>
            </div>
            <div className="flex-1 flex flex-col mt-3 md:mt-7">
              <h2 className="font-medium text-black text-3xl capitalize mb-3">
                our values.
              </h2>
              <span className="font-normal text-lg text-[#757578] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur totam ab provident accusamus soluta reiciendis expedita dolor quas veniam? Quae quibusdam est in reprehenderit ratione nulla eos eius omnis!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
