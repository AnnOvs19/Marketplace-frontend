import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const AboutUsWrapper = styled.section`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1405px;
  height: auto;
  overflow: hidden;
  gap: 44px;

  @media (max-width: 870px) {
    overflow: auto;
    gap: 30px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 30px;
    margin-bottom: 30px;
    gap: 17px;
  }
`;

export const AboutUsBg = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background: ${mainTheme.colors.colorBody};
  width: 100%;
  height: 850px;
  overflow: hidden;

  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  span {
    width: 38vmin;
    height: 38vmin;
    border-radius: 38vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 16;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    &:nth-child(0) {
      color: #27043d;
      top: 36%;
      left: 22%;
      animation-duration: 287s;
      animation-delay: -225s;
      transform-origin: 23vw -19vh;
      box-shadow: 76vmin 0 10.360555195824576vmin currentColor;
    }
    &:nth-child(1) {
      color: #3d0361;
      top: 16%;
      left: 81%;
      animation-duration: 335s;
      animation-delay: -248s;
      transform-origin: 18vw 15vh;
      box-shadow: -76vmin 0 10.071468294818155vmin currentColor;
    }
    &:nth-child(2) {
      color: #27043d;
      top: 87%;
      left: 63%;
      animation-duration: 322s;
      animation-delay: -7s;
      transform-origin: -18vw -22vh;
      box-shadow: 76vmin 0 10.304983841748165vmin currentColor;
    }
    &:nth-child(3) {
      color: #3d0361;
      top: 13%;
      left: 61%;
      animation-duration: 271s;
      animation-delay: -41s;
      transform-origin: 6vw -23vh;
      box-shadow: 76vmin 0 10.145541455439332vmin currentColor;
    }
    &:nth-child(4) {
      color: #27043d;
      top: 54%;
      left: 40%;
      animation-duration: 129s;
      animation-delay: -226s;
      transform-origin: -10vw 18vh;
      box-shadow: 76vmin 0 10.268853227033315vmin currentColor;
    }
    &:nth-child(5) {
      color: #3d0361;
      top: 85%;
      left: 4%;
      animation-duration: 33s;
      animation-delay: -256s;
      transform-origin: -7vw -11vh;
      box-shadow: 76vmin 0 9.614515190990431vmin currentColor;
    }
    &:nth-child(6) {
      color: #27043d;
      top: 8%;
      left: 15%;
      animation-duration: 98s;
      animation-delay: -270s;
      transform-origin: 17vw 16vh;
      box-shadow: 76vmin 0 9.557869324864782vmin currentColor;
    }
    &:nth-child(7) {
      color: #27043d;
      top: 99%;
      left: 95%;
      animation-duration: 236s;
      animation-delay: -45s;
      transform-origin: 10vw -18vh;
      box-shadow: -76vmin 0 9.706929881039114vmin currentColor;
    }
    &:nth-child(8) {
      color: #3d0361;
      top: 39%;
      left: 28%;
      animation-duration: 247s;
      animation-delay: -102s;
      transform-origin: -22vw -9vh;
      box-shadow: 76vmin 0 9.993694570887255vmin currentColor;
    }
    &:nth-child(9) {
      color: #27043d;
      top: 6%;
      left: 19%;
      animation-duration: 68s;
      animation-delay: -261s;
      transform-origin: 2vw 23vh;
      box-shadow: 76vmin 0 9.78549005853892vmin currentColor;
    }
    &:nth-child(10) {
      color: #27043d;
      top: 34%;
      left: 97%;
      animation-duration: 139s;
      animation-delay: -169s;
      transform-origin: 3vw -23vh;
      box-shadow: -76vmin 0 9.825283866399166vmin currentColor;
    }
    &:nth-child(11) {
      color: #27043d;
      top: 58%;
      left: 13%;
      animation-duration: 101s;
      animation-delay: -48s;
      transform-origin: 0vw 24vh;
      box-shadow: -76vmin 0 10.11146581975542vmin currentColor;
    }
    &:nth-child(12) {
      color: #3d0361;
      top: 28%;
      left: 34%;
      animation-duration: 123s;
      animation-delay: -140s;
      transform-origin: -15vw 1vh;
      box-shadow: -76vmin 0 9.568958133072881vmin currentColor;
    }
    &:nth-child(13) {
      color: #27043d;
      top: 9%;
      left: 36%;
      animation-duration: 124s;
      animation-delay: -286s;
      transform-origin: 10vw -11vh;
      box-shadow: 76vmin 0 10.448520198384276vmin currentColor;
    }
    &:nth-child(14) {
      color: #27043d;
      top: 82%;
      left: 91%;
      animation-duration: 76s;
      animation-delay: -38s;
      transform-origin: -14vw 21vh;
      box-shadow: 76vmin 0 9.883963435040092vmin currentColor;
    }
    &:nth-child(15) {
      color: #3d0361;
      top: 56%;
      left: 18%;
      animation-duration: 287s;
      animation-delay: -74s;
      transform-origin: 17vw -6vh;
      box-shadow: -76vmin 0 10.478148634638726vmin currentColor;
    }
    &:nth-child(16) {
      color: #27043d;
      top: 61%;
      left: 41%;
      animation-duration: 52s;
      animation-delay: -149s;
      transform-origin: 10vw -17vh;
      box-shadow: -76vmin 0 10.255972775853404vmin currentColor;
    }
    &:nth-child(17) {
      color: #27043d;
      top: 95%;
      left: 46%;
      animation-duration: 86s;
      animation-delay: -86s;
      transform-origin: 16vw 2vh;
      box-shadow: 76vmin 0 9.901780030074535vmin currentColor;
    }
    &:nth-child(18) {
      color: #27043d;
      top: 100%;
      left: 55%;
      animation-duration: 122s;
      animation-delay: -94s;
      transform-origin: 0vw 13vh;
      box-shadow: 76vmin 0 10.064672866106507vmin currentColor;
    }
    &:nth-child(19) {
      color: #3d0361;
      top: 49%;
      left: 26%;
      animation-duration: 272s;
      animation-delay: -71s;
      transform-origin: -11vw 21vh;
      box-shadow: 76vmin 0 9.603075114740232vmin currentColor;
    }
    &:nth-child(20) {
      color: #27043d;
      top: 35%;
      left: 31%;
      animation-duration: 38s;
      animation-delay: -271s;
      transform-origin: 20vw -17vh;
      box-shadow: 76vmin 0 10.195269164159313vmin currentColor;
    }
    &:nth-child(21) {
      color: #27043d;
      top: 75%;
      left: 81%;
      animation-duration: 8s;
      animation-delay: -29s;
      transform-origin: -12vw 15vh;
      box-shadow: -76vmin 0 9.595344134931153vmin currentColor;
    }
    &:nth-child(22) {
      color: #27043d;
      top: 95%;
      left: 85%;
      animation-duration: 253s;
      animation-delay: -303s;
      transform-origin: 9vw -18vh;
      box-shadow: 76vmin 0 9.924531803687241vmin currentColor;
    }
  }

  @media (${mainTheme.deviсe.desktopS}) {
    height: 750px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    height: 680px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    height: 650px;
  }

  @media (max-width: 870px) {
    height: 1050px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    height: 1000px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 880px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    height: 925px;
  }
