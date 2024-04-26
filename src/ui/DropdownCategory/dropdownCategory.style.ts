import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

interface IProps {
  open?: boolean;
  errorDrop?: boolean;
}

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: -15px;
`;

export const DropdownButton = styled.button<IProps>`
  background-color: transparent;
  /* border: 1px solid ${mainTheme.colors.darkPurple}; */
  border: 1px solid
    ${(props) =>
      props.errorDrop ? "#db2c2c" : `${mainTheme.colors.darkPurple}`};
  color: ${(props) =>
    props.errorDrop ? "#db2c2c" : `${mainTheme.colors.extraLightPurple}`};
  padding: 12px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownContent = styled.div<IProps>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  background-color: ${mainTheme.colors.colorForm};
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${mainTheme.colors.black};
  }
`;

export const DropdownText = styled.span`
  color: ${mainTheme.colors.extraLightPurple};
  font-weight: 400;
  font-size: 14px;
`;
