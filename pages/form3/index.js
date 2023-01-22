import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgreeBar";
import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import FormHeader from "../../components/UI/FormHeader";
import Cookies from "js-cookie";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [Allowed, setAllowed] = useState(null);
  const [V1, setV1] = useState("Standard");
  const [V2, setV2] = useState("Standard");
  const [V3, setV3] = useState("Bitte treffen Sie eine Auswahl");
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
  const handleLink = () => {
    if (
      V1 !== "Bitte treffen Sie eine Auswahl" &&
      V2 !== "Bitte treffen Sie eine Auswahl" &&
      V3 !== "Bitte treffen Sie eine Auswahl" &&
      N1 !== "" &&
      N2 !== "" &&
      N3 !== "" &&
      N4 !== "" &&
      N5 !== "" &&
      C1 !== "" &&
      C2 !== "" &&
      C3 !== "" &&
      C4 !== "" &&
      C5 !== "" &&
      C6 !== ""
    ) {
      router.push("/form4");
    }
    setAllowed(true);
  };
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
      <div className="my-4 md:my-8 w-[90%] md:w-[53%] lg:w-[40%] mx-auto">
        <ProgressBar progress={50} />
        <p className=" my-3 md:my-3 text-center text-[#535353] font-normal text-xs">
          Schritt 3 von 6 - <span className="font-semibold"> Anschriften</span>{" "}
        </p>
      </div>
      {/* adding the header for the form */}
      <div className="w-[90%] md:w-[60%] lg:w-[60%] mx-auto">
        <FormHeader text="Bisherige Anschrift" />
      </div>
      {/* adding the form data */}
      <div className="w-[90%] md:w-[53%] lg:w-[40%] mx-auto my-4 md:my-4">
        <div className="form">
          <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
            <p className="text-[#535353] font-light">
              Art der bisherigen Anschrift:
            </p>
            <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
          </div>
          <select
            name="address_type"
            required="required"
            onChange={handleSelect1}
          >
            <option value="">Bitte treffen Sie eine Auswahl</option>{" "}
            <option value="standard" selected>
              {" "}
              Standard
            </option>{" "}
            <option value="pobox">Postfach</option>
          </select>
        </div>
        <div className="flex justify-between flex-col md:flex-row my-3 md:my-6">
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
              <p className="text-[#535353] font-light">Straße: </p>
              <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
            </div>
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
            <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
              <p className="text-[#535353] font-light"> Hausnummer: </p>
              <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
            </div>
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
          <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
            <p className="text-[#535353] font-light"> Adresszusatz:</p>
            <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
          </div>
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
            <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
              <p className="text-[#535353] font-light"> Postleitzahl:</p>
              <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
            </div>
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
            <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
              <p className="text-[#535353] font-light"> Stadt:</p>
              <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
            </div>
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
      <div className="w-[90%] md:w-[60%] lg:w-[60%] mx-auto">
        <FormHeader text="Neue Anschrift" />
      </div>
      {/* adding the next section */}
      <div className="w-[90%] md:w-[53%] lg:w-[40%] mx-auto my-4 md:my-4">
        <div className="form my-4 md:My-8">
          <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
            <p className="text-[#535353] font-light"> Adresstyp:</p>
            <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
          </div>
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
          <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
            <p className="text-[#535353] font-light"> Neuer Empfänger:</p>
            <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
          </div>
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
          <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
            <p className="text-[#535353] font-light">
              Wählen Sie hier das Land der neuen Anschrift aus:
              <a class="field__helper">?</a>
            </p>
            <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
          </div>
          <select
            name="new_address_country"
            required="required"
            onClick={handleSelect3}
          >
            {/* <optgroup label="">
              <option value="">Bitte treffen Sie eine Auswahl</option>
              <option value="DE">Deutschland</option>{" "}
              <option value="CH">Schweiz</option>{" "}
              <option value="AT">Österreich</option>
            </optgroup>{" "} */}
            <option value="">Bitte treffen Sie eine Auswahl</option>{" "}
            <option value="AF">Afghanistan</option>{" "}
            <option value="AL">Albanien</option>{" "}
            <option value="DZ">Algerien</option>{" "}
            <option value="AS">Amerikanisch-Samoa</option>{" "}
            <option value="VI">Amerikanische Jungferninseln</option>{" "}
            <option value="AD">Andorra</option>{" "}
            <option value="AO">Angola</option>{" "}
            <option value="AI">Anguilla</option>{" "}
            <option value="AQ">Antarktis</option>{" "}
            <option value="AG">Antigua und Barbuda</option>{" "}
            <option value="AR">Argentinien</option>{" "}
            <option value="AM">Armenien</option>{" "}
            <option value="AW">Aruba</option>{" "}
            <option value="AZ">Aserbaidschan</option>{" "}
            <option value="AU">Australien</option>{" "}
            <option value="BS">Bahamas</option>{" "}
            <option value="BH">Bahrain</option>{" "}
            <option value="BD">Bangladesch</option>{" "}
            <option value="BB">Barbados</option>{" "}
            <option value="BE">Belgien</option>{" "}
            <option value="BZ">Belize</option> <option value="BJ">Benin</option>{" "}
            <option value="BM">Bermuda</option>{" "}
            <option value="BT">Bhutan</option>{" "}
            <option value="BO">Bolivien</option>{" "}
            <option value="BQ">Bonaire</option>{" "}
            <option value="BA">Bosnien und Herzegowina</option>{" "}
            <option value="BW">Botswana</option>{" "}
            <option value="BV">Bouvetinsel</option>{" "}
            <option value="BR">Brasilien</option>{" "}
            <option value="VG">Britische Jungferninseln</option>{" "}
            <option value="IO">
              Britisches Territorium im Indischen Ozean
            </option>{" "}
            <option value="BN">Brunei Darussalam</option>{" "}
            <option value="BG">Bulgarien</option>{" "}
            <option value="BF">Burkina Faso</option>{" "}
            <option value="BI">Burundi</option>{" "}
            <option value="CL">Chile</option> <option value="CN">China</option>{" "}
            <option value="CK">Cookinseln</option>{" "}
            <option value="CR">Costa Rica</option>{" "}
            <option value="CW">Curaçao</option>{" "}
            <option value="DM">Dominica</option>{" "}
            <option value="DO">Dominikanische Republik</option>{" "}
            <option value="DJ">Dschibuti</option>{" "}
            <option value="DK">Dänemark</option>{" "}
            <option value="EC">Ecuador</option>{" "}
            <option value="SV">El Salvador</option>{" "}
            <option value="CI">Elfenbeinküste</option>{" "}
            <option value="ER">Eritrea</option>{" "}
            <option value="EE">Estland</option>{" "}
            <option value="FK">Falklandinseln</option>{" "}
            <option value="FJ">Fidschi</option>{" "}
            <option value="FI">Finnland</option>{" "}
            <option value="FR">Frankreich</option>{" "}
            <option value="GF">Französisch-Guayana</option>{" "}
            <option value="PF">Französisch-Polynesien</option>{" "}
            <option value="TF">Französische Süd- und Antarktisgebiete</option>{" "}
            <option value="FO">Färöer</option> <option value="GA">Gabun</option>{" "}
            <option value="GM">Gambia</option>{" "}
            <option value="GE">Georgien</option>{" "}
            <option value="GH">Ghana</option>{" "}
            <option value="GI">Gibraltar</option>{" "}
            <option value="GD">Grenada</option>{" "}
            <option value="GR">Griechenland</option>{" "}
            <option value="GL">Grönland</option>{" "}
            <option value="GP">Guadeloupe</option>{" "}
            <option value="GU">Guam</option>{" "}
            <option value="GT">Guatemala</option>{" "}
            <option value="GG">Guernsey</option>{" "}
            <option value="GN">Guinea</option>{" "}
            <option value="GW">Guinea-Bissau</option>{" "}
            <option value="GY">Guyana</option> <option value="HT">Haiti</option>{" "}
            <option value="HM">Heard und McDonaldinseln</option>{" "}
            <option value="HN">Honduras</option>{" "}
            <option value="HK">Hongkong</option>{" "}
            <option value="IN">Indien</option>{" "}
            <option value="ID">Indonesien</option>{" "}
            <option value="IM">Insel Man</option>{" "}
            <option value="IQ">Irak</option> <option value="IR">Iran</option>{" "}
            <option value="IE">Irland</option>{" "}
            <option value="IS">Island</option>{" "}
            <option value="IL">Israel</option>{" "}
            <option value="IT">Italien</option>{" "}
            <option value="JM">Jamaika</option>{" "}
            <option value="JP">Japan</option> <option value="YE">Jemen</option>{" "}
            <option value="JE">Jersey</option>{" "}
            <option value="JO">Jordanien</option>{" "}
            <option value="KY">Kaimaninseln</option>{" "}
            <option value="KH">Kambodscha</option>{" "}
            <option value="CM">Kamerun</option>{" "}
            <option value="CA">Kanada</option>{" "}
            <option value="CV">Kap Verde</option>{" "}
            <option value="KZ">Kasachstan</option>{" "}
            <option value="QA">Katar</option> <option value="KE">Kenia</option>{" "}
            <option value="KG">Kirgisistan</option>{" "}
            <option value="KI">Kiribati</option>{" "}
            <option value="CC">Kokosinseln</option>{" "}
            <option value="CO">Kolumbien</option>{" "}
            <option value="KM">Komoren</option>{" "}
            <option value="CD">Kongo</option> <option value="XK">Kosovo</option>{" "}
            <option value="KV">Kosovo</option>{" "}
            <option value="HR">Kroatien</option>{" "}
            <option value="CU">Kuba</option> <option value="KW">Kuwait</option>{" "}
            <option value="LA">Laos</option> <option value="LS">Lesotho</option>{" "}
            <option value="LV">Lettland</option>{" "}
            <option value="LB">Libanon</option>{" "}
            <option value="LR">Liberia</option>{" "}
            <option value="LY">Libyen</option>{" "}
            <option value="LI">Liechtenstein</option>{" "}
            <option value="LT">Litauen</option>{" "}
            <option value="LU">Luxemburg</option>{" "}
            <option value="MO">Macao</option>{" "}
            <option value="MG">Madagaskar</option>{" "}
            <option value="MW">Malawi</option>{" "}
            <option value="MY">Malaysia</option>{" "}
            <option value="MV">Malediven</option>{" "}
            <option value="ML">Mali</option> <option value="MT">Malta</option>{" "}
            <option value="MA">Marokko</option>{" "}
            <option value="MH">Marshallinseln</option>{" "}
            <option value="MQ">Martinique</option>{" "}
            <option value="MR">Mauretanien</option>{" "}
            <option value="MU">Mauritius</option>{" "}
            <option value="YT">Mayotte</option>{" "}
            <option value="MX">Mexiko</option>{" "}
            <option value="FM">Mikronesien</option>{" "}
            <option value="MD">Moldawien</option>{" "}
            <option value="MC">Monaco</option>{" "}
            <option value="MN">Mongolei</option>{" "}
            <option value="ME">Montenegro</option>{" "}
            <option value="MS">Montserrat</option>{" "}
            <option value="MZ">Mosambik</option>{" "}
            <option value="MM">Myanmar</option>{" "}
            <option value="NA">Namibia</option>{" "}
            <option value="NR">Nauru</option> <option value="NP">Nepal</option>{" "}
            <option value="NC">Neukaledonien</option>{" "}
            <option value="NZ">Neuseeland</option>{" "}
            <option value="NI">Nicaragua</option>{" "}
            <option value="NL">Niederlande</option>{" "}
            <option value="NE">Niger</option>{" "}
            <option value="NG">Nigeria</option> <option value="NU">Niue</option>{" "}
            <option value="KP">Nordkorea</option>{" "}
            <option value="MK">Nordmazedonien</option>{" "}
            <option value="NF">Norfolkinsel</option>{" "}
            <option value="NO">Norwegen</option>{" "}
            <option value="MP">Nördliche Marianen</option>{" "}
            <option value="OM">Oman</option>{" "}
            <option value="TL">Osttimor</option>{" "}
            <option value="PK">Pakistan</option>{" "}
            <option value="PW">Palau</option> <option value="PA">Panama</option>{" "}
            <option value="PG">Papua-Neuguinea</option>{" "}
            <option value="PY">Paraguay</option>{" "}
            <option value="PE">Peru</option>{" "}
            <option value="PH">Philippinen</option>{" "}
            <option value="PN">Pitcairninseln</option>{" "}
            <option value="PL">Polen</option>{" "}
            <option value="PT">Portugal</option>{" "}
            <option value="PR">Puerto Rico</option>{" "}
            <option value="CG">Republik Kongo</option>{" "}
            <option value="RW">Ruanda</option>{" "}
            <option value="RO">Rumänien</option>{" "}
            <option value="RU">Russische Föderation</option>{" "}
            <option value="RE">Réunion</option>{" "}
            <option value="BL">Saint-Barthélemy</option>{" "}
            <option value="MF">Saint-Martin</option>{" "}
            <option value="PM">Saint-Pierre und Miquelon</option>{" "}
            <option value="SB">Salomonen</option>{" "}
            <option value="ZM">Sambia</option> <option value="WS">Samoa</option>{" "}
            <option value="SM">San Marino</option>{" "}
            <option value="SA">Saudi-Arabien</option>{" "}
            <option value="SE">Schweden</option>{" "}
            <option value="SN">Senegal</option>{" "}
            <option value="RS">Serbien</option>{" "}
            <option value="SC">Seychellen</option>{" "}
            <option value="SL">Sierra Leone</option>{" "}
            <option value="ZW">Simbabwe</option>{" "}
            <option value="SG">Singapur</option>{" "}
            <option value="SX">Sint Maarten</option>{" "}
            <option value="SK">Slowakei</option>{" "}
            <option value="SI">Slowenien</option>{" "}
            <option value="SO">Somalia</option>{" "}
            <option value="ES">Spanien</option>{" "}
            <option value="LK">Sri Lanka</option>{" "}
            <option value="SH">St. Helena</option>{" "}
            <option value="KN">St. Kitts und Nevis</option>{" "}
            <option value="LC">St. Lucia</option>{" "}
            <option value="VC">St. Vincent und die Grenadinen</option>{" "}
            <option value="PS">Staat Palästina</option>{" "}
            <option value="SD">Sudan</option>{" "}
            <option value="SR">Suriname</option>{" "}
            <option value="SJ">Svalbard und Jan Mayen</option>{" "}
            <option value="SZ">Swasiland</option>{" "}
            <option value="SY">Syrien, Arabische Republik</option>{" "}
            <option value="ST">São Tomé und Príncipe</option>{" "}
            <option value="ZA">Südafrika</option>{" "}
            <option value="GS">
              Südgeorgien und die Südlichen Sandwichinseln
            </option>{" "}
            <option value="KR">Südkorea</option>{" "}
            <option value="SS">Südsudan</option>{" "}
            <option value="TJ">Tadschikistan</option>{" "}
            <option value="TW">Taiwan</option>{" "}
            <option value="TZ">Tansania, Vereinigte Republik</option>{" "}
            <option value="TH">Thailand</option>{" "}
            <option value="TG">Togo</option> <option value="TK">Tokelau</option>{" "}
            <option value="TO">Tonga</option>{" "}
            <option value="TT">Trinidad und Tobago</option>{" "}
            <option value="TD">Tschad</option>{" "}
            <option value="CZ">Tschechische Republik</option>{" "}
            <option value="TN">Tunesien</option>{" "}
            <option value="TM">Turkmenistan</option>{" "}
            <option value="TC">Turks- und Caicosinseln</option>{" "}
            <option value="TV">Tuvalu</option>{" "}
            <option value="TR">Türkei</option>{" "}
            <option value="UG">Uganda</option>{" "}
            <option value="UA">Ukraine</option>{" "}
            <option value="HU">Ungarn</option>{" "}
            <option value="UM">United States Minor Outlying Islands</option>{" "}
            <option value="UY">Uruguay</option>{" "}
            <option value="UZ">Usbekistan</option>{" "}
            <option value="VU">Vanuatu</option>{" "}
            <option value="VA">Vatikanstadt</option>{" "}
            <option value="VE">Venezuela</option>{" "}
            <option value="AE">Vereinigte Arabische Emirate</option>{" "}
            <option value="US">Vereinigte Staaten von Amerika</option>{" "}
            <option value="GB">Vereinigtes Königreich</option>{" "}
            <option value="VN">Vietnam</option>{" "}
            <option value="WF">Wallis und Futuna</option>{" "}
            <option value="CX">Weihnachtsinsel</option>{" "}
            <option value="BY">Weißrussland</option>{" "}
            <option value="EH">Westsahara</option>{" "}
            <option value="CF">Zentralafrikanische Republik</option>{" "}
            <option value="CY">Zypern</option>{" "}
            <option value="EG">Ägypten</option>{" "}
            <option value="GQ">Äquatorialguinea</option>{" "}
            <option value="ET">Äthiopien</option>{" "}
            <option value="AX">Åland</option>
          </select>
        </div>
        <div className="flex justify-between flex-col md:flex-row my-3 md:my-6">
          <section className="flex flex-col w-[100%] md:w-[45%]">
            <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
              <p className="text-[#535353] font-light">Straße: </p>
              <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
            </div>
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
            <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
              <p className="text-[#535353] font-light"> Hausnummer: </p>
              <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
            </div>
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
          <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
            <p className="text-[#535353] font-light"> Adresszusatz: </p>
            <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
          </div>
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
            <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
              <p className="text-[#535353] font-light"> Postleitzahl: </p>
              <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
            </div>
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
            <div className="flex items-between justify-between text-[#535353] font-light my-3 md:my-3">
              <p className="text-[#535353] font-light"> Ort: </p>
              <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
            </div>
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
      {Allowed && (
        <div className="bg-[#ffbdbd] px-5 md:px-12 py-2 md:py-5  w-[90%] md:w-[53%] lg:w-[40%] mx-auto rounded my-5 md:my-12">
          <p className="text-[#80504f]">
            Sie haben einen Formfehler. Bitte prüfen Sie die Felder. Haben Sie
            alle relevanten Felder ausgefüllt?
          </p>
        </div>
      )}
      {/* ADDED THE FORWARD AND BACK BUTTONS */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[53%] lg:w-[40%] mx-auto">
        <Link href="/form2" className="w-[80%] md:w-auto">
          <button className="my-2 w-[100%] border-[1px] border-gray-300 px-5 md:px-5 py-4 md:py-2 rounded flex items-center justify-center text-gray-600">
            <p>ZURUCK</p>
          </button>
        </Link>
        <div className="w-[80%] md:w-auto" onClick={handleLink}>
          <button className="my-2 w-[100%] plan px-5 md:px-5 py-2 md:py-2 rounded flex items-center justify-center text-white">
            <p>WEITER</p>
            <IoMdArrowDropright className="text-4xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
