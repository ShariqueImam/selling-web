import React, { useState } from "react";

import FaqNav from "./FaqNav";
const style = {
  wrapper: " py-12 w-[90%] md:w-[65%] mx-auto",
  heading: "text-[#535353] set-font font-normal text-2xl md:text-2xl px-12 py-12 text-center",
};
const MobileCollection = () => {
  const [NavClick, setNavClick] = useState("");
  const handleNavClick = (value) => {
    setNavClick(value);
  };
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>Fragen und Antworten</h2>
      <FaqNav handleNavClick={handleNavClick} />
    </div>
  );
};

export default MobileCollection;
