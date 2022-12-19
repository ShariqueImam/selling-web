import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Main/Footer/Footer";
function MyApp({ Component, pageProps }) {
  // const FeaturedBackground1 = styled.div`
  //   background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
  //     url("/k.png");
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position: center;
  //   background-attachment: auto;
  //   height: 25vh;
  //   width: 100vw;
  //   margin: 10px 0px;
  // `;

  return (
    <div className="overflow-x-hidden font h-[100vh] flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
