import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgreeBar";
import { IoMdArrowDropright } from "react-icons/io";
import FormHeader from "../../components/UI/FormHeader";
import Link from "next/link";
import Cookies from "js-cookie";
const index = () => {
  const [V1, setV1] = useState("");
  const [N1, setN1] = useState("");
  const [N2, setN2] = useState("");
  const [N3, setN3] = useState("");
  const [N4, setN4] = useState("");
  const [N5, setN5] = useState("");
  const [C1, setC1] = useState(false);
  const [C2, setC2] = useState(false);
  const [C3, setC3] = useState(false);
  const [D1, setD1] = useState(false);
  const [D2, setD2] = useState(false);
  const [D3, setD3] = useState(false);
  const [R1, setR1] = useState("Ja");
  const [T1, setT1] = useState("");
  const [T2, setT2] = useState("");
  const [T3, setT3] = useState("");
  const [T4, setT4] = useState("");

  const handleSelect = (e) => {
    Cookies.set("salutation", e.target.value);
    setV1(e.target.value);
  };
  const handle1 = (e) => {
    Cookies.set("date", e.target.value);
    setD1(e.target.value);
  };
  const handle2 = (e) => {
    Cookies.set("month", e.target.value);
    setD2(e.target.value);
  };
  const handle3 = (e) => {
    Cookies.set("year", e.target.value);
    setD3(e.target.value);
  };
  Cookies.set("2opt1", C1);
  Cookies.set("2opt2", C2);
  Cookies.set("2opt3", C3);
  return (
    <div className="">
      {/* ADDED THE HEADER FOR THE PROGRESS BARS  */}
      <div className="my-4 md:my-8 w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
        <ProgressBar progress={32} />
        <p className=" my-3 md:my-3 text-center text-[#535353] font-normal text-xs">
          Schritt 2 von 6 -{" "}
          <span className="font-semibold">Empfänger-Angaben</span>{" "}
        </p>
      </div>
      {/* adding the form content */}
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Auftragsart" />
      </div>
      {/* adding the first select */}
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4">
        <div className="form">
          <p className="text-[#535353] font-light">Anrede:</p>
          <select
            name="forward_reason_business"
            required="required"
            onChange={handleSelect}
          >
            <option value="">Bitte treffen Sie eine Auswahl</option>
            <option value="move">Herr</option>
            <option value="holiday">Frau</option>
          </select>
        </div>
        {/* adding the name */}
        <div className="flex justify-between flex-col md:flex-row my-3 md:my-6">
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Vorname:
            </label>
            <input
              type="text"
              className="in"
              value={N1}
              onChange={(e) => {
                Cookies.set("firstname", e.target.value);
                setN1(e.target.value);
              }}
            />
          </section>
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Nachname:
            </label>
            <input
              type="text"
              className="in"
              value={N2}
              onChange={(e) => {
                Cookies.set("surname", e.target.value);
                setN2(e.target.value);
              }}
            />
          </section>
        </div>
        <div className="flex justify-between flex-col md:flex-row my-3 md:my-6">
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Straße:
            </label>
            <input
              type="text"
              className="in"
              value={T1}
              onChange={(e) => {
                Cookies.set("2road", e.target.value);
                setT1(e.target.value);
              }}
            />
          </section>
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <label
              htmlFor="1"
              className="text-[#535353] font-light my-2 md:my-3"
            >
              Neue Hausnummer:
            </label>
            <input
              type="text"
              className="in"
              value={T2}
              onChange={(e) => {
                Cookies.set("2newhousenumber", e.target.value);
                setT2(e.target.value);
              }}
            />
          </section>
        </div>
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
              value={T3}
              onChange={(e) => {
                Cookies.set("2PostalCode", e.target.value);
                setT3(e.target.value);
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
              value={T4}
              onChange={(e) => {
                Cookies.set("2Location", e.target.value);
                setT4(e.target.value);
              }}
            />
          </section>
        </div>
        <div>
          <p className="text-[#535353] font-light">Geburtsdatum:</p>
          <section className="form flex flex-col md:flex-row">
            <select
              name="dob_day"
              required="required"
              className="my-2 md:my-3 mr-3 md:mr-4"
              onChange={handle1}
            >
              <option value="">Tag</option> <option value="1">1</option>{" "}
              <option value="2">2</option> <option value="3">3</option>{" "}
              <option value="4">4</option> <option value="5">5</option>{" "}
              <option value="6">6</option> <option value="7">7</option>{" "}
              <option value="8">8</option> <option value="9">9</option>{" "}
              <option value="10">10</option> <option value="11">11</option>{" "}
              <option value="12">12</option> <option value="13">13</option>{" "}
              <option value="14">14</option> <option value="15">15</option>{" "}
              <option value="16">16</option> <option value="17">17</option>{" "}
              <option value="18">18</option> <option value="19">19</option>{" "}
              <option value="20">20</option> <option value="21">21</option>{" "}
              <option value="22">22</option> <option value="23">23</option>{" "}
              <option value="24">24</option> <option value="25">25</option>{" "}
              <option value="26">26</option> <option value="27">27</option>{" "}
              <option value="28">28</option> <option value="29">29</option>{" "}
              <option value="30">30</option> <option value="31">31</option>
            </select>
            <select
              name="dob_month"
              required="required"
              className="my-2 md:my-3 mr-3 md:mr-4"
              onChange={handle2}
            >
              <option value="">Monat</option> <option value="1">1</option>{" "}
              <option value="2">2</option> <option value="3">3</option>{" "}
              <option value="4">4</option> <option value="5">5</option>{" "}
              <option value="6">6</option> <option value="7">7</option>{" "}
              <option value="8">8</option> <option value="9">9</option>{" "}
              <option value="10">10</option> <option value="11">11</option>{" "}
              <option value="12">12</option>
            </select>
            <select
              name="dob_year"
              required="required"
              className="my-2 md:my-3 mr-3 md:mr-4"
              onChange={handle3}
            >
              <option value="">Jahr</option> <option value="2022">2022</option>{" "}
              <option value="2021">2021</option>{" "}
              <option value="2020">2020</option>{" "}
              <option value="2019">2019</option>{" "}
              <option value="2018">2018</option>{" "}
              <option value="2017">2017</option>{" "}
              <option value="2016">2016</option>{" "}
              <option value="2015">2015</option>{" "}
              <option value="2014">2014</option>{" "}
              <option value="2013">2013</option>{" "}
              <option value="2012">2012</option>{" "}
              <option value="2011">2011</option>{" "}
              <option value="2010">2010</option>{" "}
              <option value="2009">2009</option>{" "}
              <option value="2008">2008</option>{" "}
              <option value="2007">2007</option>{" "}
              <option value="2006">2006</option>{" "}
              <option value="2005">2005</option>{" "}
              <option value="2004">2004</option>{" "}
              <option value="2003">2003</option>{" "}
              <option value="2002">2002</option>{" "}
              <option value="2001">2001</option>{" "}
              <option value="2000">2000</option>{" "}
              <option value="1999">1999</option>{" "}
              <option value="1998">1998</option>{" "}
              <option value="1997">1997</option>{" "}
              <option value="1996">1996</option>{" "}
              <option value="1995">1995</option>{" "}
              <option value="1994">1994</option>{" "}
              <option value="1993">1993</option>{" "}
              <option value="1992">1992</option>{" "}
              <option value="1991">1991</option>{" "}
              <option value="1990">1990</option>{" "}
              <option value="1989">1989</option>{" "}
              <option value="1988">1988</option>{" "}
              <option value="1987">1987</option>{" "}
              <option value="1986">1986</option>{" "}
              <option value="1985">1985</option>{" "}
              <option value="1984">1984</option>{" "}
              <option value="1983">1983</option>{" "}
              <option value="1982">1982</option>{" "}
              <option value="1981">1981</option>{" "}
              <option value="1980">1980</option>{" "}
              <option value="1979">1979</option>{" "}
              <option value="1978">1978</option>{" "}
              <option value="1977">1977</option>{" "}
              <option value="1976">1976</option>{" "}
              <option value="1975">1975</option>{" "}
              <option value="1974">1974</option>{" "}
              <option value="1973">1973</option>{" "}
              <option value="1972">1972</option>{" "}
              <option value="1971">1971</option>{" "}
              <option value="1970">1970</option>{" "}
              <option value="1969">1969</option>{" "}
              <option value="1968">1968</option>{" "}
              <option value="1967">1967</option>{" "}
              <option value="1966">1966</option>{" "}
              <option value="1965">1965</option>{" "}
              <option value="1964">1964</option>{" "}
              <option value="1963">1963</option>{" "}
              <option value="1962">1962</option>{" "}
              <option value="1961">1961</option>{" "}
              <option value="1960">1960</option>{" "}
              <option value="1959">1959</option>{" "}
              <option value="1958">1958</option>{" "}
              <option value="1957">1957</option>{" "}
              <option value="1956">1956</option>{" "}
              <option value="1955">1955</option>{" "}
              <option value="1954">1954</option>{" "}
              <option value="1953">1953</option>{" "}
              <option value="1952">1952</option>{" "}
              <option value="1951">1951</option>{" "}
              <option value="1950">1950</option>{" "}
              <option value="1949">1949</option>{" "}
              <option value="1948">1948</option>{" "}
              <option value="1947">1947</option>{" "}
              <option value="1946">1946</option>{" "}
              <option value="1945">1945</option>{" "}
              <option value="1944">1944</option>{" "}
              <option value="1943">1943</option>{" "}
              <option value="1942">1942</option>{" "}
              <option value="1941">1941</option>{" "}
              <option value="1940">1940</option>{" "}
              <option value="1939">1939</option>{" "}
              <option value="1938">1938</option>{" "}
              <option value="1937">1937</option>{" "}
              <option value="1936">1936</option>{" "}
              <option value="1935">1935</option>{" "}
              <option value="1934">1934</option>{" "}
              <option value="1933">1933</option>{" "}
              <option value="1932">1932</option>{" "}
              <option value="1931">1931</option>{" "}
              <option value="1930">1930</option>{" "}
              <option value="1929">1929</option>{" "}
              <option value="1928">1928</option>{" "}
              <option value="1927">1927</option>{" "}
              <option value="1926">1926</option>{" "}
              <option value="1925">1925</option>{" "}
              <option value="1924">1924</option>{" "}
              <option value="1923">1923</option>{" "}
              <option value="1922">1922</option>
            </select>
          </section>
        </div>
        {/* adding other forms */}
        <section className="flex flex-col  my-4 md:my-6">
          <label htmlFor="1" className="text-[#535353] font-light my-2 md:my-3">
            Telefonnummer:{" "}
          </label>
          <input
            type="number"
            className="in"
            value={N3}
            onChange={(e) => {
              Cookies.set("2phonenumber", e.target.value);
              setN3(e.target.value);
            }}
          />
        </section>
        <section className="flex flex-col  my-4 md:my-6">
          <label htmlFor="1" className="text-[#535353] font-light my-2 md:my-3">
            E-Mail Adresse:{" "}
          </label>
          <input
            type="email"
            className="in"
            value={N4}
            onChange={(e) => {
              Cookies.set("2email", e.target.value);
              setN4(e.target.value);
            }}
          />
        </section>
        <section className="flex flex-col my-4 md:my-6">
          <label htmlFor="1" className="text-[#535353] font-light my-2 md:my-3">
            Bestätigung der E-Mail Adresse:{" "}
          </label>
          <input
            type="email"
            className="in"
            value={N5}
            onChange={(e) => {
              Cookies.set("2validemail", e.target.value);
              setN5(e.target.value);
            }}
          />
        </section>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Weitere Empfänger eintragen" />
      </div>
      {/* adding the 2nd part of the form */}
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4">
        <p className="text-[#535353] font-light">
          Haben Sie weitere Empfänger?
        </p>
        <div className="flex my-2 md:my-3 " onChange={() => setR1("Ja")}>
          <input
            type="radio"
            value="Ja"
            id="1"
            className="custom-radio"
            checked={R1 == "Ja" ? true : false}
          />
          <label htmlFor="1" className="text-xs text-light text-[#535353]">
            Ja
          </label>
        </div>
        <div className="flex my-2 md:my-3" onChange={() => setR1("Nein")}>
          <input
            type="radio"
            value="Nein
            "
            id="2"
            checked={R1 == "Nein" ? true : false}
            className="custom-radio"
          />
          <label htmlFor="2" className="text-xs text-light text-[#535353]">
            Nein
          </label>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
        <FormHeader text="Optionale Zusatzleistungen" />
      </div>
      {/* adding the tick buttons */}
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto my-4 md:my-4">
        <div className="my-5 md:my-8  ">
          <label className="flex">
            <input
              type="checkbox"
              name="optional_parcels"
              class="custom-checkbox"
              value={C1}
              onChange={() => {
                setC1((prev) => !prev);
              }}
            />
            <span>Päckchen, Pakete</span> <a class="field__helper">?</a>
          </label>
        </div>
        <div class="my-5 md:my-8  ">
          <label className="flex">
            <input
              type="checkbox"
              name="optional_dhl_infopost"
              class="custom-checkbox"
              value={C2}
              onChange={() => setC2((prev) => !prev)}
            />{" "}
            <span>Infopost</span> <a class="field__helper">?</a>
          </label>
        </div>
        <div class="my-5 md:my-8  ">
          <label className="flex">
            <input
              type="checkbox"
              name="optional_additional_providers"
              class="custom-checkbox"
              value={C3}
              onChange={() => setC3((prev) => !prev)}
            />{" "}
            <span>Zusätzliche Dienstleister wählen</span>{" "}
            <a class="field__helper">?</a>
          </label>
        </div>
      </div>

      {/* ADDED THE FORWARD AND BACK BUTTONS */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
        <Link href="/form1" className="w-[80%] md:w-auto">
          <button className="my-2 w-[100%]  border-[1px] border-gray-300 px-5 md:px-5 py-4 md:py-2 rounded flex items-center justify-center text-gray-600">
            <p>ZURUCK</p>
          </button>
        </Link>
        <Link href="/form3" className="w-[80%] md:w-auto">
          <button className="my-2  w-[100%] plan px-5 md:px-5 py-2 md:py-2 rounded flex items-center justify-center text-white">
            <p>WEITER</p>
            <IoMdArrowDropright className="text-4xl text-white" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
