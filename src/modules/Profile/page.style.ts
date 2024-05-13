import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const PageWrap = styled.section`
  margin: 0 auto;
  margin-top: 165px;
  margin-bottom: 50px;
  max-width: 1405px;
  height: auto;
  overflow: hidden;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;

  @media (${mainTheme.deviсe.laptopL}) {
    margin-top: 145px;
    width: 100%;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-top: 130px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 80px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    margin-top: 70px;
  }
`;

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1405px;
  margin-left: 40px;
  margin-right: 40px;
  height: auto;
  overflow: hidden;
  gap: 40px;

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-left: 0px;
    margin-right: 0px;
    width: 90%;
    gap: 25px;
  }
  @media (${mainTheme.deviсe.mobileM}) {
    width: 95%;
  }
`;
