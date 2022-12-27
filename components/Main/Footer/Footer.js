import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#f4f4f4] text-[#535353] py-6 md:py-7 mt-3 md:mt-6">
      <div className="flex items-center justify-between w-[90%] sm:w-[90%] md:w-[60%] mx-auto flex-col md:flex-row">
        <h2>nachsendeauftrag-einrichten.de</h2>
        <div className="flex items-center justify-center py-3 md:py-4">
          <Link href="/help">
            <p className="font-normal mx-3 md:mx-4 cursor-pointer text-xs md:text-md">Hilfe</p>
          </Link>
          <Link href="/agb">
            <p className="font-normal mx-3 md:mx-4 cursor-pointer text-xs md:text-md">AGB</p>
          </Link>
          <Link href="/privacy">
            <p className="font-normal mx-3 md:mx-4 cursor-pointer text-xs md:text-md">
              Datenschutz{" "}
            </p>
          </Link>
          <Link href="/b2b">
            <p className="font-normal mx-3 md:mx-4 cursor-pointer text-xs md:text-md">B2B</p>
          </Link>
          <Link href="/imprint">
            <p className="font-normal mx-3 md:mx-4 cursor-pointer text-xs md:text-md">Impressum</p>
          </Link>
        </div>
      </div>
      <p className=" w-[90%] md:w-[60%] mx-auto text-xs md:text-sm font-light text-center my-3 md:my-4 mb-6 md:mb-10">
        Alle Produkte & Dienstleistungen, die unter
        nachsendeauftrag-einrichten.de vertrieben werden, stehen in keinerlei
        direktem Zusammenhang mit der Deutschen Post oder anderen
        Postzustellern. Scalable Services GmbH ist ein unabhängiges
        Privatunternehmen.
      </p>
    </div>
  );
};

export default Footer;
