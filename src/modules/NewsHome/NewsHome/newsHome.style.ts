import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const BGNewsHome = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 850px;
  overflow: hidden;
  z-index: 2;
`;

export const NewsHomeContainer = styled.div`
  max-width: 1405px;
  z-index: 150;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow: hidden;
  gap: 44px;
`;

export const NewsHomeWraper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 850px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(95 31 135 / 37%);

  @media (max-width: 870px) {
    overflow: auto;
    gap: 30px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 30px;
    margin-bottom: 30px;
    gap: 17px;
  }
`;

export const NewsHead = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 10px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    flex-direction: column;
  }
`;

export const NewsHomeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 155px;

  div {
    color: red;
    width: 500px;
    height: 500px;
  }

  /* @media (${mainTheme.deviсe.desktopM}) {
    gap: 128px;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    gap: 70px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    gap: 50px;
  }

  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 40px;
  } */
`;
