import React from "react";

const style = {
  wrapper: "flex my-4 font flex-col qabox",
  heading: "text-3xl md:text-4xl font-semibold text-white collection-heading ",
  para: "text-sm md:text-md font-normal text-[#535353] collection-para font-light py-3 md:py-3 px-4 md:px-6",
};
const Answer = ({
  heading,
  para1,
  para2,
  para3,
  para4,
  para5,
  para6,
  para7,
  para8,
}) => {
  return (
    <div className={style.wrapper}>
      {para1 && <p className={style.para}>{para1}</p>}
      {para2 && <p className={style.para}>{para2}</p>}
      {para3 && <p className={style.para}>{para3}</p>}
      {para4 && <p className={style.para}>{para4}</p>}
      {para5 && <p className={style.para}>{para5}</p>}
      {para6 && <p className={style.para}>{para6}</p>}
      {para7 && <p className={style.para}>{para7}</p>}
      {para8 && <p className={style.para}>{para8}</p>}
    </div>
  );
};

export default Answer;
