import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Section, Container } from "../styles/styles";
import Navbar from "@/structure/Navbar";
import Footer from "@/structure/Footer";
// import AnimatedDiv from "@/components/AnimatedDiv";
// import CarouselFramer from "@/components/CarouselFramer";
function Procedures() {
  const { t: translate } = useTranslation("procedures");

  return (
    <>

        <Navbar />
        {/* <AnimatedDiv> */}
        {/* <ProceduresSection>
          <ProceduresContainer> */}
            <p>{translate("title")}</p>
            {/* <CarouselFramer/> */}
          {/* </ProceduresContainer>
        </ProceduresSection> */}
        {/* </AnimatedDiv> */}
        <Footer />

    </>
  );
}

const ProceduresSection = styled(Section)`
  height: 100vh;
  background-color: white;
`;

const ProceduresContainer = styled(Container)``;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["procedures"])),
    },
  };
}

export default Procedures;
