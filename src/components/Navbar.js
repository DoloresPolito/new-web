import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function Navbar() {
  const router = useRouter();
  const { locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("navbar");
  const handleClick = (l) => () => {
    push("/", undefined, { locale: l });
  };
  const { pathname } = router;

  return (
    <>
      <NavbarSection>
        <NavbarContainer>
          <LogoContainer>
            <h2>INÉS MIGUENS</h2>
          </LogoContainer>

          <LinkContainer>
            <div>
              <button onClick={handleClick(locales[0])}>ES</button>
              <button onClick={handleClick(locales[1])}>EN</button>
            </div>

            <p>{translate("cero")}</p>
            <p>{translate("one")}</p>
            <p>{translate("two")}</p>
            <p>{translate("three")}</p>
            <p>{translate("four")}</p>
          </LinkContainer>
        </NavbarContainer>
      </NavbarSection>
    </>
  );
}

const NavbarSection = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
`;

const NavbarContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
`;

const LinkContainer = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  width: 20%;
  height: 50px;
  display: flex;
  align-items: center;
  h2 {
    font-family: "PlayfairRegular";
  }
`;
export default Navbar;
