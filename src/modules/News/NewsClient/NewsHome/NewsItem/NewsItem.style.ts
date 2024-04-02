import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const NewsItemWrap = styled.div`
  width: 410px;
  border: 1px solid #c5c5c5bf;
  gap: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 390px;
  }

  @media (max-width: 870px) {
    width: 65%;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 90%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 95%;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 100%;
  }
`;

export const NewsItemText = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (${mainTheme.deviсe.laptopL}) {
    padding: 15px;
  }
`;

export const NewsItemImage = styled.div`
  width: 100%;
  height: 285px;
  position: relative;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 265px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    height: 235px;
  }

  @media (max-width: 870px) {
    height: 220px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 200px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    height: 180px;
  }
`;
