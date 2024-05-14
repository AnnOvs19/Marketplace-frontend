import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

interface IProps {
  openMenu: boolean;
}

export const MenuNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MenuWrapper = styled.aside<IProps>`
  display: none;

  @media (${mainTheme.deviсe.tablet}) {
    display: flex;
  }

  @media (max-width: 622px) {
    padding: 150px 25px;
    flex-direction: column;
    align-items: flex-start;
    gap: 27px;
    height: 980px;
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
    right: ${(props) => (props.openMenu ? "0px" : "-5000px")};
    transition: 0.4s;
    top: 0;
    position: fixed;
    border: none;
    z-index: 1000;
  }
`;
