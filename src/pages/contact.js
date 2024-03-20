import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Section, Container } from "../styles/styles";
import Navbar from "@/structure/Navbar";
import Footer from "@/structure/Footer";


function Contact() {
  const { t: translate } = useTranslation("contact");

  return (
    <>

        <Navbar />
        <ContactSection>
          <ContactContainer>
            <p>{translate("title")}</p>
            <p>email</p>
          </ContactContainer>
        </ContactSection>

        <Footer />

    </>
  );
}

const ContactSection = styled(Section)`
  height: 100vh;
  background-color: white;
`;

const ContactContainer = styled(Container)``;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact"])),
    },
  };
}

export default Contact;
