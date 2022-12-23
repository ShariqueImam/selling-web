import React from "react";
import Image from "next/image";
const FormHeader = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="border-b-[1px] border-gray-200 w-[100%]"></p>
      <p className="py-3 md:py-5 text-[#535353]">{text}</p>
      <p className="border-b-[1px] border-gray-200 w-[100%]"></p>
      <Image src="/form-head.png" height={25} width={25}/>
    </div>
  );
};

export default FormHeader;
