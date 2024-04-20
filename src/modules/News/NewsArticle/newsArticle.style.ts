import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const ArticleWrapper = styled.section`
  margin: 0 auto;
  margin-top: 200px;
  margin-bottom: 50px;
  max-width: 1405px;
  height: auto;
  overflow: hidden;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;

  @media (${mainTheme.deviсe.laptopL}) {
    margin-top: 150px;
    width: 100%;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-top: 130px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 150px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    margin-top: 130px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    margin-top: 100px;
  }
`;

export const ArticleBox = styled.article`
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

  @media (${mainTheme.deviсe.mobileL}) {
    width: 92%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 95%;
  }
`;

export const ArticleImage = styled.div`
  width: 1405px;
  height: 655px;
  position: relative;

  @media (${mainTheme.deviсe.desktopM}) {
    height: 550px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 100%;
    height: 450px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    height: 350px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 250px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 200px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 150px;
  }
`;
