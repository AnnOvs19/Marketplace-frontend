import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const SliderImage = styled.div`
  width: 100%;
  .swiper {
    width: 450px;
    height: 560px;

    @media (${mainTheme.deviсe.laptopL}) {
      width: 430px;
      height: 540px;
    }

    @media (${mainTheme.deviсe.laptopM}) {
      width: 400px;
      height: 510px;
    }

    @media (${mainTheme.deviсe.laptopS}) {
      width: 360px;
      height: 470px;
    }

    @media (max-width: 860px) {
      width: 300px;
      height: 410px;
    }

    @media (${mainTheme.deviсe.tablet}) {
      width: 260px;
      height: 370px;
    }

    @media (max-width: 650px) {
      width: 210px;
      height: 230px;
    }

    @media (${mainTheme.deviсe.mobileXL}) {
      width: 100%;
      height: 410px;
    }

    @media (${mainTheme.deviсe.mobileM}) {
      height: 380px;
    }

    @media (${mainTheme.deviсe.mobileS}) {
      height: 360px;
    }

    @media (${mainTheme.deviсe.mobileXS}) {
      height: 340px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ffffffbd;
    background-color: ${mainTheme.colors.extraDarkPurple};
    border-radius: 50%;
    width: 42px;
    height: 42px;
    margin: 0 10px 0 10px;

    &:after {
      font-size: 20px !important;
    }

    &:hover {
      transition: 0.5s;
    }

    @media (${mainTheme.deviсe.laptopL}) {
      width: 35px;
      height: 35px;

      &:after {
        font-size: 15px !important;
      }
    }

    @media (${mainTheme.deviсe.laptopS}) {
      width: 32px;
      height: 32px;

      &:after {
        font-size: 12px !important;
      }
    }

    @media (${mainTheme.deviсe.tablet}) {
      width: 28px;
      height: 28px;

      &:after {
        font-size: 8px !important;
      }
    }

    @media (max-width: 650px) {
      margin: 0 2px 0 2px;
    }

    @media (${mainTheme.deviсe.mobileXL}) {
      display: none;
    }
  }
`;

export const ImageBox = styled.div`
  position: relative;
  background-color: #00000085;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 560px;

  @media (${mainTheme.deviсe.laptopL}) {
    width: 430px;
    height: 540px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 400px;
    height: 510px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 360px;
    height: 470px;
  }

  @media (max-width: 860px) {
    width: 300px;
    height: 410px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 260px;
    height: 370px;
  }

  @media (max-width: 650px) {
    width: 210px;
    height: 230px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 100%;
    height: 410px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    height: 380px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 360px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    height: 340px;
  }
`;
