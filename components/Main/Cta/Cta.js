import React from "react";
import CtaCard from "./CtaCard";
import Image from "next/image";
const Cta = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="yellow w-[100%]   ">
        <CtaCard />
      </div>
      <Image src="/assets/postbox.png" width={300} height={150} />
    </div>
  );
};

export default Cta;
