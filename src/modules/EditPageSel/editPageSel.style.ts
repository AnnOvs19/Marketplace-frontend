import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const EditForm = styled.form`
  margin: 0 auto;
  margin-top: 280px;
  position: relative;
  padding: 30px;
  z-index: 150;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: ${mainTheme.colors.colorForm};
  box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  height: auto;
  width: 40%;

  @media (${mainTheme.deviсe.desktopM}) {
    width: 50%;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    margin-top: 210px;
    width: 55%;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 60%;
    gap: 20px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 65%;
  }

  @media (max-width: 870px) {
    width: 75%;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 75%;
  }

  @media (max-width: 650px) {
    width: 80%;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 15px;
    width: 85%;
    margin-top: 250px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 95%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 98%;
    margin-top: 210px;
  }
`;

export const EditSelBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 18px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 14px;
  }
`;

export const SelBodyInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 10px;
  }
`;

export const SelBodyAvatar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 8px;
  }
`;

export const SellerPhoto = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  @media (${mainTheme.deviсe.laptopL}) {
    width: 180px;
    height: 180px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 165px;
    height: 165px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 650px) {
    width: 80%;
    height: 350px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 90%;
    height: 250px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 95%;
    height: 200px;
  }
`;
