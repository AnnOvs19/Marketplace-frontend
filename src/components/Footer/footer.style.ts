import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const FooterWrap = styled.footer`
  padding: 35px 100px 50px 100px;
  margin-top: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  z-index: 200;
  border-top: 1px solid ${mainTheme.colors.gray};
  backdrop-filter: blur(17px);

  @media (${mainTheme.deviсe.desktopS}) {
    padding: 30px 50px 40px 50px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 25px 30px 40px 30px;
    height: 60px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    padding: 25px 20px 30px 20px;
  }
`;

export const FooterBox = styled.div`
  width: 1850px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
