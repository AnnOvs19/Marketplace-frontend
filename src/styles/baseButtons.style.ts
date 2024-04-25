import styled from "styled-components";
import { mainTheme } from "./mainTheme.style";

export const HeaderButton = styled.button`
  margin-left: 25px;
  background-color: transparent;
  color: ${mainTheme.colors.white};
  border: 1px solid ${mainTheme.colors.white};
  padding: 12px 22px;
  font-size: 14px;

  &:hover {
    background-color: ${mainTheme.colors.white};
    color: ${mainTheme.colors.black};
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 10px 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-left: 0;
    font-size: 14px;
  }

  @media (max-width: 622px) {
    font-size: 17px;
    padding: 10px 30px;
  }
`;

export const TransparentButton = styled.button`
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${mainTheme.colors.white};
  border: 1px solid ${mainTheme.colors.white};
  padding: 10px 20px;
  font-size: 14px;

  &:hover {
    background-color: ${mainTheme.colors.white};
    color: ${mainTheme.colors.black};
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 10px 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 12px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 11px;
  }
`;

export const SliderButton = styled.button`
  width: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${mainTheme.colors.white};
  border: 1px solid ${mainTheme.colors.white};
  padding: 12px 20px;
  font-size: 14px;

  &:hover {
    background-color: ${mainTheme.colors.white};
    color: ${mainTheme.colors.black};
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 10px 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 12px;
    width: 100%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 97%;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 11px;
    padding: 10px 10px;
  }
`;

export const SearchButton = styled.button`
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${mainTheme.colors.white};
  border: 1px solid ${mainTheme.colors.lightGray};
  padding: 8px 30px;
  font-size: 14px;
  font-weight: 100;

  &:hover {
    background-color: ${mainTheme.colors.lightGray};
    color: ${mainTheme.colors.black};
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 8px 28px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 12px;
    padding: 8px 22px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 11px;
    padding: 8px 14px;
  }
`;

export const BaseButton = styled.button`
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${mainTheme.colors.darkPurple};
  color: ${mainTheme.colors.white};
  padding: 12px 20px;
  font-size: 14px;
  border: none;

  &:hover {
    background-color: ${mainTheme.colors.extraDarkPurple};
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 11px 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 12px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 11px;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${mainTheme.colors.darkPurple};
  color: ${mainTheme.colors.white};
  border: none;
  padding: 12px 20px;
  font-size: 14px;

  &:hover {
    background-color: ${mainTheme.colors.extraDarkPurple};
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 10px 20px;
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 12px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 11px;
  }
`;

export const CardButton = styled.button`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${mainTheme.colors.darkPurple};
  color: ${mainTheme.colors.white};
  border: none;
  padding: 12px 20px;
  font-size: 14px;

  &:hover {
    background-color: ${mainTheme.colors.extraDarkPurple};
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 10px 20px;
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    padding: 8px 15px;
    font-size: 12px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 11px;
  }
`;

export const FileButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${mainTheme.colors.darkPurple};
  color: ${mainTheme.colors.white};
  padding: 12px 20px;
  font-size: 14px;
  border: none;
  position: relative;

  &:hover {
    background-color: ${mainTheme.colors.extraDarkPurple};
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 11px 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 12px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 11px;
  }
`;

export const DeleteButton = styled.button`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: red;
  border: none;
  border-top: 1px solid ${mainTheme.colors.gray};
  padding: 15px 10px;
  font-size: 14px;

  &:hover {
    color: ${mainTheme.colors.white};
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    padding: 12px 10px;
  }
`;

export const EditButton = styled.button`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  border: none;
  border-top: 1px solid ${mainTheme.colors.gray};
  padding: 15px 10px;
  font-size: 14px;

  &:hover {
    color: ${mainTheme.colors.green};
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 13px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    padding: 12px 10px;
  }
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 31px;
  border: none;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: 0 6px 0 6px;
  padding: 11px;
  background-color: ${mainTheme.colors.darkPurple};
  color: ${mainTheme.colors.white};
  font-size: 10px;

  &:hover {
    background-color: ${mainTheme.colors.extraDarkPurple};
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 22px;
    height: 22px;
    padding: 5px;
  }

  @media (max-width: 636px) {
    width: 30px;
    height: 30px;
    padding: 11px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 22px;
    height: 22px;
    padding: 5px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 18px;
    height: 18px;
    padding: 4px;
  }
`;
