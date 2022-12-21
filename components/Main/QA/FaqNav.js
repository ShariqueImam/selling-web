import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Answer from "./Answer";
import Answer1 from "./Answer1";

const style = {
  wrapper: " border-[1px] border-gray-200 rounded",
  singleNav: "flex items-center text-[#535353] qabox py-5 md:py-7 px-4 md:px-6 cursor-pointer",
  heading: "set-font text-md  text-[#535353] cursor-pointer flex-1 font-medium" ,
};
const MobileCollctionNav = () => {
  const [Nav, setNav] = useState("");
  const handleNav = (value) => {
    if (value !== Nav) {
      setNav(value);
    } else {
      setNav("");
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.singleNav} onClick={() => handleNav("1")}>
        <h2 className={style.heading}>
          Bei welchen Anlässen sollte der Nachsendeservice genutzt werden?
        </h2>
        {Nav == "1" ? (
          <AiOutlineDown className="text-[#ffb900] text-2xl mr-4 " />
        ) : (
          <AiOutlineUp className="text-[#ffb900] text-2xl mr-4 " />
        )}
      </div>
      {Nav == "1" && (
        <Answer
          para1="Bei Änderungen der Empfänger-Anschrift von Briefsendungen aus den nachfolgenden Gründen:"
          para2="Umzug"
          para3="Sterbefall"
          para4="sonstige Gründe (Pflegefall, Insolvenzen, etc.)"
          para5="vorübergehende Abwesenheit, d.h. vorübergehende Änderung der Anschrift (z.B. befristete Versetzungen, Kuraufenthalte, o.ä.)"
          para6=""
          para7=""
          para8=""
        />
      )}

      <div className={style.singleNav} onClick={() => handleNav("2")}>
        <h2 className={style.heading}>Was bietet mir der Nachsendeservice?</h2>
        {Nav == "2" ? (
          <AiOutlineDown className="text-[#ffb900] text-2xl mr-4 " />
        ) : (
          <AiOutlineUp className="text-[#ffb900] text-2xl mr-4 " />
        )}
      </div>
      {Nav == "2" && (
        <Answer
          para1="Die Nachsendung von Briefsendungen an die aktuelle Adresse für alle im Auftrag genannten Personen eines Haushalts"
          para2="Auf Wunsch werden auch Päckchen und Pakete für ein Zusatzentgelt je Sendung nachgesandt"
          para3="Auf Wunsch werden auch DHL INFOPOST und Blindensendungen Schwer ohne Zusatzkosten nachgesandt"
          para4=""
          para5=""
          para6=""
          para7=""
          para8=""
        />
      )}

      <div className={style.singleNav} onClick={() => handleNav("3")}>
        <h2 className={style.heading}>
          Wann und wo sollte der Nachsendeservice beauftragt werden?
        </h2>
        {Nav == "3" ? (
          <AiOutlineDown className="text-[#ffb900] text-2xl mr-4 " />
        ) : (
          <AiOutlineUp className="text-[#ffb900] text-2xl mr-4 " />
        )}
      </div>
      {Nav == "3" && (
        <Answer
          para1="Idealerweise ca. 2 bis 3 Wochen vorher. Spätestens 5 Werktage vor Auftragsbeginn."
          para2=""
          para3=""
          para4=""
          para5=""
          para6=""
          para7=""
          para8=""
        />
      )}

      <div className={style.singleNav} onClick={() => handleNav("4")}>
        <h2 className={style.heading}>Was kostet der Nachsendeservice?</h2>
        {Nav == "4" ? (
          <AiOutlineDown className="text-[#ffb900] text-2xl mr-4 " />
        ) : (
          <AiOutlineUp className="text-[#ffb900] text-2xl mr-4 " />
        )}
      </div>
      {Nav == "4" && <Answer1 />}

      <div className={style.singleNav} onClick={() => handleNav("5")}>
        <h2 className={style.heading}>
          Welche Briefsendungen werden nachgesandt?
        </h2>
        {Nav == "5" ? (
          <AiOutlineDown className="text-[#ffb900] text-2xl mr-4 " />
        ) : (
          <AiOutlineUp className="text-[#ffb900] text-2xl mr-4 " />
        )}
      </div>
      {Nav == "5" && (
        <Answer
          para1="Folgende Briefsendungen werden nachgesandt:"
          para2="Postkarten und Briefe (Standard, Kompakt, Groß, Maxi)"
          para3="Briefsendungen mit Zusatzleistungen (Einschreiben, Nachnahme-Sendungen) Blindensendungen Bücher und Warensendungen"
          para4="Dialogpost-Sendungen (Adressierte Werbesendungen in Hüllen)
          Streifbandzeitungen (Zeitungen/Zeitschriften in adressierten, freigemachten Hüllen; mit Briefmarke oder Absenderfreistempelung)"
          para5="Telegramme
          Päckchen und Pakete können auf Wunsch des Kunden auch nachgesandt werden. Die Nachsendung ist auf das Inland begrenzt und es wird ein Zusatzentgelt pro Sendung erhoben."
          para6='Ausgenommen von der Nachsendung im Inland sind Dialogpost ohne Umhüllung und Express-Sendungen. Gleiches gilt für Pressesendungen (z.B. Kunden- oder Mitarbeiterzeitschriften) und Postvertriebsstücke (z.B. Tageszeitungen oder Nachrichtenmagazine), nachfolgend "Pressepost"'
          para7="Ausgeschlossen ist ferner die Nachsendung in das Ausland von Dialogpost, Warensendungen, Werbeantworten, Pressepost, Briefen mit den Zusatzleistungen Nachnahme und Wert, Postident sowie Paketen, Päckchen und Express-Sendungen."
          para8="Schriftstücke aus Postzustellungsaufträgen werden nur aufgrund besonderer Weisung (Vorausverfügung) des Absenders, nur im Inland und nur bei umzugsbedingter Abwesenheit des Empfängers bzw. bei Betreuung oder Insolvenz (Nachsendung wegen Sonstiges) nachgesandt."
        />
      )}

      <div className={style.singleNav} onClick={() => handleNav("6")}>
        <h2 className={style.heading}>
          Für welche Postdienstleister kann ein Nachsendeservice beauftragt
          werden?
        </h2>
        {Nav == "6" ? (
          <AiOutlineDown className="text-[#ffb900] text-2xl mr-4 " />
        ) : (
          <AiOutlineUp className="text-[#ffb900] text-2xl mr-4 " />
        )}
      </div>
      {Nav == "6" && (
        <Answer
          para1="Deutsche Post AG
          "
          para2="Post Modern
          "
          para3="CITIPOST GmbH Hannover
          "
          para4="Allgäu Mail GmbH
          "
          para5="Turbo POST GmbH
          "
          para6="Südmail GmbH
          "
          para7="DAZ Brief- und Kurierdienst GmbH
          "
          para8="DAZ Brief- und Kurierdienst GmbH
          "
        />
      )}
      <div className={style.singleNav} onClick={() => handleNav("7")}>
        <h2 className={style.heading}>
          Wo kann ich einen bestehenden Nachsendeauftrag korrigieren oder
          stoppen lassen?
        </h2>
        {Nav == "7" ? (
          <AiOutlineDown className="text-[#ffb900] text-2xl mr-4 " />
        ) : (
          <AiOutlineUp className="text-[#ffb900] text-2xl mr-4 " />
        )}
      </div>
      {Nav == "7" && (
        <Answer
          para1="Um einen bestehenden Nachsendeauftrag korrigieren oder stoppen zu lassen, wenden Sie sich bitte an unseren Kundenservice.
          "
          para2="Um einen bestehenden Nachsendeauftrag korrigieren oder stoppen zu lassen, wenden Sie sich bitte an unseren Kundenservice.
          "
          para3=""
          para4=""
          para5=""
          para6=""
          para7=""
          para8=""
        />
      )}
    </div>
  );
};

export default MobileCollctionNav;
