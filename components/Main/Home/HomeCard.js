import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
const style = {
  wrapper:
    "flex flex-col  w-[95%] md:w-[75%] mx-auto bg-white  w-[95%] md:w-[45%] pt-8 md:pt-12",
};
const HomeCard = () => {
  return (
    <div className={style.wrapper}>
      <div className="nav flex flex-col">
        <div className="flex items-center justify-start py-2 md:py-2 px-6 md:px-8 ">
          <TiTick className="text-green-500 text-2xl md:text-5xl mx-2 hidden sm:flex" />
          <p className="text-secondary">
            Cover a large number of deliverers and delivery services at the same
            time with
            <Link href="/">
              <span className="underline cursor-pointer">our service</span>
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-start py-2 md:py-2 px-6 md:px-8">
          <TiTick className="text-green-500 text-2xl md:text-5xl mx-2 hidden sm:flex" />
          <p className="text-secondary">
            Submit your application in just a few minutes using our easy-to-use
            online form
          </p>
        </div>
        <div className="flex items-center justify-start py-2 md:py-2 px-6 md:px-8">
          <TiTick className="text-green-500 text-2xl md:text-4xl mx-2 hidden sm:flex" />
          <p className="text-secondary">
            Manual review & confirmation of your application by our staff
          </p>
        </div>
        {/* adding the image */}
        <div className="flex items-center justify-center my-3">
          <Image src="/assets/6.png" width={100} height={100} />
          <Image src="/assets/7.png" width={100} height={100} />
          <Image src="/assets/4.png" width={100} height={100} />
        </div>
        <div className="flex items-center justify-center my-3">
          <Image src="/assets/5.png" width={100} height={100} />
          <Image src="/assets/2.png" width={100} height={100} />
          <Image src="/assets/3.png" width={100} height={100} />
          <Image src="/assets/1.png" width={100} height={100} />
        </div>
        <button className="green flex  items-center justify-center hover:scale-[1.12] transtion duration-[100ms] mt-7 md:mt-9 py-3">
          <p className="text-white text-3xl md:text-4xl font-semibold tracking-wider">
            APPLY FOR
          </p>
          <IoMdArrowDropright className="text-5xl text-white" />
        </button>
      </div>
      <p className="text-gray-500 py-5 md:py-7 text-center tracking-wide">Now from €8.32 per month</p>
    </div>
  );
};

export default HomeCard;
