import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const SliderWrap = styled.section`
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  max-width: 1405px;
  height: auto;
  overflow: hidden;
  gap: 44px;
  width: 100%;

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 20px;
    width: 90%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 95%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 97%;
  }
`;

export const SliderList = styled.div`
  margin-right: 0px;
  margin-left: 0px;

  @media (${mainTheme.deviсe.laptopL}) {
    margin-right: 10px;
    margin-left: 10px;
  }

  @media (max-width: 636px) {
    margin-right: 8px;
    margin-left: 8px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-right: 0px;
    margin-left: 0px;
    width: 100%;
  }

  .swiper {
    overflow: hidden;

    @media (${mainTheme.deviсe.laptopM}) {
      overflow: visible;
    }
  }

  .swiper-slide {
    width: 250px;

    @media (${mainTheme.deviсe.laptopL}) {
      width: 195px;
    }

    @media (${mainTheme.deviсe.tablet}) {
      width: 145px;

      height: auto;
    }

    @media (max-width: 490px) {
      width: 125px;
      height: auto;
    }

    @media (${mainTheme.deviсe.mobileL}) {
      width: 165px;
    }

    @media (${mainTheme.deviсe.mobileM}) {
      width: 145px;
    }

    @media (${mainTheme.deviсe.mobileS}) {
      width: 135px;
    }

    @media (${mainTheme.deviсe.mobileXS}) {
      width: 230px;
    }
  }
`;

export const ListBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

export const BottomLine = styled.div`
  height: 1px;
  color: ${mainTheme.colors.gray};
  width: 100%;
  border: 1px solid ${mainTheme.colors.gray};
  position: relative;
  z-index: 15;

  @media (${mainTheme.deviсe.mobileXL}) {
    display: none;
  }
`;
