import styled from "styled-components";
import { mainTheme } from "@/styles/mainTheme.style";

export const WaveHeaderWrap = styled.div`
  position: absolute;
  top: -300px;
  background: rgb(5, 5, 5);
  background: linear-gradient(
    360deg,
    rgba(5, 5, 5, 1) 0%,
    rgba(39, 4, 61, 1) 21%,
    rgba(61, 3, 97, 1) 50%,
    rgba(89, 7, 140, 1) 78%,
    rgba(139, 66, 184, 1) 100%
  );
  height: 900px;
  width: 100%;
  overflow: hidden;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 750px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    top: -100px;
    height: 650px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 550px;
  }
`;
