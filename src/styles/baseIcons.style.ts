import styled from "styled-components";
import { mainTheme } from "./mainTheme.style";

export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  align-items: center;
`;

export const LogoIcon = styled.div`
  width: 34px;
  height: 34px;
  position: relative;

  @media (${mainTheme.deviсe.laptopM}) {
    width: 32px;
    height: 32px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 30px;
    height: 30px;
  }
`;

export const BasketIcon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
  position: relative;

  @media (${mainTheme.deviсe.laptopM}) {
    width: 30px;
    height: 30px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 28px;
    height: 28px;
  }
`;

export const TableIcon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 5px;
  width: 30px;
  height: 30px;
  position: relative;

  @media (${mainTheme.deviсe.laptopL}) {
    width: 28px;
    height: 28px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 26px;
    height: 26px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 24px;
    height: 23px;
  }
`;

export const EditIcon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 30px;
  height: 30px;
  position: relative;

  @media (${mainTheme.deviсe.laptopM}) {
    width: 28px;
    height: 28px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 26px;
    height: 26px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 24px;
    height: 24px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 22px;
    height: 22px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 20px;
    height: 20px;
  }
`;

export const LikeIcon = styled.div`
  width: 15px;
  height: 15px;
  position: relative;

  @media (${mainTheme.deviсe.tablet}) {
    width: 13px;
    height: 13px;
  }
`;
