import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const AuthForm = styled.form`
  margin: 0 auto;
  margin-top: 280px;
  position: relative;
  z-index: 150;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${mainTheme.colors.colorForm};
  box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  height: auto;
  width: 30%;

  @media (${mainTheme.deviсe.desktopM}) {
    width: 40%;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    margin-top: 210px;
    width: 45%;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 50%;
    gap: 15px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 55%;
  }

  @media (max-width: 870px) {
    width: 65%;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 70%;
  }

  @media (max-width: 650px) {
    width: 75%;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 80%;
    margin-top: 250px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 90%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 95%;
    margin-top: 210px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 98%;
  }
`;

export const AuthHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const HeadButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${mainTheme.colors.extraLightPurple};
  border: none;
  padding: 35px 45px;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    color: ${mainTheme.colors.lightPurple};
  }

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 18px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 16px;
    padding: 28px 40px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 15px;
    padding: 23px 35px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    font-size: 14px;
    padding: 20px 30px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 14px;
    padding: 19px 25px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    font-size: 13px;
    padding: 18px 22px;
  }
`;

export const AuthBody = styled.div`
  padding: 2px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 18px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 14px;
  }
`;
