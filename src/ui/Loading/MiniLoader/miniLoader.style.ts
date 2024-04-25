import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const MiniLoaderWrap = styled.span`
  margin-left: 15px;
  width: 15px;
  height: 15px;
  border: 3px solid #d7d7d7;
  border-bottom-color: #ffffff;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-left: 12px;
    width: 12px;
    height: 12px;
    border: 2px solid #d7d7d7;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    margin-left: 12px;
    width: 10px;
    height: 10px;
    border: 1px solid #d7d7d7;
  }
`;
