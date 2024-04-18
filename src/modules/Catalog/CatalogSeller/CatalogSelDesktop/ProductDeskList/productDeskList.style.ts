import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const ProductDesktop = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (${mainTheme.deviсe.laptopL}) {
    width: 887px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 100%;
  }
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #161616;
  border: 1px solid ${mainTheme.colors.gray};
`;

export const ProductString = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 75px;
  border: 1px solid ${mainTheme.colors.gray};

  @media (${mainTheme.deviсe.laptopM}) {
    gap: 45px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    padding: 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 20px;
  }

  @media (max-width: 636px) {
    display: none;
  }
`;

export const ProductElement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  &:nth-child(1) {
    width: 295px;
  }

  &:nth-child(2) {
    width: 100px;
    justify-content: center;
  }

  &:nth-child(3) {
    width: 160px;
    justify-content: center;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    &:nth-child(1) {
      width: 305px;
    }

    &:nth-child(2) {
      width: 105px;
    }

    &:nth-child(3) {
      width: 170px;
    }

    &:nth-child(4) {
      width: 80px;
      justify-content: center;
    }

    &:nth-child(5) {
      width: 80px;
      justify-content: center;
    }
  }
`;

export const ElementBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 3px;
`;
