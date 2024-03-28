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

export const BasketIcon = styled.div`
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
