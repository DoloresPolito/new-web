import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function About() {
    const router = useRouter();
    const { locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("navbar");

  return (
    <>
      <p>{translate("cero")}</p>
    </>
  );
}

export default About;