`;

export const AboutUsBgBox = styled.div`
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba(95 31 135 / 37%);
  backdrop-filter: blur(35px);
  width: 100%;
  height: 850px;
  position: absolute;
  z-index: 3;

  @media (${mainTheme.deviсe.desktopS}) {
    height: 750px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    height: 680px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    height: 650px;
  }

  @media (max-width: 870px) {
    height: 1050px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    height: 1000px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 880px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    height: 925px;
  }
`;

export const AboutUsContainer = styled.div`
  margin: 40px 40px;
  position: relative;
  z-index: 150;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 15px;
  }

  @media (max-width: 870px) {
    margin: 40px 0px;
  }
`;

export const AboutUsBox = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 85px;

  @media (${mainTheme.deviсe.desktopS}) {
    gap: 80px;
    width: 100%;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 30px;
  }

  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const AboutUsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (${mainTheme.deviсe.desktopS}) {
    width: 610px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 95%;
    height: 95%;
  }

  @media (max-width: 870px) {
    gap: 15px;
    width: 90%;
  }
`;

export const AboutUsImage = styled.div`
  margin: 25px 0;
  width: 640px;
  height: 485px;
  position: relative;

  @media (${mainTheme.deviсe.desktopS}) {
    width: 600px;
    height: 380px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 100%;
    height: 305px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin: 10px 0;
    width: 70%;
    height: 280px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin: 5px 0;
    width: 100%;
    height: 250px;
  }
`;
