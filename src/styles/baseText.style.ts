import styled from "styled-components";
import { mainTheme } from "./mainTheme.style";

export const MainTitle = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: ${mainTheme.colors.white};
`;

export const Title = styled.h2`
  font-size: 35px;
  font-weight: 600;
  color: ${mainTheme.colors.white};
`;

export const SubTitle = styled.h4`
  font-size: 28px;
  font-weight: 700;
  color: ${mainTheme.colors.white};
`;

export const TextMedium = styled.p`
  font-size: 16px;
  transition: 0.4s;
  font-weight: 400;
  color: ${mainTheme.colors.white};
`;

export const SmallText = styled.span`
  font-size: 12px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.lightGray};
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

export const ButtonText = styled.span`
  font-size: 15px;
  line-height: 100%;
  font-weight: 400;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 13px;
  }
`;

export const ButtonTextUppercase = styled.span`
  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  font-weight: 400;
  color: ${mainTheme.colors.white};
`;
