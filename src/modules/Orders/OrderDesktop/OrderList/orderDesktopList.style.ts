import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const OrderDesktop = styled.div`
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

export const OrderBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const OrderString = styled.div`
  background-color: #161616;
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 80px;
  border: 1px solid ${mainTheme.colors.gray};

  @media (${mainTheme.deviсe.laptopM}) {
    gap: 50px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    padding: 20px;
    gap: 45px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 20px;
  }

  @media (max-width: 636px) {
    display: none;
  }
`;
export const OrderElement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  &:nth-child(1) {
    width: 95px;
  }

  &:nth-child(2) {
    width: 210px;
    justify-content: center;
  }

  &:nth-child(3) {
    width: 90px;
    justify-content: center;
  }

  &:nth-child(4) {
    width: 190px;
    justify-content: center;
  }

  &:nth-child(5) {
    width: 140px;
    justify-content: center;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    &:nth-child(1) {
      width: 85px;
    }

    &:nth-child(2) {
      width: 190px;
      justify-content: center;
    }

    &:nth-child(3) {
      width: 80px;
      justify-content: center;
    }

    &:nth-child(4) {
      width: 180px;
      justify-content: center;
    }

    &:nth-child(5) {
      width: 130px;
      justify-content: center;
    }
  }

  @media (max-width: 700px) {
    &:nth-child(1) {
      width: 75px;
    }

    &:nth-child(2) {
      width: 175px;
      justify-content: center;
    }

    &:nth-child(3) {
      width: 80px;
      justify-content: center;
    }

    &:nth-child(4) {
      width: 160px;
      justify-content: center;
    }

    &:nth-child(5) {
      width: 115px;
      justify-content: center;
    }
  }

  @media (max-width: 636px) {
    &:nth-child(1) {
      width: auto;
    }

    &:nth-child(2) {
      width: auto;
      justify-content: center;
    }

    &:nth-child(3) {
      width: auto;
      justify-content: center;
    }

    &:nth-child(4) {
      width: auto;
      justify-content: center;
    }

    &:nth-child(5) {
      width: auto;
      justify-content: center;
    }
  }
`;
