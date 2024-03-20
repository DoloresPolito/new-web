import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Section, Container } from "../styles/styles";
import Navbar from "@/structure/Navbar";
import Footer from "@/structure/Footer";


function About() {
  const { t: translate } = useTranslation("about");

  return (
    <>

        <Navbar />
        <AboutSection>
          <AboutContainer>
            <p>{translate("text")}</p>
          </AboutContainer>
        </AboutSection>

        <Footer />
 
    </>
  );
}
const AboutSection = styled(Section)`
  height: 100vh;
  background-color: white;
`;

const AboutContainer = styled(Container)``;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}

export default About;
