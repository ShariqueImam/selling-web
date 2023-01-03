import React, { useState } from "react";
const style = {
  heading: "font-semibold my-2 md:my-3 text-sm",
  para: "text-light my-2 md:my-3 leading-[30px]",
};
const Index = () => {
  const [Option, setOption] = useState("");
  const handleSelect = (e) => {
    setOption(e.target.value);
  };
  return (
    <div className="text-[#535353] font-light w-[95%] md:w-[65%] mx-auto my-8 md:my-12 ">
      <p className={style.heading}>Wie können wir Ihnen weiterhelfen?</p>
      <p className={style.para}>
        Kontaktieren Sie uns zu jeder Zeit der Woche. In der Regel beantwortet
        unser Support-Team Ihre E-Mail noch am selben Tag. Wenn Sie eine Frage
        zu Ihrem gekauften Produkt haben, geben Sie bitte Ihren Namen und Ihre
        E-Mail Adresse an, damit wir Ihren Antrag schnellstmöglich in unserem
        System zuordnen können. Dies hilft uns, schnellstmöglich eine Lösung für
        Ihr Problem zu finden. Wir empfehlen auch, unsere FAQ durchzulesen. Wenn
        Sie keine Antwort finden können, zögern Sie nicht uns zu kontaktieren.
      </p>
      <p className="text-[#535353] font-light my-4 md:my-6">
        Grund der Beantragung:
      </p>
      <div className="form">
        <select
          name="forward_reason_business"
          required="required"
          onChange={handleSelect}
        >
          <option value="one">Bitte wahlen Sie lhr Thema</option>
          <option value="insolvency">Allgemeine Fragen</option>
        </select>
      </div>
      {Option=='insolvency'&&(
      <div className="border-[1px] border-gray-200 px-5 md:px-12 py-4 md:py-12 my-7 md:my-12">
        {" "}
        <p className="font-semibold my-2 md:my-3 text-2xl my-6 md:my-12">
          Ist Ihre Frage in dieser Kategorie vorhanden?
        </p>
        <p className={style.heading}>
          Bei welchen Anlässen sollte der Nachsendeservice genutzt werden?
        </p>
        <p className={style.para}>
          Bei Änderungen der Empfänger-Anschrift von Briefsendungen aus den
          nachfolgenden Gründen:
        </p>
        <p className={style.para}>Umzug</p>
        <p className={style.para}>Sterbefall</p>
        <p className={style.para}>
          sonstige Gründe (Pflegefall, Insolvenzen, etc.)
        </p>
        <p className={style.para}>
          vorübergehende Abwesenheit, d.h. vorübergehende Änderung der Anschrift
          (z.B. befristete Versetzungen, Kuraufenthalte, o.ä.)
        </p>
        <p className={style.heading}>Was bietet mir der Nachsendeservice?</p>{" "}
        <p className={style.para}>
          Die Nachsendung von Briefsendungen an die aktuelle Adresse für alle im
          Auftrag genannten Personen eines Haushalts
        </p>
        <p className={style.para}>
          Auf Wunsch werden auch Päckchen und Pakete für ein Zusatzentgelt je
          Sendung nachgesandt
        </p>
        <p className={style.para}>
          Auf Wunsch werden auch DHL INFOPOST und Blindensendungen Schwer ohne
          Zusatzkosten nachgesandt
        </p>
        <p className={style.heading}>
          Wann und wo sollte der Nachsendeservice beauftragt werden?
        </p>
        <p className={style.para}>
          Idealerweise ca. 2 bis 3 Wochen vorher. Spätestens 5 Werktage vor
          Auftragsbeginn.
        </p>
        <p className={style.heading}>Was kostet der Nachsendeservice?</p>
        <p className={style.heading}>Privat:</p>
        <p className={style.para}>6 Monate 89,90 €</p>
        <p className={style.para}>
          Empfohlen bei Einzelpersonen mit wenigen Postsendungen
        </p>
        <p className={style.para}>Preis: unter 15,00 € pro Monat</p>
        <p className={style.para}>12 Monate 99,90 €</p>
        <p className={style.para}>
          Empfohlen bei Einzelpersonen mit wenigen bis vielen Postsendungen
        </p>
        <p className={style.para}>Preis: unter 9,00 € pro Monat</p>
        <p className={style.heading}>Geschäftlich:</p>
        <p className={style.para}>6 Monate 99,90 €</p>
        <p className={style.para}>
          Empfohlen bei Unternehmen mit wenigen Postsendungen
        </p>
        <p className={style.para}>Preis: unter 17,00 € pro Monat</p>
        <p className={style.para}>12 Monate 119,90 €</p>
        <p className={style.para}>
          Empfohlen bei Unternehmen mit wenigen bis vielen Postsendungen
        </p>
        <p className={style.para}>Preis: unter 10,00 € pro Monat</p>
        <p className={style.heading}>
          Welche Briefsendungen werden nachgesandt?
        </p>
        <p className={style.para}>
          Folgende Briefsendungen werden nachgesandt:
        </p>
        <p className={style.para}>
          Postkarten und Briefe (Standard, Kompakt, Groß, Maxi)
        </p>
        <p className={style.para}>
          Briefsendungen mit Zusatzleistungen (Einschreiben,
          Nachnahme-Sendungen)
        </p>
        <p className={style.para}>Blindensendungen</p>
        <p className={style.para}>Bücher und Warensendungen</p>
        <p className={style.para}>
          Dialogpost-Sendungen (Adressierte Werbesendungen in Hüllen)
        </p>
        <p className={style.para}>
          Streifbandzeitungen (Zeitungen/Zeitschriften in adressierten,
          freigemachten Hüllen; mit Briefmarke oder Absenderfreistempelung)
        </p>
        <p className={style.para}>
          Päckchen und Pakete können auf Wunsch des Kunden auch nachgesandt
          werden. Die Nachsendung ist auf das Inland begrenzt und es wird ein
          Zusatzentgelt pro Sendung erhoben.
        </p>
        <p className={style.para}>
          Ausgenommen von der Nachsendung im Inland sind Dialogpost ohne
          Umhüllung und Express-Sendungen. Gleiches gilt für Pressesendungen
          (z.B. Kunden- oder Mitarbeiterzeitschriften) und Postvertriebsstücke
          (z.B. Tageszeitungen oder Nachrichtenmagazine), nachfolgend
          Pressepost.
        </p>
        <p className={style.para}>
          Ausgeschlossen ist ferner die Nachsendung in das Ausland von
          Dialogpost, Warensendungen, Werbeantworten, Pressepost, Briefen mit
          den Zusatzleistungen Nachnahme und Wert, Postident sowie Paketen,
          Päckchen und Express-Sendungen.
        </p>
        <p className={style.para}>
          Schriftstücke aus Postzustellungsaufträgen werden nur aufgrund
          besonderer Weisung (Vorausverfügung) des Absenders, nur im Inland und
          nur bei umzugsbedingter Abwesenheit des Empfängers bzw. bei Betreuung
          oder Insolvenz (Nachsendung wegen Sonstiges) nachgesandt.
        </p>
        <p className={style.para}>
          Bei Nachsendungen ins Ausland ist zu beachten, dass die ausländischen
          Postgesellschaften unter Umständen ein Nachentgelt einziehen.
        </p>
        <p className={style.heading}>
          Für welche Postdienstleister kann ein Nachsendeservice beauftragt
          werden?
        </p>
        <p className={style.para}>Deutsche Post AG</p>
        <p className={style.para}>Post Modern</p>
        <p className={style.para}>CITIPOST GmbH Hannover</p>
        <p className={style.para}>Allgäu Mail GmbH</p>
        <p className={style.para}>Turbo POST GmbH</p>
        <p className={style.para}>Südmail GmbH</p>
        <p className={style.para}>DAZ Brief- und Kurierdienst GmbH</p>
        <p className={style.para}>DEBEX GmbH</p>
        <p className={style.heading}>
          Wo kann ich einen bestehenden Nachsendeauftrag korrigieren oder
          stoppen lassen?
        </p>
        <p className={style.para}>
          Um einen bestehenden Nachsendeauftrag korrigieren oder stoppen zu
          lassen, wenden Sie sich bitte an unseren Kundenservice.
        </p>
        <p className={style.para}>
          Bitte beachten Sie, dass bei einer kompletten Anschriftenänderung ein
          neuer Auftrag erteilt werden muss.
        </p>
        {/* <p className={style.para}></p>
        <p className={style.para}></p>
        <p className={style.para}></p>
        <p className={style.para}></p>
        <p className={style.para}></p>
        <p className={style.heading}></p> */}
      </div>
      )}
    </div>
  );
};

export default Index;
