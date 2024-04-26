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

  @media (max-width: 900px) {
    height: 700px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    height: 740px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 700px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 665px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    height: 690px;
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

  @media (max-width: 900px) {
    height: 700px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    height: 740px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 700px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 665px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    height: 690px;
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

  @media (max-width: 900px) {
    height: 700px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    height: 740px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 700px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 665px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    height: 690px;
  }
`;

export const PreviewContainer = styled.div`
  margin-top: 30px;
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
    margin-top: 0px;
    gap: 10px;
  }

  @media (max-width: 870px) {
    margin-top: 95px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 100px;
    gap: 10px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    margin-top: 105px;
    gap: 5px;
  }
`;

export const TextBox = styled.article`
  position: relative;
  z-index: 150;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 605px;

  @media (${mainTheme.deviсe.desktopM}) {
    max-width: 580px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    max-width: 540px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    max-width: 470px;
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

  @media (${mainTheme.deviсe.mobileS}) {
    flex-direction: column;
  }
`;

export const PreviewImage = styled.div`
  margin: 90px 0 70px 0;
  width: 740px;
  height: 585px;
  position: relative;

  @media (${mainTheme.deviсe.desktopM}) {
    width: 675px;
    height: 550px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 575px;
    height: 450px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 495px;
    height: 370px;
  }

  @media (max-width: 870px) {
    margin: 30px 0;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 95%;
    height: 50%;
    margin: 25px 0;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 100%;
    height: 35%;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 30%;
  }
`;

export const LoginPrewiewButton = styled.button`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${mainTheme.colors.white};
  border: 1px solid ${mainTheme.colors.white};
  padding: 10px 131px;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: -5px;

  &:hover {
    background-color: ${mainTheme.colors.white};
    color: ${mainTheme.colors.black};
  }

  @media (${mainTheme.deviсe.laptopS}) {
    padding: 10px 120px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-bottom: -10px;
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    font-size: 12px;
    padding: 10px 40px;
    width: 100%;
    margin-bottom: -5px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 11px;
  }
`;
