import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const InputSearcWrap = styled.div`
  border: 1px solid ${mainTheme.colors.lightGray};
  display: flex;
  align-items: center;
  width: 100%;

  input {
    padding: 15px 20px;
    border: none;
    height: 100%;
    width: 100%;
    background-color: transparent;
    outline: none;
    color: #ffffffd6;
    font-weight: 300;

    &::placeholder {
      color: #d9b4f07f;
      font-size: 14px;
      font-weight: 300;
      line-height: 120%;
    }

    @media (${mainTheme.deviсe.laptopM}) {
      input {
        padding: 15px 20px;
      }
    }
  }
`;
