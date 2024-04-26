import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const InputFormWrapper = styled.div<{ error?: boolean }>`
  /* border-bottom: 1px solid ${mainTheme.colors.darkPurple}; */
  border-bottom: 1px solid
    ${(props) => (props.error ? "#db2c2c" : `${mainTheme.colors.darkPurple}`)};
  display: flex;
  align-items: center;
  width: 100%;

  input {
    padding: 4px 5px;
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
      font-weight: 100;
      line-height: 120%;
    }
  }

  @media (${mainTheme.deviсe.laptopL}) {
    input {
      padding: 3px 3px;

      &::placeholder {
        font-size: 13px;
        line-height: 110%;
      }
    }
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    input {
      padding: 2px 3px;

      &::placeholder {
        font-size: 11px;
      }
    }
  }

  @media (${mainTheme.deviсe.mobileL}) {
    input {
      &::placeholder {
        font-size: 10px;
      }
    }
  }
`;

export const BodyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 5px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 3px;
  }
`;

export const ErrorMessage = styled.span`
  color: #db2c2c;
  font-size: 12px;

  @media (${mainTheme.deviсe.mobileL}) {
    font-size: 11px;
  }
`;
