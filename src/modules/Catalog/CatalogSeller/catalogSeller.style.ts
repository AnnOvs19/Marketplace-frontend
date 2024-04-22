import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const CatalogSelWrap = styled.section`
  overflow: hidden;
  max-width: 1405px;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 150px;
  position: relative;
  z-index: 15;

  @media (${mainTheme.deviсe.laptopL}) {
    max-width: 100%;
    width: 100%;
    margin-top: 120px;
  }

  /* @media (${mainTheme.deviсe.laptopS}) {
    margin-top: 80px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-top: 60px;
  }

  @media (max-width: 636px) {
    margin-top: 110px;
  } */

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 150px;
    max-width: 90%;
    width: 90%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    margin-top: 135px;
    max-width: 95%;
    width: 95%;
  }

  /* @media (${mainTheme.deviсe.mobileM}) {
    margin-top: 90px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    margin-top: 80px;
  } */
`;

export const BoxCatalogSel = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 45px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 25px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 35px;
  }

  @media (max-width: 636px) {
    margin: 20px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin: 0px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    gap: 20px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 15px;
  }
`;

export const HeadFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
`;

export const BoxРHeadSel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 980px;

  @media (${mainTheme.deviсe.laptopL}) {
    width: 887px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 30px;
    width: 100%;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 20px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 15px;
  }
`;

export const ProductImage = styled.div`
  width: 86px;
  height: 86px;
  padding: 10px;
  position: relative;
  margin-right: 10px;

  @media (max-width: 800px) {
    width: 75px;
    height: 75px;
  }

  @media (max-width: 636px) {
    width: 145px;
    height: 145px;
    margin-left: 18px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    margin-left: 10px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 106px;
    height: 106px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 96px;
    height: 96px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 86px;
    height: 86px;
  }
`;
