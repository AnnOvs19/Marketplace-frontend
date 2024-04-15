import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  transition: 0.4s;
  margin-right: 5px;
  height: 31px !important;
`;

export const CheckboxInput = styled.input`
  display: none;
`;

export const CheckboxCheckmark = styled.span`
  position: relative;
  display: inline-block;
  width: 27px;
  height: 27px;
  border: 1px solid ${mainTheme.colors.lightGray};
  transition: 0.4s;
`;

export const CheckmarkIcon = styled.span`
  position: absolute;
  top: 3px;
  left: 8px;
  width: 9px;
  height: 14px;
  border-style: solid;
  border-color: white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  transition: 0.4s;
`;
