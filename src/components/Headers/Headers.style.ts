import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const HeaderDesktopWrapper = styled.header`
  display: flex;

  @media (max-width: 622px) {
    display: none;
  }
`;

export const HeaderMobileWrapper = styled.header`
  display: none;

  @media (max-width: 622px) {
    display: flex;
  }
`;

export const Header = styled.div`
  padding: 12px 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
  border-bottom: 1px solid ${mainTheme.colors.gray};

  @media (${mainTheme.deviсe.desktopS}) {
    padding: 10px 50px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 10px 30px;
    height: 60px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    padding: 10px 20px;
  }
`;

export const HeaderBox = styled.div`
  width: 1850px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
