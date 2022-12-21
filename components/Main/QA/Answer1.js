import React from "react";

const style = {
  wrapper: "flex flex-col my-8 font ",
  heading: "text-xl md:text-xl font-semibold text-[#535353] collection-heading py-3 md:py-3 px-4 md:px-6",
  para: "text-sm md:text-md  font-normal text-[#535353] collection-para  font py-3 md:py-3 px-4 md:px-6",
  image: "",
};
const Answer = ({ heading, para }) => {
  const width = window.innerWidth;
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>Privat:</h2>
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
      <h2 className={style.heading}>Geschäftlich:</h2>
      <p className={style.para}>6 Monate 99,90 €</p>
      <p className={style.para}>
        Empfohlen bei Unternehmen mit wenigen Postsendungen
      </p>
      <p className={style.para}>Preis: unter 17,00 € pro Monat</p>
      <p className={style.para}>12 Monate 119,90 €</p>
      <p className={style.para}>
        Empfohlen bei Einzelpersonen mit wenigen bis vielen Postsendungen
      </p>
      <p className={style.para}>Preis: unter 10,00 € pro Monat</p>
    </div>
  );
};

export default Answer;
