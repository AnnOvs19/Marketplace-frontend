import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

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
    left: 90px;
    top: -150px;
    width: 300px;
    height: 300px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    top: -100px;
    left: 60px;
    width: 200px;
    height: 200px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    top: 0px;
    left: 30px;
    width: 80px;
    height: 80px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 50px;
    height: 50px;
  }
`;

export const Circle2 = styled.div`
  display: flex;
  top: 350px;
  right: -200px;
  position: absolute;
  background: ${mainTheme.colors.darkPurple};
  box-shadow: 0px 0px 49px 83px ${mainTheme.colors.darkPurple};
  border-radius: 66% 34% 25% 75% / 22% 82% 18% 78%;
  width: 350px;
  height: 350px;

  @media (${mainTheme.deviсe.laptopM}) {
    right: -150px;
    width: 200px;
    height: 200px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    right: -50px;
    width: 120px;
    height: 120px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    display: none;
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
    width: 400px;
    height: 200px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 300px;
    height: 100px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    top: 460px;
    right: 50px;
    width: 190px;
    height: 90px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    top: 430px;
    width: 100px;
    height: 30px;
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
    width: 300px;
    height: 200px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    left: 420px;
    top: 7px;
    width: 150px;
    height: 150px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    left: 320px;
    top: 47px;
    width: 150px;
    height: 70px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    left: 104px;
    width: 100px;
    height: 50px;
  }
`;

export const Circle5 = styled.div`
  left: 154px;
  top: 627px;
  position: absolute;
  background: ${mainTheme.colors.lightPurple};
  box-shadow: 0px 0px 49px 83px ${mainTheme.colors.lightPurple};
  border-radius: 40% 60% 64% 36% / 20% 45% 55% 80%;
  width: 550px;
  height: 450px;

  @media (${mainTheme.deviсe.laptopM}) {
    top: 707px;
    left: 54px;
    width: 500px;
    height: 400px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    top: 687px;
    width: 250px;
    height: 150px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    top: 607px;
    left: 44px;
    width: 150px;
    height: 70px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 70px;
    height: 25px;
  }
`;
