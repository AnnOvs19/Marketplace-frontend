import styled from "styled-components";
import { mainTheme } from "@/styles/mainTheme.style";

export const BgCircleWrap = styled.div`
  background: ${mainTheme.colors.colorBody};
  position: absolute;
  width: 100vw;
  height: 460px;
  top: 0;
  left: 0;
  background: #050505;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(95 31 135 / 37%);

  span {
    width: 35vmin;
    height: 35vmin;
    border-radius: 35vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 24;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    @keyframes move {
      100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
      }
    }

    &:nth-child(0) {
      color: #0e0014e1;
      top: 87%;
      left: 84%;
      animation-duration: 53s;
      animation-delay: -171s;
      transform-origin: 8vw -19vh;
      box-shadow: 70vmin 0 9.436247118703587vmin currentColor;
    }
    &:nth-child(1) {
      color: #1a0329;
      top: 86%;
      left: 14%;
      animation-duration: 72s;
      animation-delay: -188s;
      transform-origin: -8vw -7vh;
      box-shadow: 70vmin 0 9.028855359103297vmin currentColor;
    }
    &:nth-child(2) {
      color: #0e0014e1;
      top: 5%;
      left: 94%;
      animation-duration: 183s;
      animation-delay: -165s;
      transform-origin: 12vw 23vh;
      box-shadow: -70vmin 0 9.46581840300784vmin currentColor;
    }
    &:nth-child(3) {
      color: #27043d;
      top: 41%;
      left: 27%;
      animation-duration: 83s;
      animation-delay: -46s;
      transform-origin: 4vw 16vh;
      box-shadow: -70vmin 0 9.59754354091322vmin currentColor;
    }
    &:nth-child(4) {
      color: #0e0014e1;
      top: 28%;
      left: 76%;
      animation-duration: 211s;
      animation-delay: -241s;
      transform-origin: 9vw -11vh;
      box-shadow: 70vmin 0 9.124200070520073vmin currentColor;
    }
    &:nth-child(5) {
      color: #27043d;
      top: 53%;
      left: 6%;
      animation-duration: 173s;
      animation-delay: -239s;
      transform-origin: 3vw 19vh;
      box-shadow: -70vmin 0 9.551200345384041vmin currentColor;
    }
    &:nth-child(6) {
      color: #3d0361;
      top: 9%;
      left: 35%;
      animation-duration: 110s;
      animation-delay: -202s;
      transform-origin: -4vw -18vh;
      box-shadow: -70vmin 0 8.834852150359483vmin currentColor;
    }
    &:nth-child(7) {
      color: #1a0329;
      top: 22%;
      left: 88%;
      animation-duration: 141s;
      animation-delay: -24s;
      transform-origin: 19vw 2vh;
      box-shadow: -70vmin 0 9.501298976888812vmin currentColor;
    }
    &:nth-child(8) {
      color: #0e0014e1;
      top: 7%;
      left: 84%;
      animation-duration: 32s;
      animation-delay: -176s;
      transform-origin: -14vw 10vh;
      box-shadow: 70vmin 0 9.300990228431893vmin currentColor;
    }
    &:nth-child(9) {
      color: #27043d;
      top: 97%;
      left: 54%;
      animation-duration: 150s;
      animation-delay: -30s;
      transform-origin: 16vw 20vh;
      box-shadow: 70vmin 0 9.7026687692375vmin currentColor;
    }
    &:nth-child(10) {
      color: #1a0329;
      top: 2%;
      left: 22%;
      animation-duration: 264s;
      animation-delay: -45s;
      transform-origin: -16vw 4vh;
      box-shadow: 70vmin 0 9.092882504672682vmin currentColor;
    }
    &:nth-child(11) {
      color: #3d0361;
      top: 87%;
      left: 2%;
      animation-duration: 126s;
      animation-delay: -56s;
      transform-origin: 4vw 16vh;
      box-shadow: -70vmin 0 9.351183159054841vmin currentColor;
    }
    &:nth-child(12) {
      color: #27043d;
      top: 1%;
      left: 41%;
      animation-duration: 179s;
      animation-delay: -31s;
      transform-origin: -15vw -10vh;
      box-shadow: -70vmin 0 9.663048574715946vmin currentColor;
    }
    &:nth-child(13) {
      color: #27043d;
      top: 25%;
      left: 71%;
      animation-duration: 202s;
      animation-delay: -59s;
      transform-origin: -20vw -12vh;
      box-shadow: -70vmin 0 9.476973049208382vmin currentColor;
    }
    &:nth-child(14) {
      color: #0e0014e1;
      top: 46%;
      left: 5%;
      animation-duration: 101s;
      animation-delay: -66s;
      transform-origin: 7vw 3vh;
      box-shadow: 70vmin 0 8.751596112820955vmin currentColor;
    }
    &:nth-child(15) {
      color: #27043d;
      top: 87%;
      left: 78%;
      animation-duration: 85s;
      animation-delay: -190s;
      transform-origin: 24vw 7vh;
      box-shadow: 70vmin 0 8.945739554625918vmin currentColor;
    }
    &:nth-child(16) {
      color: #0e0014e1;
      top: 3%;
      left: 33%;
      animation-duration: 182s;
      animation-delay: -25s;
      transform-origin: -21vw -1vh;
      box-shadow: -70vmin 0 8.96546797285004vmin currentColor;
    }
    &:nth-child(17) {
      color: #27043d;
      top: 22%;
      left: 24%;
      animation-duration: 46s;
      animation-delay: -251s;
      transform-origin: 22vw 5vh;
      box-shadow: 70vmin 0 9.661403490961703vmin currentColor;
    }
    &:nth-child(18) {
      color: #19131c;
      top: 100%;
      left: 58%;
      animation-duration: 243s;
      animation-delay: -122s;
      transform-origin: -22vw -16vh;
      box-shadow: 70vmin 0 9.232520146552536vmin currentColor;
    }
    &:nth-child(19) {
      color: #27043d;
      top: 3%;
      left: 9%;
      animation-duration: 191s;
      animation-delay: -37s;
      transform-origin: 22vw 20vh;
      box-shadow: 70vmin 0 9.3069900870665vmin currentColor;
    }
    &:nth-child(20) {
      color: #1a0329;
      top: 69%;
      left: 17%;
      animation-duration: 265s;
      animation-delay: -7s;
      transform-origin: -21vw 18vh;
      box-shadow: 70vmin 0 9.435944843864482vmin currentColor;
    }
    &:nth-child(21) {
      color: #0e0014e1;
      top: 91%;
      left: 44%;
      animation-duration: 30s;
      animation-delay: -5s;
      transform-origin: 15vw -7vh;
      box-shadow: 70vmin 0 9.081875535161608vmin currentColor;
    }
    &:nth-child(22) {
      color: #0e0014e1;
      top: 12%;
      left: 25%;
      animation-duration: 173s;
      animation-delay: -184s;
      transform-origin: -24vw -8vh;
      box-shadow: -70vmin 0 9.149798773742761vmin currentColor;
    }
    &:nth-child(23) {
      color: #1a0329;
      top: 28%;
      left: 65%;
      animation-duration: 136s;
      animation-delay: -50s;
      transform-origin: -24vw 9vh;
      box-shadow: 70vmin 0 9.335823206098604vmin currentColor;
    }
    &:nth-child(24) {
      color: #27043d;
      top: 15%;
      left: 51%;
      animation-duration: 144s;
      animation-delay: -114s;
      transform-origin: -24vw -23vh;
      box-shadow: -70vmin 0 9.230293929293834vmin currentColor;
    }
    &:nth-child(25) {
      color: #3d0361;
      top: 92%;
      left: 90%;
      animation-duration: 139s;
      animation-delay: -128s;
      transform-origin: -2vw 1vh;
      box-shadow: 70vmin 0 9.550536660156109vmin currentColor;
    }
    &:nth-child(26) {
      color: #27043d;
      top: 47%;
      left: 39%;
      animation-duration: 254s;
      animation-delay: -91s;
      transform-origin: -6vw 13vh;
      box-shadow: 70vmin 0 8.758034093978571vmin currentColor;
    }
    &:nth-child(27) {
      color: #1a0329;
      top: 5%;
      left: 83%;
      animation-duration: 113s;
      animation-delay: -244s;
      transform-origin: 3vw 15vh;
      box-shadow: -70vmin 0 9.50392514695054vmin currentColor;
    }
    &:nth-child(28) {
      color: #0e0014e1;
      top: 27%;
      left: 2%;
      animation-duration: 102s;
      animation-delay: -157s;
      transform-origin: 6vw -13vh;
      box-shadow: -70vmin 0 9.518424319220689vmin currentColor;
    }
    &:nth-child(29) {
      color: #1a0329;
      top: 20%;
      left: 15%;
      animation-duration: 136s;
      animation-delay: -190s;
      transform-origin: 11vw 11vh;
      box-shadow: 70vmin 0 9.446971858441092vmin currentColor;
    }
    &:nth-child(30) {
      color: #3d0361;
      top: 65%;
      left: 54%;
      animation-duration: 34s;
      animation-delay: -26s;
      transform-origin: 12vw -20vh;
      box-shadow: 70vmin 0 9.0188177729239vmin currentColor;
    }
    &:nth-child(31) {
      color: #1a0329;
      top: 67%;
      left: 62%;
      animation-duration: 73s;
      animation-delay: -91s;
      transform-origin: 1vw 21vh;
      box-shadow: -70vmin 0 8.792524265008566vmin currentColor;
    }
    &:nth-child(32) {
      color: #19131c;
      top: 61%;
      left: 88%;
      animation-duration: 53s;
      animation-delay: -107s;
      transform-origin: -3vw 15vh;
      box-shadow: 70vmin 0 9.42316592181687vmin currentColor;
    }
    &:nth-child(33) {
      color: #27043d;
      top: 55%;
      left: 20%;
      animation-duration: 227s;
      animation-delay: -158s;
      transform-origin: 15vw 20vh;
      box-shadow: 70vmin 0 9.511249295580638vmin currentColor;
    }
  }

  @media (${mainTheme.deviсe.desktopS}) {
    height: 430px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    height: 370px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 390px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 365px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    height: 335px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 300px;
  }
`;
