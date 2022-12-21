import React from "react";
import Link from "next/link";
const Gray = () => {
  return (
    <div className="w-[100%] md:w-[65%] mx-auto my-12 md:py-24 px-4 md:px-0">
      <p
        className="text-gray-600 bg-[#f0f0f0] px-4 md:px-6 py-3 md:py-9 text-center text-xs md:text-sm tracking-wide"
        style={{ lineHeight: "37px" }}
      >
        <Link href="">
          <span>nachsendeauftrag-einrichten.de</span>
        </Link>
        - der kompetenter Partner für Ihren Nachsendeauftrag. Wir sind ein
        unabhängiger Dienstleister für die Einrichtung von Nachsendeaufträgen
        bei verschiedenen Zustellern. Unsere Dienstleistungen stehen in keiner
        Beziehung zur Deutsche Post DHL Group AG, deren Tochtergesellschaften
        und anderen Lieferdiensten. Mit unserem Service decken Sie eine Vielzahl
        von Zustellern & Lieferdiensten gleichzeitig ab.
      </p>
    </div>
  );
};

export default Gray;
