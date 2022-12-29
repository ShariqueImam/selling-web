import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgreeBar";
import { useRouter } from "next/router";

import { IoMdArrowDropright } from "react-icons/io";
import FormHeader from "../../components/UI/FormHeader";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
const index = () => {
  const [Price, setPrice] = useState("6");
  const [Pay, setPay] = useState("3");
  const [P1, setP1] = useState(false);
  const [P2, setP2] = useState(false);
  const handleClick = (value) => {
    setPrice(value);
  };
  const handleClickPay = (value) => {
    setPay(value);
  };
  return (
    <div className="">
      {/* ADDED THE HEADER FOR THE PROGRESS BARS  */}
      <div className="my-4 md:my-8 w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
        <ProgressBar progress={82} />
        <p className=" my-3 md:my-3 text-center text-[#535353] font-normal text-xs">
          Schritt 5 von 6 - <span className="font-semibold"> Bezahlung</span>{" "}
        </p>
      </div>{" "}
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Wählen Sie Ihre gewünschte Laufzeit" />
      </div>
      {/* adding the price tab */}
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4 flex text-[#535353] font-normal flex-col md:flex-row">
        <div
          className={` cursor-pointer px-8 md:px-12 py-6 md:py-12 w-[100%] flex flex-col my-2 md:my-3 ${
            Price == "6" ? "bg-white shadow-price" : "bg-[#fafafa] border-[1px]"
          }`}
          onClick={() => handleClick("6")}
        >
          <div className="flex">
            <p className={`${Price == "6" ? "c1" : "c2"}`}></p>
            <p>6 Monate</p>
          </div>
          <div className="flex">
            <p className="mr-1 md:mr-2 font-semibold">4,98 € </p>
            <p>pro Monat (inkl. 19 % MwSt.)</p>
          </div>
        </div>
        <div
          className={` cursor-pointer px-8 md:px-12 py-6 md:py-12 w-[100%] flex flex-col my-2 md:my-3 ${
            Price == "12"
              ? "bg-white shadow-price"
              : "bg-[#fafafa] border-[1px]"
          }`}
          onClick={() => handleClick("12")}
        >
          <div className="flex">
            <p className={`${Price == "12" ? "c1" : "c2"}`}></p>
            <p>12 Monate</p>
          </div>
          <div className="flex">
            <p className="mr-1 md:mr-2 font-semibold">4,98 € </p>
            <p>pro Monat (inkl. 19 % MwSt.)</p>
          </div>
        </div>
      </div>{" "}
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Wählen Sie Ihre Zahlungsmethode" />
      </div>
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4 flex text-[#535353] font-normal flex-col items-center justify-center">
        {/* adding the tab */}
        <div className="flex flex-wrap md:flex-nowrap">
          <div
            onClick={() => handleClickPay("1")}
            className={`${
              Pay == "1"
                ? "border-[#ffb900] scale-[1.02] transform bg-white"
                : "border-gray-300"
            } flex items-center justify-center bg-[#fafafa] border-[1px] w-[100%] py-2 md:py-2 px-6 md:px-12`}
          >
            <p className={`${Pay == "1" ? "c1" : "c2"}`}></p>
            <Image src="/assets/6.png" width={100} height={100} />
          </div>
          <div
            onClick={() => handleClickPay("2")}
            className={`${
              Pay == "2"
                ? "border-[#ffb900] scale-[1.02] transform bg-white"
                : "border-gray-300"
            } flex items-center justify-center bg-[#fafafa] border-[1px] w-[100%] py-2 md:py-2 px-6 md:px-12`}
          >
            <p className={`${Pay == "2" ? "c1" : "c2"}`}></p>
            <Image src="/assets/5.png" width={100} height={100} />
          </div>
          <div
            onClick={() => handleClickPay("3")}
            className={`${
              Pay == "3"
                ? "border-[#ffb900] scale-[1.02] transform bg-white"
                : "border-gray-300"
            } flex items-center justify-center bg-[#fafafa] border-[1px] w-[100%] py-2 md:py-2 px-6 md:px-12`}
          >
            <p className={`${Pay == "3" ? "c1" : "c2"}`}></p>
            <Image src="/assets/download.png" width={100} height={100} />
          </div>
          <div
            onClick={() => handleClickPay("4")}
            className={`${
              Pay == "4"
                ? "border-[#ffb900] scale-[1.02] transform bg-white"
                : "border-gray-300"
            } flex items-center justify-center bg-[#fafafa] border-[1px] w-[100%] py-2 md:py-2 px-6 md:px-12`}
          >
            <p className={`${Pay == "4" ? "c1" : "c2"}`}></p>
            <Image src="/assets/2.png" width={100} height={100} />
          </div>
          <div
            onClick={() => handleClickPay("5")}
            className={`${
              Pay == "5"
                ? "border-[#ffb900] scale-[1.02] transform bg-white"
                : "border-gray-300"
            } flex items-center justify-center bg-[#fafafa] border-[1px] w-[100%] py-2 md:py-2 px-6 md:px-12`}
          >
            <p className={`${Pay == "5" ? "c1" : "c2"}`}></p>
            <Image src="/assets/1.png" width={100} height={100} />
          </div>
        </div>
        <button className="bg-[#ffb900] px-4 md:px-6 py-4 md:py-4 rounded font-semibold my-3 md:my-12">
          Make Payment
        </button>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Übersicht Ihrer Bestellung" />
      </div>
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4 flex text-[#535353] font-normal flex flex-col  ">
        <p>
          Sie beauftragen uns mit der Beantragung von Nachsendeaufträgen in
          Ihrem Namen bei der Deutsche Post AG und ggf. den weiteren genannten
          Postdienstleistern mit den folgenden Daten
        </p>
        <div className="flex md:items-center justify-between flex-col md:flex-row text-xs md:text-lg">
          {/* adding the left half */}
          <div className="flex flex-col">
            <p className="font-semibold">Bisherige Anschrift:</p>
            <div className="my-1 md:my-2">
              {Cookies.get("salutation") == "Herr" ? "Ms." : "Mr."}{" "}
              {Cookies.get("firstname")}{" "}
              <span className="mx-1 md:mx-1">{Cookies.get("surname")}</span>
            </div>
            <div className="my-2 md:my-3">
              <p className="mr-2 md:mr-2">{Cookies.get("prevRoad")}</p>
              <p className="mr-2 md:mr-2"> {Cookies.get("prevHouseNumber")}</p>
              <p className="mr-2 md:mr-2"> {Cookies.get("prevPostalCode")}</p>
              <p className="mr-2 md:mr-2"> {Cookies.get("prevCity")}</p>
            </div>
            <div className="my-2 md:my-3 flex">
              <p className="font-semibold">Neue Anschrift:</p>
              <p className="mr-2 md:mr-2">{Cookies.get("newRoad")}</p>
              <p className="mr-2 md:mr-2"> {Cookies.get("newHouseNumber")}</p>
              <p className="mr-2 md:mr-2"> {Cookies.get("newPostalCode")}</p>
              <p className="mr-2 md:mr-2"> {Cookies.get("newLocation")}</p>
            </div>
          </div>
          {/* adding the right half */}
          <div className="flex flex-col  text-xs md:text-lg">
            {" "}
            <div className="my-2 md:my-2 ">
              <p className="text-[#535353] font-semibold">E-Mail Adresse</p>{" "}
              <p>{Cookies.get("2email")}</p>
            </div>
            <div className="my-2 md:my-2 ">
              <p className="text-[#535353] font-semibold">Telefonnummer</p>{" "}
              <p>{Cookies.get("2phonenumber")}</p>
            </div>
            <div className="my-2 md:my-2 w-[30%] md:w-[100%]">
              <p className="text-[#535353] font-semibold">Päckchen, Pakete</p>{" "}
              <p>{Cookies.get("2opt1") ? "Ja" : "Nein"}</p>{" "}
            </div>
            <div className="my-2 md:my-2 w-[30%] md:w-[100%]">
              <p className="text-[#535353] font-semibold">Infopost</p>{" "}
              <p>{Cookies.get("2opt2") ? "Ja" : "Nein"}</p>
            </div>
          </div>
        </div>
        <div className="my-1 md:my-2 flex  text-xs md:text-lg">
          {Cookies.get("salutation") == "Herr" ? "Ms." : "Mr."}{" "}
          {Cookies.get("firstname")}{" "}
          <span className="mx-1 md:mx-1">{Cookies.get("surname")}</span>
          <p className="mx-2 md:mx-3">{Cookies.get("2phonenumber")}</p>
          <p className="mx-2 md:mx-3">{Cookies.get("2email")}</p>
        </div>
        <div className="flex  text-xs md:text-lg">
          <p className="font-semibold">Gesamtpreis inkl. MwSt.</p>
          <p>99,90 € (12 Monate)</p>
        </div>
        {/* adding the privacy buttons */}
        <div className="my-8 md:my-12">
          <div
            onClick={() => setP1((prev) => !prev)}
            className="flex my-5 md:my-6 items-center"
          >
            <p className={`${P1 ? "c3" : "c4"} px-4 md:px-5`}></p>
            <p className="text-xs mx-3 md:mx-3">
              Ich bin mit der Ausführung der Dienstleistung vor Ablauf der
              Widerrufsfrist von 14 Tagen ausdrücklich einverstanden. Ich
              bestätige meine Kenntnis davon, dass bei vollständiger
              Vertragserfüllung durch den Unternehmer mein Widerrufsrecht auch
              vor Ablauf der Widerrufsfrist von 14 Tagen erlischt.
            </p>
          </div>
          <div
            onClick={() => setP2((prev) => !prev)}
            className="flex my-5 md:my-6 items-center"
          >
            <p className={`${P2 ? "c3" : "c4"} px-4 md:px-5`}></p>
            <p className="text-xs mx-3 md:mx-3">
              Ich stimme den AGB, Datenschutzbestimmungen und dem Widerrufsrecht
              von nachsendeauftrag-einrichten.de zu.
            </p>
          </div>
        </div>
        <button className="my-2 w-[90%] md:w-[70%] text-xs md:text-sm mx-auto  plan px-5 md:px-5 py-2 md:py-2 rounded flex items-center justify-center text-white">
          <p>KOSTENPFLICHTIG BESTELLENKostenpflichtig bestellen</p>
          <IoMdArrowDropright className="text-4xl text-white" />
        </button>
      </div>
      {/* ADDED THE FORWARD AND BACK BUTTONS */}
      <div className="flex flex-col md:flex-row items-start justify-between w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
        {/* <button className="my-2 w-[80%] md:w-[12%] lg:w-[13%] xl:w-[15%] border-[1px] border-gray-300 px-5 md:px-5 py-4 md:py-2 rounded flex items-center justify-center text-gray-600">
          <p>ZURUCK</p>
        </button>
        <button className="my-2 w-[80%] md:w-[12%] lg:w-[13%] xl:w-[15%] plan px-5 md:px-5 py-2 md:py-2 rounded flex items-center justify-center text-white">
          <p>WEITER</p>
          <IoMdArrowDropright className="text-4xl text-white" />
        </button> */}
        <Link href="/form4">
          <button className="text-[#535353] underline">zurück</button>
        </Link>
      </div>
    </div>
  );
};

export default index;
