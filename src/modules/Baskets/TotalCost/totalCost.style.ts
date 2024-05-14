import styled from "styled-components";
import { mainTheme } from "@/styles/mainTheme.style";

export const CostWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (${mainTheme.deviсe.laptopM}) {
    flex-direction: row;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 636px) {
    width: 93%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 95%;
  }
`;

export const TotalPrice = styled.section`
  width: 100%;
  height: 290px;
  padding: 30px 30px 40px 30px;
  background-color: #161616;
  border: 1px solid ${mainTheme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (${mainTheme.deviсe.laptopL}) {
    height: auto;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 25px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    padding: 20px 20px 30px 20px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    gap: 20px;
    padding: 15px 15px 25px 15px;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PriceElem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalForm = styled.form`
  width: 100%;
  height: auto;
  padding: 30px;
  background-color: #161616;
  border: 1px solid ${mainTheme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (${mainTheme.deviсe.tablet}) {
    gap: 25px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    padding: 20px;
    gap: 20px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 20px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    gap: 20px;
    padding: 15px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 15px;
  }
`;
