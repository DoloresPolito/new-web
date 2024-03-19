import React from "react";
import Navbar from "../structure/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cover from "../home/Cover";
import Technology from "@/home/Technology";
import Staff from "@/home/Staff";
import Space from "@/home/Space";
import Footer from "@/structure/Footer";
import AnimatedDiv from "@/components/AnimatedDiv";

function Home() {
  return (
    <>
      <AnimatedDiv>
        <Navbar />
        <Cover />
        <Technology />
        <Space />
        <Staff />
        <Footer />
      </AnimatedDiv>
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
