import React from "react";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";
const style = {
  wrapper: " w-[100%] md:w-[100vw] font my-1 nav",
};
const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className="flex  nav">
        <div className="w-[100%] md:w-[65%] flex items-center justify-between mx-auto">
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image src="/assets/logo.png" width={50} height={50} />
            </Link>
            <p className="mx-5 hidden sm:flex">
              THE COMPETENT PARTNER FOR YOUR FORWARDING ORDER{" "}
            </p>
            <TiTick className="text-green-500 text-2xl md:text-3xl mx-1 hidden sm:flex" />
          </div>
          <div className="flex items-end justify-end flex-col">
            <p className="text-md font-semibold">01158-985-9</p>
            <p className="text-xs text-gray-500">
              10a.m - 6 p.m (0.16/min from a german)
            </p>
            <p className="text-xs text-gray-500">
              10a.m - 6 p.m (landing,max, 0.42/min mobile)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
