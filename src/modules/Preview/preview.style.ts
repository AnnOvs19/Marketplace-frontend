import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const PreviewWraper = styled.section`
  margin-top: 0;
  display: flex;
  width: 100%;
  height: 750px;
  justify-content: center;
  overflow: hidden;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 620px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 645px;
  }
`;

export const PreviewBacground = styled.div`
  width: 100%;
  height: 750px;
  position: relative;
  overflow: hidden;
  z-index: 2;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 620px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 645px;
  }
`;

export const PreviewBoxBG = styled.div`
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba(95 31 135 / 37%);
  backdrop-filter: blur(35px);
  width: 100%;
  height: 750px;
  position: absolute;
  z-index: 3;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 620px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 645px;
  }
`;

export const PreviewContainer = styled.div`
  position: relative;
  z-index: 150;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 70px;

  @media (${mainTheme.deviсe.desktopS}) {
    gap: 20px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    gap: 0px;
  }

  @media (max-width: 870px) {
    margin-top: 135px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 130px;
    gap: 10px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    margin-top: 115px;
    gap: 5px;
  }
`;

export const TextBox = styled.article`
  position: relative;
  z-index: 150;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 580px;

  @media (${mainTheme.deviсe.laptopL}) {
    max-width: 540px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    max-width: 500px;
    margin-left: 40px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    max-width: 420px;
  }

  @media (max-width: 870px) {
    align-items: center;
    margin-left: 0px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    max-width: 95%;
  }
`;

export const TextBottom = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 10px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    flex-direction: column;
  }
`;

export const PreviewImage = styled.div`
  margin: 90px 0 70px 0;
  width: 675px;
  height: 550px;
  position: relative;

  @media (${mainTheme.deviсe.laptopL}) {
    width: 575px;
    height: 450px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 545px;
    height: 420px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 495px;
    height: 370px;
  }

  @media (max-width: 870px) {
    margin: 20px 0;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 100%;
    height: 60%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 100%;
    height: 40%;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 100%;
    height: 30%;
  }
`;
