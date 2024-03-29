import styled from "styled-components";
import { mainTheme } from "./mainTheme.style";

export const HeaderButton = styled.button`
  margin-left: 25px;
  background-color: transparent;
  color: ${mainTheme.colors.white};
  border: 1px solid ${mainTheme.colors.white};
  padding: 12px 22px;
  font-size: 14px;

  &:hover {
    background-color: ${mainTheme.colors.white};
    color: ${mainTheme.colors.black};
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 10px 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-left: 0;
    font-size: 13px;
  }
`;

export const TransparentButton = styled.button`
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${mainTheme.colors.white};
  border: 1px solid ${mainTheme.colors.white};
  padding: 10px 20px;
  font-size: 14px;

  &:hover {
    background-color: ${mainTheme.colors.white};
    color: ${mainTheme.colors.black};
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 10px 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 13px;
  }
`;
