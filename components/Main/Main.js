import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "./Home/Home";
import Gray from "./Gray/Gray";
import Plans from "./Plans/Plans";
import Reviews from "./Reviews/Reviews";
import Cta from "./Cta/Cta";
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
      {/* <Reviews /> */}
      <Cta />
    </div>
  );
};

export default Main;
