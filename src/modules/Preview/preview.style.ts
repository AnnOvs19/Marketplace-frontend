import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const PreviewWraper = styled.section`
  margin-top: 0;
  display: flex;
  width: 100%;
  height: 750px;
  justify-content: center;
  overflow: hidden;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 620px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 645px;
  }
`;

export const PreviewBacground = styled.div`
  width: 100%;
  height: 750px;
  position: relative;
  overflow: hidden;
  z-index: 2;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 620px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 645px;
  }
`;

export const PreviewBoxBG = styled.div`
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba(95 31 135 / 37%);
  backdrop-filter: blur(35px);
  width: 100%;
  height: 750px;
  position: absolute;
  z-index: 3;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 620px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 645px;
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

export const PreviewContainer = styled.div`
  position: relative;
  z-index: 150;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 70px;

  @media (${mainTheme.deviсe.desktopS}) {
    gap: 20px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    gap: 0px;
  }

  @media (max-width: 870px) {
    margin-top: 135px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 130px;
    gap: 10px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    margin-top: 115px;
    gap: 5px;
  }
`;

export const TextBox = styled.article`
  position: relative;
  z-index: 150;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 580px;

  @media (${mainTheme.deviсe.laptopL}) {
    max-width: 540px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    max-width: 500px;
    margin-left: 40px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    max-width: 420px;
  }

  @media (max-width: 870px) {
    align-items: center;
    margin-left: 0px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    max-width: 100%;
  }
`;

export const TextBottom = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 10px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    flex-direction: column;
  }
`;

export const PreviewImage = styled.div`
  margin: 90px 0 70px 0;
  width: 675px;
  height: 550px;
  position: relative;

  @media (${mainTheme.deviсe.laptopL}) {
    width: 575px;
    height: 450px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 545px;
    height: 420px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 495px;
    height: 370px;
  }

  @media (max-width: 870px) {
    margin: 20px 0;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 100%;
    height: 60%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 100%;
    height: 40%;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 100%;
    height: 30%;
  }
`;
