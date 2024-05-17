import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const BasketMain = styled.section`
  overflow: hidden;
  max-width: 1445px;
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 150px;
  position: relative;
  z-index: 15;

  @media (${mainTheme.deviсe.laptopL}) {
    max-width: 100%;
    width: 100%;
    margin-top: 140px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 90px;
  }
`;

export const BoxBasket = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopM}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 636px) {
    margin: 20px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin: 8px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    margin: 5px;
  }
`;

export const BasketDesktop = styled.section`
  display: flex;
  width: 826px;

  @media (${mainTheme.deviсe.laptopM}) {
    width: 100%;
  }

  @media (max-width: 636px) {
    display: none;
  }
`;

export const BasketMobile = styled.section`
  display: none;

  @media (max-width: 636px) {
    display: flex;
    width: 100%;
  }
`;

export const BasketImage = styled.div`
  width: 66px;
  height: 66px;
  padding: 10px;
  position: relative;
  margin-right: 10px;

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
