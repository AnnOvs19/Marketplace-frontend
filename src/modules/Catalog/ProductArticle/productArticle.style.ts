import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const ProductWrapper = styled.section`
  margin: 0 auto;
  margin-top: 170px;
  margin-bottom: 50px;
  max-width: 1405px;
  height: auto;
  overflow: hidden;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;

  @media (${mainTheme.deviсe.laptopL}) {
    margin-top: 140px;
    width: 100%;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    margin-top: 100px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-top: 90px;
  }

  @media (max-width: 650px) {
    margin-top: 75px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 60px;
  }
`;

export const ProductBox = styled.article`
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
    width: 100%;
    gap: 25px;
  }
`;
