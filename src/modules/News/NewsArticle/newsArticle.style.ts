import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const ArticleWrapper = styled.section`
  margin: 0 auto;
  margin-top: 155px;
  margin-bottom: 50px;
  max-width: 1405px;
  height: auto;
  overflow: hidden;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;

  @media (${mainTheme.deviсe.laptopL}) {
    margin-top: 130px;
    width: 100%;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 150px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    margin-top: 130px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    margin-top: 100px;
  }
`;

export const ArticleBox = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1405px;
  margin-left: 40px;
  margin-right: 40px;
  height: auto;
  overflow: hidden;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-left: 0px;
    margin-right: 0px;
    width: 90%;
    gap: 25px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 92%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 95%;
  }
`;

export const ImageList = styled.div`
  width: 100%;
  height: 655px;

  @media (${mainTheme.deviсe.desktopM}) {
    height: 550px;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    height: 500px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 100%;
    height: 450px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    height: 350px;
  }

  @media (max-width: 900px) {
    height: 450px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    height: 340px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 250px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 200px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 150px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    margin: -10px 30px 0 30px;
    width: 45px;
    height: 45px;
    &:after {
      font-size: 25px !important;
      color: ${mainTheme.colors.white};
    }

    &:hover {
      transition: 0.5s;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.596);
      color: ${mainTheme.colors.darkPurple};
    }

    @media (${mainTheme.deviсe.desktopS}) {
      margin: -20px 30px 0 30px;
    }

    @media (${mainTheme.deviсe.laptopS}) {
      margin: -5px 30px 0 30px;
    }

    @media (${mainTheme.deviсe.mobileXL}) {
      margin: 0 25px 0 25px;
      width: 40px;
      height: 40px;
      &:after {
        font-size: 20px !important;
      }
    }

    @media (${mainTheme.deviсe.mobileL}) {
      margin: 0 15px 0 15px;
    }

    @media (${mainTheme.deviсe.mobileM}) {
      margin: 0 15px 0 15px;
      width: 30px;
      height: 30px;
      &:after {
        font-size: 15px !important;
      }
    }

    @media (${mainTheme.deviсe.mobileXS}) {
      width: 25px;
      height: 25px;
      &:after {
        font-size: 10px !important;
      }
    }
  }
`;

export const ArticleImage = styled.div`
  width: 100%;
  height: 655px;
  position: relative;

  @media (${mainTheme.deviсe.desktopM}) {
    height: 550px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    height: 450px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    height: 350px;
  }

  @media (max-width: 900px) {
    height: 450px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    height: 340px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 250px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 200px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 150px;
  }
`;

export const InfoBox = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
`;

export const TextBox = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopM}) {
    gap: 15px;
  }
`;
