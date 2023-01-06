import React from "react";
import Link from "next/link";
const SinglePlan = ({ heading, p1, p2, p11, p12 }) => {
  return (
    <div className="w-[100%] nav md:mx-5 plan-shadow my-5 md:my-1">
      <Link href="/form1">
        <h2 className="bg-[#5d5d5d] text-white text-center py-4 md:py-6 tracking-wide text-2xl md:text-2xl font-extralight">
          {heading}:
        </h2>
        <div className="flex">
          <p className="plan w-[100%] text-center py-4 md:py-5 text-[#525252]">
            <span className="font-semibold">6</span> monate
          </p>
          <p className="plan w-[100%] text-center py-4 md:py-5 text-[#525252]">
            <span className="font-semibold">12</span> monate
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center justify-center w-[100%] py-4 md:py-6">
            <p className="text-[#535353] text-center">EUR {p1}</p>
            <p className="text-[#535353] text-center text-xs md:text-md my-1">
              unter than {p11}, -€ im Monat
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] py-4 md:py-6">
            <p className="text-[#535353] text-center">EUR {p2}</p>
            <p className="text-[#535353] text-center text-xs md:text-md my-1">
              unter than {p12}, -€ im Monat
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SinglePlan;
