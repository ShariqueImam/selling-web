import React from "react";
import { AiFillStar } from "react-icons/ai";
const SingleReview = ({ para, name }) => {
  return (
    <div className="flex flex-col w-[100%] mx-2 ">
      <p className="font-light bg-white px-7 md:px-8 py-3 md:py-4 h-[15vh] md:h-[20vh] lg:h-[20vh] xl:h-[16vh] plan-shadow text-center">
        {para}
      </p>
      <div className="flex items-center justify-between my-4 md:my-5 mx-4 md:mx-5">
        <p className="text-xs md:text-sm">{name}</p>
        <div className="flex">
          <AiFillStar className="text-[#ffdb00] text-xl md:text-xl" />
          <AiFillStar className="text-[#ffdb00] text-xl md:text-xl" />
          <AiFillStar className="text-[#ffdb00] text-xl md:text-xl" />
          <AiFillStar className="text-[#ffdb00] text-xl md:text-xl" />
          <AiFillStar className="text-[#ffdb00] text-xl md:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
