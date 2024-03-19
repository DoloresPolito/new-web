import React from "react";
import Navbar from "../structure/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cover from "../home/Cover";
import Technology from "@/home/Technology";
import Staff from "@/home/Staff";
import Space from "@/home/Space";
import Footer from "@/structure/Footer";


function Home() {
  return (
    <>

        <Navbar />
        <Cover />
        <Technology />
        <Space />
        <Staff />
        <Footer />
 
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "about"])),
    },
  };
}

export default Home;
