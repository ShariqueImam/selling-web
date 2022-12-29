import React from "react";
import Link from "next/link";
const index = () => {
  return (
    <div className="text-[#535353] flex items-center justify-center flex-col py-36 md:py-24">
      <h2 className="text-[#ffb900] text-4xl md:text-5xl text-center my-4 md:my-7 font-bold">
        Payment is Successful
      </h2>
      <h2 className="text-[#535353] text-center my-4 md:my-7 font-medium">
        Our team will contact you soon
      </h2>
      <Link href="/">
        <button className="bg-[#ffb900] px-5 md:px-8 py-2 md:py-3 text-white rounded my-12 md:my-12">
          Go to Home Page
        </button>
      </Link>
    </div>
  );
};

export default index;
