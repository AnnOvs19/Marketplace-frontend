import styled from "styled-components";
import { mainTheme } from "@/styles/mainTheme.style";

export const WaveHeaderWrap = styled.div`
  position: absolute;
  top: -200px;
  background: rgb(5, 5, 5);
  background: linear-gradient(
    360deg,
    rgba(5, 5, 5, 0) 0%,
    rgba(35, 4, 61, 0.8318042813455657) 21%,
    rgba(51, 2, 82, 1) 74%,
    rgba(74, 6, 116, 1) 100%
  );
  height: 580px;
  width: 100%;
  overflow: hidden;
  z-index: 5;

  @media (${mainTheme.deviсe.laptopL}) {
    top: -150px;
    height: 430px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    top: -50px;
    height: 330px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 250px;
  }
`;
