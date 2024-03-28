import styled from "styled-components";
import { mainTheme } from "./mainTheme.style";

export const NavButton = styled.button`
  margin-left: 25px;
  background-color: transparent;
  color: ${mainTheme.colors.white};
  border: 1px solid ${mainTheme.colors.white};
  padding: 12px 22px;

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 10px 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-left: 0;
  }
`;
