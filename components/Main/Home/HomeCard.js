import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
const style = {
  wrapper:
    "hidden sm:flex flex-col  w-[95%] md:w-[75%] mx-auto bg-white w-[90%] md:w-[45%] pt-8 md:pt-12 ",
};
const HomeCard = () => {
  return (
    <div className={style.wrapper}>
      <div className="nav flex flex-col">
        <div className="flex items-center justify-start py-2 md:py-2 px-6 md:px-8 ">
          <TiTick className="text-green-500 text-2xl md:text-5xl mx-2 hidden sm:flex" />
          <p className="text-secondary">
            Decken Sie mit{" "}
            <Link href="/">
              <span className="underline cursor-pointer">unserem Service</span>
            </Link>{" "}
            eine Vielzahl von Zustellern & Lieferdiensten gleichzeitig ab
          </p>
        </div>
        <div className="flex items-center justify-start py-2 md:py-2 px-6 md:px-8">
          <TiTick className="text-green-500 text-2xl md:text-5xl mx-2 hidden sm:flex" />
          <p className="text-secondary">
            Stellen Sie Ihren Antrag in nur wenigen Minuten mit unserem
            leichtverständlichen Onlineformular
          </p>
        </div>
        <div className="flex items-center justify-start py-2 md:py-2 px-6 md:px-8">
          <TiTick className="text-green-500 text-2xl md:text-4xl mx-2 hidden sm:flex" />
          <p className="text-secondary">
            Manuelle Prüfung & Bestätigung Ihres Antrages durch unsere
            Mitarbeiter{" "}
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
          <p className="text-white text-3xl md:text-4xl font-semibold tracking-widest">
            BEANTRAGEN
          </p>
          <IoMdArrowDropright className="text-5xl text-white" />
        </button>
      </div>
      <p className="text-gray-500 py-5 md:py-7 text-center tracking-wide">
        Jetzt schon ab 8,32 € im Monat
      </p>
    </div>
  );
};

export default HomeCard;
