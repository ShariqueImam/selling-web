import React from "react";
import SingleReview from "./SingleReview";
const style = {
  wrapper:
    " py-12 w-[100%] md:w-[100%] mx-auto  transform skew-y-[-3deg] bg-[#f0f0f0] ",
  heading:
    "text-[#535353] set-font font-normal text-2xl md:text-2xl px-12 py-12 text-center ",
  reviewContainer: "flex flex-col md:flwx-row",
};
const Reviews = () => {
  return (
    <div className={style.wrapper}>
      <div className="transform skew-y-[3deg] w-[100%] md:w-[88%] lg:w-[60%] mx-auto">
        <h2 className={style.heading}>Kundenbewertungen</h2>
        <div className={style.reviewContainer}>
          <SingleReview
            para="Der Nachsendeauftrag wurde relativ knapp vorher beantragt, trotzdem hat alles wunderbar funktionert"
            name="Tristan Wiemer"
          />
          <SingleReview
            para="Den Antrag konnte ich hier online wirklich bequem einrichten. Bezahlung und Antrag haben ohne Probleme geklappt."
            name="Bettina Can"
          />
          <SingleReview
            para="Schnell und einfach, da kann man   nicht viel falsch machen. Der Antrag ist idiotensicher!"
            name="Luise Christians"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
