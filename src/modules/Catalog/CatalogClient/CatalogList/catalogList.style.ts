import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const CardList = styled.section`
  overflow: hidden;
  max-width: 1405px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 150px;
  position: relative;
  z-index: 15;

  @media (${mainTheme.deviсe.mobileXL}) {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (${mainTheme.deviсe.laptopL}) {
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 15px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 95%;
    margin-left: 0;
    margin-right: 0;
  }
`;
