import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgreeBar";
import { IoMdArrowDropright } from "react-icons/io";
import FormHeader from "../../components/UI/FormHeader";
import Link from "next/link";
const index = () => {
  const [V1, setV1] = useState("Privat");
  const [V2, setV2] = useState("Privat");
  const [V3, setV3] = useState("Umzug");
  const handleSelect = (e) => {
    setV3(e.target.value);
  };
  return (
    <div className="">
      {/* ADDED THE HEADER FOR THE PROGRESS BARS  */}
      <div className="my-4 md:my-8 w-[90%] md:w-[80%] lg:w-[78%] mx-auto">
        <ProgressBar progress={16} />
        <p className=" my-3 md:my-3 text-center text-[#535353] font-normal text-xs">
          Schritt 6 von 6 -
          <span className="font-semibold">Art und Zeitpunkt</span>
        </p>
      </div>
      {/* ADDING THE MAIN FORM */}
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Auftragsart" />
      </div>
      {/* adding the form data */}
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4">
        <p className="text-[#535353] font-light">
          Bitte treffen Sie eine Auswahl
        </p>
        <div className="flex my-2 md:my-3 " onChange={() => setV1("Privat")}>
          <input
            type="radio"
            value="Privat"
            id="1"
            className="custom-radio"
            checked={V1 == "Privat" ? true : false}
          />
          <label htmlFor="1" className="text-xs text-light text-[#535353]">
            Privat
          </label>
        </div>
        <div
          className="flex my-2 md:my-3"
          onChange={() => setV1("Geschäftlich")}
        >
          <input
            type="radio"
            value="Geschäftlich"
            id="2"
            checked={V1 == "Geschäftlich" ? true : false}
            className="custom-radio"
          />
          <label htmlFor="2" className="text-xs text-light text-[#535353]">
            Geschäftlich
          </label>
        </div>
        <p className="text-[#535353] font-light my-4 md:my-6">
          Grund der Beantragung:
        </p>
        <div className="form">
          <select
            name="forward_reason_business"
            required="required"
            onChange={handleSelect}
          >
            <option value="">Bitte treffen Sie eine Auswahl</option>
            <option value="move">Umzug</option>
            <option value="holiday">Vorübergehende Abwesenheit</option>
            <option value="insolvency">Insolvenz- und Betreuungsfall</option>
          </select>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto my-5 md:my-8">
        <FormHeader text="Start des Nachsendeauftrags" />
      </div>
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4">
        <p className="text-[#535353] font-light">
          Start des Nachsendeauftrags{" "}
        </p>
        <div
          className="flex my-2 md:my-3 "
          onChange={() =>
            setV2("Nachsendung beginnt zum nächstmöglichen Zeitpunkt")
          }
        >
          <input
            type="radio"
            value="Nachsendung beginnt zum nächstmöglichen Zeitpunkt"
            id="1"
            className="custom-radio"
            checked={
              V2 == "Nachsendung beginnt zum nächstmöglichen Zeitpunkt"
                ? true
                : false
            }
          />
          <label htmlFor="1" className="text-xs text-light text-[#535353]">
            Nachsendung beginnt zum nächstmöglichen Zeitpunkt
          </label>
        </div>
        <div
          className="flex my-2 md:my-3"
          onChange={() =>
            setV2("Nachsendung beginnt zu einem späterem Zeitpunkt")
          }
        >
          <input
            type="radio"
            value="Nachsendung beginnt zu einem späterem Zeitpunkt"
            id="2"
            checked={
              V2 == "Nachsendung beginnt zu einem späterem Zeitpunkt"
                ? true
                : false
            }
            className="custom-radio"
          />
          <label htmlFor="2" className="text-xs text-light text-[#535353]">
            Nachsendung beginnt zu einem späterem Zeitpunkt
          </label>
        </div>
      </div>

      {/* ADDED THE FORWARD AND BACK BUTTONS */}
      <Link href="/form2" >
        <div className="flex flex-col md:flex-row items-center justify-end w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
          <button className="my-2 w-[80%] md:w-[12%] lg:w-[13%] xl:w-[15%] plan px-5 md:px-5 py-2 md:py-2 rounded flex items-center justify-center text-white">
            <p>WEITER</p>
            <IoMdArrowDropright className="text-4xl text-white" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default index;
