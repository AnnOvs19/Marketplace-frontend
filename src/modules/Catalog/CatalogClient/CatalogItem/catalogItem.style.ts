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
  &:hover {
    box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 195px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 145px;
    height: 230px;
  }

  @media (max-width: 490px) {
    width: 125px;
    height: 210px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 165px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 145px;
    height: auto;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 85%;
    height: 250px;
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
    height: 170px;
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
  margin-top: 2px;
`;
