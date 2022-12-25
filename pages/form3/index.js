import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgreeBar";
import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import FormHeader from "../../components/UI/FormHeader";
import Cookies from "js-cookie";
const index = () => {
  const [V1, setV1] = useState("");
  const [V2, setV2] = useState("");
  const [V3, setV3] = useState("");
  const [N1, setN1] = useState("");
  const [N2, setN2] = useState("");
  const [N3, setN3] = useState("");
  const [N4, setN4] = useState("");
  const [N5, setN5] = useState("");
  const [C1, setC1] = useState("");
  const [C2, setC2] = useState("");
  const [C3, setC3] = useState("");
  const [C4, setC4] = useState("");
  const [C5, setC5] = useState("");
  const [C6, setC6] = useState("");

  const handleSelect1 = (e) => {
    Cookies.set("prevAddressType", e.target.value);
    setV1(e.target.value);
  };
  const handleSelect2 = (e) => {
    Cookies.set("newAddressType", e.target.value);
    setV2(e.target.value);
  };
  const handleSelect3 = (e) => {
    setV3(e.target.value);
  };
  return (
    <div className="">
      {/* ADDED THE HEADER FOR THE PROGRESS BARS  */}
      <div className="my-4 md:my-8 w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
        <ProgressBar progress={50} />
        <p className=" my-3 md:my-3 text-center text-[#535353] font-normal text-xs">
          Schritt 3 von 6 -{" "}
          <span className="font-semibold"> Anschriften</span>{" "}
        </p>
      </div>
      {/* adding the header for the form */}
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Bisherige Anschrift" />
      </div>
      {/* adding the form data */}
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4">
        <div className="form">
          <p className="text-[#535353] font-light">
            Art der bisherigen Anschrift:
          </p>
          <select
            name="address_type"
            required="required"
            onChange={handleSelect1}
          >
            <option value="">Bitte treffen Sie eine Auswahl</option>{" "}
            <option value="standard">Standard</option>{" "}
            <option value="pobox">Postfach</option>
          </select>
        </div>
        <div className="flex justify-between flex-col md:flex-row my-3 md:my-6">
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Straße:{" "}
            </label>
            <input
              type="text"
              className="in"
              value={N1}
              onChange={(e) => {
                Cookies.set("prevRoad", e.target.value);
                setN1(e.target.value);
              }}
            />
          </section>
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Hausnummer:{" "}
            </label>
            <input
              type="text"
              className="in"
              value={N2}
              onChange={(e) => {
                Cookies.set("prevHouseNumber", e.target.value);
                setN2(e.target.value);
              }}
            />
          </section>
        </div>
        <section className="flex flex-col">
          <label htmlFor="1" className="text-[#535353] font-light my-2 md:my-3">
            Adresszusatz:
          </label>
          <input
            type="text"
            className="in"
            value={N3}
            onChange={(e) => {
              Cookies.set("prevAddressSupplement", e.target.value);
              setN3(e.target.value);
            }}
          />
        </section>
        <div className="flex justify-between flex-col md:flex-row my-3 md:my-6">
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Postleitzahl:
            </label>
            <input
              type="text"
              className="in"
              value={N4}
              onChange={(e) => {
                Cookies.set("prevPostalCode", e.target.value);
                setN4(e.target.value);
              }}
            />
          </section>
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Stadt:
            </label>
            <input
              type="text"
              className="in"
              value={N5}
              onChange={(e) => {
                Cookies.set("prevCity", e.target.value);
                setN5(e.target.value);
              }}
            />
          </section>
        </div>
      </div>
      {/* adding the other header */}
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Neue Anschrift" />
      </div>
      {/* adding the next section */}
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4">
        <div className="form my-4 md:My-8">
          <p className="text-[#535353] font-light">Adresstyp:</p>
          <select
            name="address_type"
            required="required"
            onChange={handleSelect2}
          >
            <option value="">Bitte treffen Sie eine Auswahl</option>{" "}
            <option value="standard" selected>
              Standard
            </option>{" "}
            <option value="pobox">Postfach</option>
          </select>
        </div>
        <section className="flex flex-col">
          <label htmlFor="1" className="text-[#535353] font-light my-2 md:my-3">
            Neuer Empfänger:
          </label>
          <input
            type="text"
            className="in"
            value={C1}
            onChange={(e) => {
              Cookies.set("newRecipient", e.target.value);
              setC1(e.target.value);
            }}
          />
        </section>
        <div class="form my-5 md:my-6" mandatory="true">
          <label class="text-[#535353] font-light my-3 md:my-4">
            Wählen Sie hier das Land der neuen Anschrift aus:
            <a class="field__helper">?</a>
          </label>
          <select
            name="new_address_country"
            required="required"
            onChange={handleSelect3}
          >
            <option value="">Bitte treffen Sie eine Auswahl</option>{" "}
            <option value="DE">Deutschland</option>
          </select>
        </div>
        <div className="flex justify-between flex-col md:flex-row my-3 md:my-6">
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Straße:{" "}
            </label>
            <input
              type="text"
              className="in"
              value={C2}
              onChange={(e) => {
                Cookies.set("newRecipient", e.target.value);
                setC2(e.target.value);
              }}
            />
          </section>
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Hausnummer:{" "}
            </label>
            <input
              type="text"
              className="in"
              value={C3}
              onChange={(e) => {
                Cookies.set("newHouseNumber", e.target.value);
                setC3(e.target.value);
              }}
            />
          </section>
        </div>
        <section className="flex flex-col">
          <label htmlFor="1" className="text-[#535353] font-light my-2 md:my-3">
            Adresszusatz:
          </label>
          <input
            type="text"
            className="in"
            value={C4}
            onChange={(e) => {
              Cookies.set("newAddressSupplement", e.target.value);
              setC4(e.target.value);
            }}
          />
        </section>
        <div className="flex justify-between flex-col md:flex-row my-3 md:my-6">
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Postleitzahl:
            </label>
            <input
              type="text"
              className="in"
              value={C5}
              onChange={(e) => {
                Cookies.set("newPostalCode", e.target.value);
                setC5(e.target.value);
              }}
            />
          </section>
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Ort:{" "}
            </label>
            <input
              type="text"
              className="in"
              value={C6}
              onChange={(e) => {
                Cookies.set("newLocation", e.target.value);
                setC6(e.target.value);
              }}
            />
          </section>
        </div>
      </div>
      {/* adding the 2nd form data */}
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4"></div>
      {/* ADDED THE FORWARD AND BACK BUTTONS */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
        <Link href="/form2" className="w-[80%] md:w-auto">
          <button className="my-2 w-[100%] border-[1px] border-gray-300 px-5 md:px-5 py-4 md:py-2 rounded flex items-center justify-center text-gray-600">
            <p>ZURUCK</p>
          </button>
        </Link>
        <Link href="/form4" className="w-[80%] md:w-auto">
          <button className="my-2 w-[100%] plan px-5 md:px-5 py-2 md:py-2 rounded flex items-center justify-center text-white">
            <p>WEITER</p>
            <IoMdArrowDropright className="text-4xl text-white" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
