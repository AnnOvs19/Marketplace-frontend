import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const PreviewWraper = styled.section`
  margin-top: 0;
  display: flex;
  width: 1920px;
  height: 900px;
  justify-content: center;
  overflow: hidden;

  @media (${mainTheme.deviсe.desktopS}) {
    width: 1680px;
    height: 800px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 1280px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 768px;
  }
`;

export const PreviewBacground = styled.div`
  width: 1920px;
  height: 900px;
  position: relative;
  overflow: hidden;
  z-index: 2;

  @media (${mainTheme.deviсe.desktopS}) {
    width: 1680px;
    height: 800px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 1280px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 768px;
  }
`;

export const Circle1 = styled.div`
  position: absolute;
  left: 200px;
  top: -150px;
  background: ${mainTheme.colors.purple};
  box-shadow: 0px 0px 66px 67px ${mainTheme.colors.purple};
  border-radius: 50% 50% 70% 30% / 50% 30% 70% 50%;
  width: 400px;
  height: 400px;

  @media (${mainTheme.deviсe.laptopM}) {
    left: 150px;
    top: -150px;
    width: 350px;
    height: 350px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    left: 150px;
    top: -150px;
    width: 300px;
    height: 300px;
  }
`;

export const Circle2 = styled.div`
  top: 350px;
  right: -200px;
  position: absolute;
  background: ${mainTheme.colors.darkPurple};
  box-shadow: 0px 0px 49px 83px ${mainTheme.colors.darkPurple};
  border-radius: 66% 34% 25% 75% / 22% 82% 18% 78%;
  width: 350px;
  height: 350px;

  @media (${mainTheme.deviсe.laptopM}) {
    width: 300px;
    height: 300px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 250px;
    height: 250px;
  }
`;

export const Circle3 = styled.div`
  top: 550px;
  right: 100px;
  position: absolute;
  background: ${mainTheme.colors.extraDarkPurple};
  box-shadow: 0px 0px 49px 83px ${mainTheme.colors.extraDarkPurple};
  border-radius: 40% 60% 66% 34% / 39% 55% 45% 61%;
  width: 550px;
  height: 350px;

  @media (${mainTheme.deviсe.laptopM}) {
    right: 80px;
    width: 500px;
    height: 300px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 450px;
    height: 250px;
  }
`;

export const Circle4 = styled.div`
  left: 554px;
  top: 27px;
  position: absolute;
  background: ${mainTheme.colors.extraDarkPurple};
  box-shadow: 0px 0px 49px 83px ${mainTheme.colors.extraDarkPurple};
  border-radius: 34% 66% 52% 48% / 40% 45% 55% 60%;
  width: 450px;
  height: 350px;

  @media (${mainTheme.deviсe.laptopM}) {
    left: 514px;
    width: 400px;
    height: 300px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 350px;
    height: 250px;
  }
`;

export const PreviewBox = styled.article`
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba(95 31 135 / 37%);
  backdrop-filter: blur(80px);
  width: 1920px;
  height: 900px;
  position: absolute;
  z-index: 3;

  @media (${mainTheme.deviсe.desktopS}) {
    width: 1680px;
    height: 800px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 1280px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 768px;
  }
`;

export const PreviewImage = styled.div`
  margin: 100px 0 70px 0;
  width: 460px;
  height: 640px;
  position: relative;
`;
