import React from "react";
import ProgressBar from "../../components/ProgressBar/ProgreeBar";
import { IoMdArrowDropright } from "react-icons/io";

const index = () => {
  return (
    <div className="">
      {/* ADDED THE HEADER FOR THE PROGRESS BARS  */}
      <div className="my-4 md:my-8 w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
        <ProgressBar progress={66} />
        <p className=" my-3 md:my-3 text-center text-[#535353] font-normal text-xs">
          Schritt 6 von 6 -{" "}
          <span className="font-semibold">Art und Zeitpunkt</span>{" "}
        </p>
      </div>
      {/* ADDED THE FORWARD AND BACK BUTTONS */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
        <button className="my-2 w-[80%] md:w-[12%] lg:w-[13%] xl:w-[15%] border-[1px] border-gray-300 px-5 md:px-5 py-4 md:py-2 rounded flex items-center justify-center text-gray-600">
          <p>ZURUCK</p>
        </button>
        <button className="my-2 w-[80%] md:w-[12%] lg:w-[13%] xl:w-[15%] plan px-5 md:px-5 py-2 md:py-2 rounded flex items-center justify-center text-white">
          <p>WEITER</p>
          <IoMdArrowDropright className="text-4xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default index;
