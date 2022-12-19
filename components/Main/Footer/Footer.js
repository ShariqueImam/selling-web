import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#f4f4f4] text-[#535353] py-6 md:py-7 mt-3 md:mt-6">
      <div className="flex items-center justify-between w-[90%] sm:w-[90%] md:w-[60%] mx-auto">
        <h2>nachsendeauftrag-einrichten.de</h2>
        <div className="flex items-center justify-center py-3 md:py-4">
          <Link href="/help">
            <p className="font-normal mx-3 md:mx-4 cursor-pointer">Help</p>
          </Link>
          <Link href="/terms-and-conditions">
            <p className="font-normal mx-3 md:mx-4 cursor-pointer">
              Terms and Conditions
            </p>
          </Link>
          <Link href="/privacy">
            <p className="font-normal mx-3 md:mx-4 cursor-pointer">Privacy </p>
          </Link>
          <Link href="/b2b">
            <p className="font-normal mx-3 md:mx-4 cursor-pointer">
              Policy B2B
            </p>
          </Link>
          <Link href="/imprint">
            <p className="font-normal mx-3 md:mx-4 cursor-pointer">Imprint</p>
          </Link>
        </div>
      </div>
      <p className=" w-[90%] md:w-[60%] mx-auto text-sm font-light text-center my-3 md:my-4 mb-6 md:mb-10">
        All products and services sold under nachsendeauftrag-einricht.de are in
        no way directly related to Deutsche Post or other mail carriers.
        Scalable Services GmbH is an independent private company.
      </p>
    </div>
  );
};

export default Footer;
