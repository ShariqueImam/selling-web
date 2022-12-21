import React from "react";
import Image from "next/image";
import HomeCardPhone from "./HomeCardPhone";
import HomeCard from "./HomeCard";
const style = {
  wrapper:
    "flex flex-col items-center justify-center w-[100%] md:w-[75%] mx-auto",
};
const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className="text-[#535353] flex flex-row items-center justify-around bg-[#f0f0f0] w-[100vw] pb-6">
        <div className="flex items-center justify-center flex-col md:flex-row ">
          <h2 className="transform  py-4 md:py-12 text-2xl md:text-3xl text-gray-600 font-semibold  flex items-center justify-center text-center">
            Nachsendeauftrag
          </h2>
          <span className="flex flex-col self-start sm:self-center mx-0 md:mx-8">
            <span className="font-normal text-xl md:text-3xl ">jetzt einrichten</span>
            <Image src={"/underline.svg"} height={20} width={220} />
          </span>
        </div>
        <div className="flex sm:hidden">
          <Image src="/assets/postbox.png" width={80} height={80} />
        </div>
      </div>
      {/* adding the image */}
      <div className="flex  md:top-[12rem] lg:top-[11rem] items-center flex-col  md:flex-row">
        <div className="hidden sm:flex">
          <Image src="/assets/postbox.png" width={400} height={200} />
        </div>
        <HomeCard />
        <HomeCardPhone />
      </div>
    </div>
  );
};

export default Home;
