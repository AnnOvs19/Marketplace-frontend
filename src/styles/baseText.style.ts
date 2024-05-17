import styled from "styled-components";
import { mainTheme } from "./mainTheme.style";

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
    line-height: 135%;
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

export const MenuText = styled.p`
  cursor: pointer;
  margin-left: 4px;
  font-size: 21px;
  transition: 0.4s;
  font-weight: 400;
  color: ${mainTheme.colors.white};
`;

export const LinkText = styled.p`
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

export const CardPrice = styled.p`
  font-size: 14px;
  transition: 0.4s;
  font-weight: 400;
  color: ${mainTheme.colors.extraLightPurple};
  line-height: 120%;

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 12px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 11px;
    line-height: 100%;
  }
`;

export const CardOtherText = styled.span`
  font-size: 12px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.lightGray};
  line-height: 100%;

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 11px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 10px;
  }
`;

export const FilterText = styled.p`
  cursor: pointer;
  margin-left: 4px;
  font-size: 20px;
  transition: 0.4s;
  font-weight: 400;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 18px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 16px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 14px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 13px;
  }
`;

export const BasketPrice = styled.p`
  font-size: 13px;
  transition: 0.4s;
  font-weight: 700;
  color: #e5baff;
  line-height: 120%;

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 12px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 11px;
  }

  @media (max-width: 830px) {
    font-size: 10px;
  }

  @media (max-width: 636px) {
    font-size: 16px;
    line-height: 100%;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 15px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    font-size: 14px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 12px;
  }
`;

export const BasketQuantity = styled.p`
  font-size: 16px;
  transition: 0.4s;
  font-weight: 400;
  color: ${mainTheme.colors.white};
  line-height: 100%;

  @media (max-width: 636px) {
    font-size: 15px;
    line-height: 100%;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 14px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 13px;
  }
`;

export const TotalText = styled.p`
  font-size: 17px;
  transition: 0.4s;
  font-weight: 500;
  color: white;
  line-height: 120%;

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 16px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 15px;
  }

  @media (max-width: 830px) {
    font-size: 17px;
  }

  @media (max-width: 636px) {
    font-size: 16px;
    line-height: 100%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    font-size: 15px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    font-size: 14px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 13px;
  }
`;

export const TotalPrice = styled.h4`
  font-size: 20px;
  font-weight: 600;
  width: 50%;
  text-align: end;
  color: ${mainTheme.colors.extraLightPurple};

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 18px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 16px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 15px;
  }

  @media (max-width: 870px) {
    text-align: center;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 14px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 12px;
  }
`;

export const InfoProduct = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: white;
  background-color: ${mainTheme.colors.purple};
  padding: 8px 14px;
  border-radius: 50px;
  width: fit-content;

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 7px 9px;
    font-size: 11px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    font-size: 12px;
  }

  @media (max-width: 700px) {
    padding: 5px 12px;
    font-weight: 500;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 100%;
    text-align: center;
    padding: 8px 18px;
    font-size: 14px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    padding: 6px 15px;
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    padding: 5px 12px;
    font-size: 12px;
  }
`;

export const DeskKey = styled.span`
  line-height: 110%;
  font-size: 12px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.white};

  @media (max-width: 650px) {
    font-size: 11px;
  }
`;

export const DeskValue = styled.span`
  text-align: right;
  font-size: 12px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.lightGray};

  @media (max-width: 650px) {
    font-size: 11px;
  }
`;

export const ReviewText = styled.span`
  font-size: 12px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.lightGray};

  @media (max-width: 650px) {
    font-size: 11px;
  }
`;

export const ProfileText = styled.p`
  font-size: 15px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.white};
  line-height: 135%;

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 14px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 13px;
  }

  @media (max-width: 870px) {
    text-align: center;
    font-size: 12px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    font-size: 11px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    font-size: 10px;
  }
`;

export const OrderText = styled.p`
  font-size: 16px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.white};
  line-height: 150%;

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 14px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 12px;
    line-height: 135%;
  }
`;
