import Head from "next/head";
import Main from "../components/Main/Main";
import React, { useState, useEffect } from "react";
const style = {
  wrapper: "font",
};
export default function index() {
  
  return (
    <div className={style.wrapper}>
      <Head>
        <title>NEXTJS WEBSITE</title>
        <meta name="description" content="NetDelivery | Food Delviery, Order and Enjoy" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main />
    </div>
  );
}
