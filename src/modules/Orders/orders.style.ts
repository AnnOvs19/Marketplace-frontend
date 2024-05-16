import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const OrderWrap = styled.article`
  overflow: hidden;
  max-width: 1405px;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 150px;
  position: relative;
  z-index: 15;

  @media (${mainTheme.deviсe.laptopL}) {
    max-width: 100%;
    width: 100%;
    margin-top: 120px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    margin-top: 80px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-top: 60px;
  }

  @media (max-width: 636px) {
    margin-top: 110px;
  }

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

  @media (${mainTheme.deviсe.mobileM}) {
    margin-top: 90px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    margin-top: 80px;
  }
`;

export const BoxOrder = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;

  @media (${mainTheme.deviсe.laptopL}) {
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

export const HeadOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 20px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 15px;
  }
`;

export const HeadBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 35px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 25px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 15px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 10px;
  }
`;
