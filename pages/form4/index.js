import React from "react";
import ProgressBar from "../../components/ProgressBar/ProgreeBar";
import { IoMdArrowDropright } from "react-icons/io";
import FormHeader from "../../components/UI/FormHeader";
import Cookies from "js-cookie";
import Link from "next/link";
const index = () => {
  return (
    <div className="">
      {/* ADDED THE HEADER FOR THE PROGRESS BARS  */}
      <div className="my-4 md:my-8 w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
        <ProgressBar progress={66} />
        <p className=" my-3 md:my-3 text-center text-[#535353] font-normal text-xs">
          Schritt 4 von 6 -{" "}
          <span className="font-semibold">Übersicht der angegebenen Daten</span>{" "}
        </p>
      </div>
      {/* adding the header */}
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Übersicht Ihrer Bestellung" />
      </div>
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4 flex flex-col md:flex-row items-center justify-center">
        <div className="bg-[#fafafa] mx-4 md:mx-5 px-12 md:px-16 py-12 md:py-16 w-[100%] text-[#535353] my-3 md:my-4">
          <h2 className="my-2 md:my-3">Bisherige Anschrift:</h2>
          <div className="my-2 md:my-3">
            {Cookies.get("prevRoad")}
            {Cookies.get("prevHouseNumber")}
          </div>
          <p className="my-2 md:my-3">{Cookies.get("prevAddressSupplement")}</p>
          <div className="my-2 md:my-3">
            {Cookies.get("prevPostalCode")}
            {Cookies.get("prevCity")}
          </div>
        </div>
        <div className="bg-[#fafafa] mx-4 md:mx-5 px-12 md:px-16 py-12 md:py-16 w-[100%] text-[#535353] my-3 md:my-4">
          <h2 className="my-2 md:my-3 font-semibold">Neue Anschrift:</h2>
          <div className="my-2 md:my-3">
            {Cookies.get("newRoad")}
            {Cookies.get("newHouseNumber")}
          </div>
          <p className="my-2 md:my-3">{Cookies.get("newAddressSupplement")}</p>
          <div className="my-2 md:my-3">
            {Cookies.get("newPostalCode")}
            {Cookies.get("newLocation")}
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Empfänger" />
      </div>
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4 flex flex-col text-[#535353]">
        <h2 className="text-[#535353] font-semibold">
          Bevollmächtigte(r){" "}
          <Link href="/form2">
            <span>(Ändern)</span>
          </Link>
        </h2>
        <div className="my-1 md:my-2">
          {Cookies.get("salutation") == "Herr" ? "Ms." : "Mr."}{" "}
          {Cookies.get("firstname")}{" "}
          <span className="mx-1 md:mx-1">{Cookies.get("surname")}</span>
        </div>
        <div className="my-1 md:my-2">{Cookies.get("2phonenumber")}</div>
        <div className="my-1 md:my-2">{Cookies.get("2email")}</div>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Übersicht der Daten" />
      </div>
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4 flex flex-col text-[#535353]">
        <div className="my-4 md:my-5 ">
          <p className="text-[#535353] font-semibold">Antragsart</p>{" "}
          <p>{Cookies.get("choice")}</p>
        </div>
        <div className="my-4 md:my-5 ">
          <p className="text-[#535353] font-semibold">
            Start des Nachsendeauftrags
          </p>{" "}
          <p>{Cookies.get("forwarding")}</p>
        </div>
        <div className="my-4 md:my-5 ">
          <p className="text-[#535353] font-semibold">Grund der Beantragung</p>{" "}
          <p>{Cookies.get("reason")}</p>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Zusätzliche Angaben" />
      </div>{" "}
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4 flex flex-col text-[#535353]">
        <div className="flex md:justify-between md:items-center flex-col md:flex-row w-[100%] md:w-[65%]">
          <div className="my-4 md:my-5 ">
            <p className="text-[#535353] font-semibold">E-Mail Adresse</p>{" "}
            <p>{Cookies.get("2email")}</p>
          </div>
          <div className="my-4 md:my-5 w-[30%] md:w-[100%]">
            <p className="text-[#535353] font-semibold">Päckchen, Pakete</p>{" "}
            <p>{Cookies.get("2opt1") ? "Ja" : "Nein"}</p>{" "}
          </div>
        </div>
        <div className="flex md:justify-between md:items-center flex-col md:flex-row w-[100%] md:w-[65%]">
          <div className="my-4 md:my-5 ">
            <p className="text-[#535353] font-semibold">Telefonnummer</p>{" "}
            <p>{Cookies.get("2phonenumber")}</p>
          </div>
          <div className="my-4 md:my-5 w-[30%] md:w-[100%]">
            <p className="text-[#535353] font-semibold">Infopost</p>{" "}
            <p>{Cookies.get("2opt2") ? "Ja" : "Nein"}</p>
          </div>
        </div>
      </div>
      {/* ADDED THE FORWARD AND BACK BUTTONS */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
        <Link href="/form3" className="w-[80%] md:w-auto">
          <button className="my-2 w-[100%] border-[1px] border-gray-300 px-5 md:px-5 py-4 md:py-2 rounded flex items-center justify-center text-gray-600">
            <p>ZURUCK</p>
          </button>
        </Link>
        <Link href="/form5" className="w-[80%] md:w-auto">
          <button className="my-2 w-[100%]  plan px-5 md:px-5 py-2 md:py-2 rounded flex items-center justify-center text-white">
            <p>WEITER</p>
            <IoMdArrowDropright className="text-4xl text-white" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
