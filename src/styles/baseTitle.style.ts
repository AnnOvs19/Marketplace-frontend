import styled from "styled-components";
import { mainTheme } from "./mainTheme.style";
import { OrderText } from "./baseText.style";

export const MainTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 100%;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 38px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 36px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 30px;
  }

  @media (max-width: 870px) {
    text-align: center;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-weight: 600;
    font-size: 26px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 24px;
  }
`;

export const TitleSection = styled.h2`
  font-size: 35px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 33px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 31px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 25px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-weight: 400;
    font-size: 20px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    font-weight: 400;
    font-size: 19px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 18px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    font-size: 17px;
  }
`;

export const TitleForm = styled.h3`
  margin-bottom: 5px;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 23px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 21px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 17px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 14px;
  }
`;

export const SubTitle = styled.h4`
  font-size: 21px;
  font-weight: 600;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 19px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 17px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 15px;
  }

  @media (max-width: 870px) {
    text-align: center;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 11px;
  }
`;

export const TitleBasket = styled.h3`
  margin-bottom: 5px;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 23px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 22px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 19px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 21px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 14px;
  }
`;

export const TitleProduct = styled.h2`
  font-size: 35px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 32px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 28px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 22px;
  }

  @media (max-width: 700px) {
    font-size: 18px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-weight: 400;
    font-size: 24px;
    text-align: center;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    font-size: 22px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 20px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    font-size: 18px;
  }
`;

export const CardTitle = styled.h6`
  font-size: 14px;
  transition: 0.4s;
  cursor: pointer;
  font-weight: 300;
  color: ${mainTheme.colors.white};
  line-height: 120%;
  text-align: center;

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 12px;
  }

  @media (max-width: 870px) {
    text-align: center;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 11px;
    line-height: 100%;
  }
`;

export const FilterTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 22px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 20px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    text-align: center;
    font-size: 18px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 16px;
  }
`;

export const BasketTitle = styled.h6`
  font-size: 14px;
  transition: 0.4s;
  cursor: pointer;
  font-weight: 400;
  color: ${mainTheme.colors.white};
  line-height: 110%;

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 12px;
  }

  @media (max-width: 636px) {
    font-size: 18px;
    line-height: 100%;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 17px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    font-size: 16px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    font-size: 15px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 14px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    font-size: 13px;
  }
`;

export const DeskTitle = styled.h4`
  font-size: 21px;
  font-weight: 600;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 19px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 17px;
  }

  @media (max-width: 870px) {
    text-align: center;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    font-size: 15px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 14px;
  }
`;

export const OrderTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 17px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 16px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 15px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 13px;
  }
`;

export const OrderSubTitle = styled(OrderText)`
  font-weight: 500;
`;
