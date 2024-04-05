import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const BasketMain = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  max-width: 1405px;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 150px;
  position: relative;
  z-index: 15;

  @media (${mainTheme.deviсe.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BasketDesktop = styled.section`
  display: flex;

  @media (max-width: 626px) {
    display: none;
  }
`;

export const BasketMobile = styled.section`
  display: none;

  @media (max-width: 626px) {
    display: flex;
  }
`;

export const BasketImage = styled.div`
  width: 86px;
  height: 86px;
  padding: 10px;
  position: relative;
`;
