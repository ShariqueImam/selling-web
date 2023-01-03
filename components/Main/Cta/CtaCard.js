import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
const style = {
  wrapper:
    "flex flex-col mx-auto bg-white  w-[90%] md:w-[40%] pt-8 md:pt-12 my-4 yellow-content",
};
const CtaCard = () => {
  return (
    <div className={style.wrapper}>
      <div className=" flex flex-col pt-4 md:pt-8 nav">
        <div className="flex items-center justify-start py-2 md:py-0 px-6 md:px-8 ">
          <TiTick className="text-green-500 text-2xl md:text-5xl mx-2 hidden sm:flex" />
          <p className="text-secondary">
            Nachsendeauftrag einfach und bequem einrichten
          </p>
        </div>
        <div className="flex items-center justify-start py-2 md:py-0 px-6 md:px-8">
          <TiTick className="text-green-500 text-2xl md:text-5xl mx-2 hidden sm:flex" />
          <p className="text-secondary">Schnelle & zuverlässige Bearbeitung</p>
        </div>
        <div className="flex items-center justify-start py-2 md:py-0 px-6 md:px-8">
          <TiTick className="text-green-500 text-2xl md:text-5xl mx-2 hidden sm:flex" />
          <p className="text-secondary">Private Daten in guten Händen </p>
        </div>
        {/* adding the image */}
        <div className="flex items-center justify-center my-3">
          <Image src="/assets/6.png" width={100} height={100} />
          <Image src="/assets/7.png" width={100} height={100} />
          <Image src="/assets/4.png" width={100} height={100} />
        </div>
        <div className="flex items-center justify-center my-3">
          <Image src="/assets/5.png" width={80} height={80} />
          <Image src="/assets/2.png" width={80} height={80} />
          <Image src="/assets/3.png" width={80} height={80} />
          <Image src="/assets/1.png" width={80} height={80} />
        </div>
        <button className="green flex  items-center justify-center hover:scale-[1.12] transtion duration-[100ms] mt-7 md:mt-9 py-3">
          <Link href="/form1" className="flex">
            <p className="text-white text-3xl md:text-4xl font-semibold tracking-widest">
              BEANTRAGEN
            </p>
            <IoMdArrowDropright className="text-5xl text-white" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CtaCard;
