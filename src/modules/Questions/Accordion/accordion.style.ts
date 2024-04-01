import { SubTitle } from "@/styles/baseText.style";
import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

interface IProps {
  openTab: boolean;
}

export const AccordionWraper = styled.article`
  max-width: 625px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (${mainTheme.deviсe.laptopL}) {
    margin-left: 40px;
  }

  @media (max-width: 870px) {
    align-items: center;
    margin-left: 0px;
    max-width: 90%;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 12px;
  }
`;

export const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccordionTitle = styled.h4<IProps>`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  padding-bottom: 13px;
  border-bottom: 1px solid ${mainTheme.colors.gray};
  color: ${({ openTab }) => (openTab ? "#d5aaf0" : "#fff")};
  cursor: pointer;

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 18px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 16px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 14px;
  }

  @media (max-width: 870px) {
    text-align: center;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 12px;
  }
`;
