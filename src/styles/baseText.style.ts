import styled from "styled-components";
import { mainTheme } from "./mainTheme.style";

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

  @media (max-width: 870px) {
    text-align: center;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-weight: 400;
    font-size: 21px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 19px;
  }
`;

export const TitleForm = styled.h3`
  margin-bottom: 5px;
  font-size: 27px;
  font-weight: 500;
  text-align: center;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 25px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 23px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 18px;
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

export const TextMedium = styled.p`
  font-size: 17px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.white};
  line-height: 150%;

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 15px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 13px;
  }

  @media (max-width: 870px) {
    text-align: center;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 12px;
    line-height: 120%;
  }
`;

export const SmallText = styled.span`
  font-size: 12px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.lightGray};

  @media (max-width: 870px) {
    font-size: 11px;
    text-align: center;
  }
`;

export const TextForm = styled.span`
  margin-left: 3px;
  font-size: 15px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 12px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    font-size: 11px;
  }
`;

export const LogoText = styled.p`
  font-size: 24px;
  transition: 0.4s;
  font-weight: 400;
  text-transform: uppercase;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 22px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 21px;
  }
`;

export const LogoTextMenu = styled.p`
  font-size: 26px;
  transition: 0.4s;
  font-weight: 400;
  text-transform: uppercase;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 24px;
  }
`;

export const MenuText = styled.a`
  cursor: pointer;
  margin-left: 4px;
  font-size: 17px;
  transition: 0.4s;
  font-weight: 400;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 19px;
  }
`;

export const LinkText = styled.a`
  cursor: pointer;
  font-size: 17px;
  transition: 0.4s;
  font-weight: 400;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 15px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 14px;
  }
`;
