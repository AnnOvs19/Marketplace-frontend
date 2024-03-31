import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

interface IProps {
  isOpen: boolean;
}

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  z-index: 1500;
`;

export const MenuIcon = styled.div<IProps>`
  width: 35px;
  height: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  div {
    width: 100%;
    height: 3px;
    background-color: ${mainTheme.colors.white};
    transition: all 0.3s ease;
  }

  .top {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate(8px, 5px)" : "rotate(0)"};
  }

  .middle {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }

  .bottom {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate(9px, -6px)" : "rotate(0)"};
  }
`;
