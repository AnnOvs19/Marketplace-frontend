import { TransparentButton } from "@/styles/baseButtons.style";
import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const NewsHomeWraper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 645px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(95 31 135 / 37%);
  background: rgb(39, 4, 61);
  background: radial-gradient(
    circle,
    rgba(39, 4, 61, 1) 0%,
    rgba(5, 5, 5, 1) 100%
  );

  @media (${mainTheme.deviсe.laptopL}) {
    height: 625px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    height: 605px;
  }

  @media (max-width: 870px) {
    overflow: auto;
    gap: 30px;
    height: 870px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 30px;
    margin-bottom: 30px;
    gap: 17px;
    height: 525px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    height: 505px;
  }
`;

export const NewsHomeContainer = styled.div`
  max-width: 1405px;
  z-index: 150;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;

  overflow: hidden;
  gap: 44px;

  @media (${mainTheme.deviсe.laptopL}) {
    margin: 50px 40px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin: 30px 20px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    margin: 30px 5px;
  }
`;

export const NewsHomeBox = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 70px;

  @media (${mainTheme.deviсe.desktopM}) {
    gap: 60px;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    gap: 50px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 25px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    gap: 20px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 45px;
  }

  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 20px;
  }
`;

export const NewsHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  @media (max-width: 870px) {
    justify-content: center;
  }
`;

export const NewsImageBox = styled.div`
  width: 435px;
  height: 460px;
  position: relative;

  @media (${mainTheme.deviсe.desktopM}) {
    width: 395px;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    width: 385px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    height: 430px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    height: 388px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    display: none;
  }
`;

export const NewsView = styled(TransparentButton)`
  display: none;
  width: 90%;

  @media (${mainTheme.deviсe.mobileXL}) {
    display: flex;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 95%;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 100%;
  }
`;
