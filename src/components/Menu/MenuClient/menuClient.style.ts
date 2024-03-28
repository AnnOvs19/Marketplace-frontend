import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const MenuWrapper = styled.aside`
  display: none;

  @media (max-width: 602px) {
    padding: 150px 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 27px;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      135deg,
      ${mainTheme.colors.extraDarkPurple},
      ${mainTheme.colors.darkPurple},
      ${mainTheme.colors.colorBody},
      ${mainTheme.colors.colorBody},
      ${mainTheme.colors.colorBody},
      ${mainTheme.colors.darkPurple},
      ${mainTheme.colors.extraDarkPurple}
    );
    right: 0;
    transition: 0.4s;
    top: 0;
    position: fixed;
    border: none;
    z-index: 1000;
  }
`;

export const MenuNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
