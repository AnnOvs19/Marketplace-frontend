import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const InputSearcWrap = styled.div`
  border-bottom: 1px solid ${mainTheme.colors.lightGray};
  display: flex;
  align-items: center;
  width: 100%;

  input {
    padding: 7px 10px;
    border: none;
    height: 100%;
    width: 100%;
    background-color: transparent;
    outline: none;
    color: #ffffffd6;
    font-weight: 300;

    &::placeholder {
      color: ${mainTheme.colors.white};
      font-size: 14px;
      font-weight: 300;
      line-height: 120%;
    }

    @media (${mainTheme.deviсe.laptopM}) {
      input {
        padding: 5px 18px;
      }

      @media (${mainTheme.deviсe.mobileL}) {
        input {
          padding: 4px 18px;
        }

        &::placeholder {
          font-size: 12px;
        }
      }
    }
  }
`;
