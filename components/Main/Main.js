import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "./Home/Home";
import Gray from "./Gray/Gray";
import Plans from "./Plans/Plans";
import Reviews from "./Reviews/Reviews";
import Cta from "./Cta/Cta";
import FaqCollection from './QA/FaqCollection'
const style = {
  wrapper: "a",
};
const Main = () => {
  return (
    <div className={style.wrapper}>
      {/* <Navbar /> */}
      <Home />
      <Gray />
      <Plans />
      <Reviews />
      <FaqCollection />
      <Cta />
    </div>
  );
};

export default Main;
