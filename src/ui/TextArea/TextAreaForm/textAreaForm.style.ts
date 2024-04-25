import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const TextAreaFormWrap = styled.textarea`
  border: 1px solid ${mainTheme.colors.darkPurple};
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  outline: none;
  resize: none;

  &::placeholder {
    color: #d9b4f07f;
    font-size: 14px;
    font-weight: 300;
    line-height: 120%;
  }
`;
