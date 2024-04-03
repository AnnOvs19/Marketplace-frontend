import styled from "styled-components";
import { mainTheme } from "@/styles/mainTheme.style";

export const WaveHeaderWrap = styled.div`
  position: absolute;
  top: -250px;
  background: rgb(5, 5, 5);
  background: linear-gradient(
    360deg,
    rgba(5, 5, 5, 0) 0%,
    rgba(39, 4, 61, 0.6503851540616247) 21%,
    rgba(61, 3, 97, 1) 50%,
    rgba(89, 7, 140, 1) 78%,
    rgba(139, 66, 184, 1) 100%
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
