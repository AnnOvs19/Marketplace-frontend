import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const CreateNews = styled.form`
  margin: 0 auto;
  margin-top: 170px;
  position: relative;
  padding: 30px;
  z-index: 150;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-color: ${mainTheme.colors.colorForm};
  box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  height: auto;
  width: 65%;

  .swiper {
    display: none;
  }

  .swiper-button-next,
  .swiper-button-prev {
    margin: -5px 30px 0 30px;
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

  @media (${mainTheme.deviсe.desktopM}) {
    margin-top: 150px;
    width: 75%;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    width: 85%;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    margin-top: 130px;
    width: 90%;
    gap: 25px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    margin-top: 100px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 90%;

    .swiper {
      display: block;
      width: 100%;
    }
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    padding: 20px;
    gap: 20px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 95%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 98%;
  }
`;

export const PhotoList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 10px;

  @media (${mainTheme.deviсe.tablet}) {
    display: none;
  }
`;

export const PhotoListMobile = styled.div`
  background-color: #262626;
  display: none;
  width: 100%;
  height: 350px;

  @media (${mainTheme.deviсe.tablet}) {
    display: flex;
  }

  @media (max-width: 600px) {
    height: 250px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 200px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 150px;
  }
`;

export const PhotoItem = styled.div`
  position: relative;
  width: 255px;
  height: 240px;

  @media (${mainTheme.deviсe.desktopM}) {
    width: 225px;
    height: 220px;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    width: 225px;
    height: 210px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 205px;
    height: 190px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 170px;
    height: 155px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 140px;
    height: 125px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 100%;
    height: 350px;
  }

  @media (max-width: 600px) {
    height: 250px;
  }

  @media (max-width: 600px) {
    height: 250px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 200px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 150px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
