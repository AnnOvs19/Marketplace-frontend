import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const TextAreaFormWrap = styled.textarea<{ error?: boolean }>`
  /* border: 1px solid ${mainTheme.colors.darkPurple}; */
  border: 1px solid
    ${(props) => (props.error ? "#db2c2c" : `${mainTheme.colors.darkPurple}`)};
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
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

  @media (${mainTheme.deviсe.laptopL}) {
    &::placeholder {
      font-size: 13px;
      line-height: 110%;
    }
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    &::placeholder {
      font-size: 11px;
    }
  }

  @media (${mainTheme.deviсe.mobileL}) {
    &::placeholder {
      font-size: 10px;
    }
  }
`;
