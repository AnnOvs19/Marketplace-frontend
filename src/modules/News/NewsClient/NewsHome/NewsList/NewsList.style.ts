import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const NewsListWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 870px) {
    align-items: center;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    display: none;
  }
`;

export const NewsElementWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  width: 400px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  }

  @media (${mainTheme.deviсe.laptopL}) {
    padding: 17px;
    width: 380px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 17px;
    width: 350px;
  }

  @media (max-width: 870px) {
    width: 80%;
    padding: 10px;
  }
`;
