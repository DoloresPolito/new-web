import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Section, Container } from "../styles/styles";
import Navbar from "@/structure/Navbar";
import Footer from "@/structure/Footer";
import AnimatedDiv from "@/components/AnimatedDiv";

function Space() {
  const { t: translate } = useTranslation("space");

  return (
    <>
      <AnimatedDiv>
        <Navbar />
        <SpaceSection>
          <SpaceContainer>
            <p>{translate("title")}</p>
          </SpaceContainer>
        </SpaceSection>
        <Footer />
      </AnimatedDiv>
    </>
  );
}

const SpaceSection = styled(Section)`
  height: 100vh;
  background-color: white;
`;

const SpaceContainer = styled(Container)``;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["space"])),
    },
  };
}

export default Space;
