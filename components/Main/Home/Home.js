import React from "react";
import Image from "next/image";
import HomeCard from "./HomeCard";
const style = {
  wrapper:
    "flex flex-col items-center justify-center w-[100%] md:w-[75%] mx-auto",
};
const Home = () => {
  return (
    <div className={style.wrapper}>
      <h2 className="transform  py-4 md:py-12 text-3xl md:text-3xl text-gray-600 font-semibold bg-[#f0f0f0] w-[100vw] flex items-center justify-center text-center">
        Set up a forwarding order <span className="font-normal mx-2">now</span>
      </h2>
      {/* adding the image */}
      <div className="flex  md:top-[12rem] lg:top-[11rem] items-center">
        <Image src="/assets/postbox.png" width={400} height={200} />
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
