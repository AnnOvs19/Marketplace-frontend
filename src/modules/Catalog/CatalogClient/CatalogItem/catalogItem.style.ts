import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${mainTheme.colors.gray};
  background-color: #0d09128d;
  backdrop-filter: blur(35px);
  width: 250px;
  position: relative;
  &:hover {
    box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 206px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 145px;
    height: 250px;
    justify-content: space-between;
  }

  @media (max-width: 490px) {
    width: 125px;
    height: 230px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 165px;
    height: 245px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 145px;
    height: 235px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 130px;
    height: 250px;
  }

  @media (max-width: 280px) {
    width: 250px;
    height: 285px;
  }

  @media (max-width: 255px) {
    width: 220px;
    height: 265px;
  }
`;

export const CardItemImage = styled.div`
  position: relative;
  width: 99%;
  margin: 1px;
  height: 185px;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 160px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    height: 110px;
  }

  @media (max-width: 490px) {
    height: 100px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 120px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    height: 110px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 115px;
  }

  @media (max-width: 280px) {
    height: 170px;
  }

  @media (max-width: 260px) {
    height: 150px;
  }
`;

export const CardItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 15px;
  width: 100%;

  @media (${mainTheme.deviсe.laptopL}) {
    padding: 12px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    padding: 10px;
  }
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  margin-top: 2px;
`;

export const LikeCardIcon = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  outline: none;
  border: none;
  width: 30px;
  height: 30px;

  @media (${mainTheme.deviсe.tablet}) {
    top: 12px;
    right: 12px;
    width: 25px;
    height: 25px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
  }

  @media (max-width: 280px) {
    top: 12px;
    right: 12px;
    width: 23px;
    height: 23px;
  }
`;

export const LikeWrap = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;
