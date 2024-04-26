import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const CreateProduct = styled.form`
  margin: 0 auto;
  margin-top: 150px;
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
  width: 60%;

  .swiper {
    display: none;
  }

  .swiper-button-next,
  .swiper-button-prev {
    margin: 0 20px 0 20px;
    width: 40px;
    height: 40px;
    &:after {
      font-size: 20px !important;
      color: ${mainTheme.colors.white};
    }

    &:hover {
      transition: 0.5s;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.596);
      color: ${mainTheme.colors.darkPurple};
    }

    @media (${mainTheme.deviсe.mobileL}) {
      margin: 0 15px 0 15px;
    }

    @media (${mainTheme.deviсe.mobileM}) {
      margin: 0 10px 0 10px;
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

  @media (max-width: 2150px) {
    width: 65%;
  }

  @media (${mainTheme.deviсe.desktopM}) {
    width: 80%;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    margin-top: 130px;
    width: 90%;
  }

  @media (${mainTheme.deviсe.tablet}) {
  }

  @media (${mainTheme.deviсe.laptopL}) {
    margin-top: 100px;
    width: 90%;
    gap: 25px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    padding: 20px;
    gap: 20px;
    .swiper {
      display: block;
      width: 100%;
    }
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 95%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 98%;
  }
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 15px;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (${mainTheme.deviсe.desktopM}) {
    gap: 30px;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    gap: 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    flex-direction: column;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 15px;
  }
`;

export const BottomProduct = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 0px;
    flex-direction: column;
  }
`;

export const Notice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 10px;

  @media (${mainTheme.deviсe.mobileXL}) {
    display: none;
  }
`;

export const ImageListMobile = styled.div`
  background-color: #262626;
  display: none;
  width: 100%;
  height: 300px;

  @media (${mainTheme.deviсe.mobileXL}) {
    display: flex;
    height: 450px;
    width: 100%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 400px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    height: 350px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 300px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    height: 250px;
  }
`;

export const ImageItem = styled.div`
  position: relative;
  width: 190px;
  height: 250px;

  @media (${mainTheme.deviсe.laptopL}) {
    width: 170px;
    height: 240px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 220px;
    height: 245px;
  }

  @media (max-width: 900px) {
    width: 190px;
    height: 205px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 160px;
    height: 175px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 450px;
    width: 100%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 400px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    height: 350px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 300px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    height: 250px;
  }
`;

export const StepProduct1 = styled.div<{ step: number }>`
  display: ${(props) => (props.step === 1 ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.tablet}) {
    gap: 18px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 14px;
  }
`;

export const StepProduct2 = styled.div<{ step: number }>`
  display: ${(props) => (props.step === 2 ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 18px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 14px;
  }
`;

export const StepProduct3 = styled.div<{ step: number }>`
  display: ${(props) => (props.step === 3 ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 18px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 14px;
  }
`;
