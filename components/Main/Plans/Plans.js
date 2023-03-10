import React from "react";
import SinglePlan from "./SinglePlan";
const Plans = () => {
  return (
    <div className="flex w-[100%] md:w-[75%] lg:w-[70%] mx-auto my-9 md:my-12 items-center justify-center flex-col px-4 md:px-0 ">
      <div className="flex w-[100%] flex-col md:flex-row items-center justify-center">
        <SinglePlan
          heading={"Privat"}
          p1={"89.90"}
          p2={"99.90"}
          p11={"15"}
          p12={"9"}
        />
        <SinglePlan
          heading={"Geschäftlich"}
          p1={"99.90"}
          p2={"119.90"}
          p11={"17"}
          p12={"10"}
        />
      </div>
      <p className="text-[#535353] text-xs my-7 md:my-8">
        *All prices include the statutory sales tax of 19%.
      </p>
    </div>
  );
};

export default Plans;
