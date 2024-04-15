import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const FiltersWrap = styled.div`
  max-width: 1405px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 120px;
  position: relative;
  z-index: 150;

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 100px;
  }
`;

export const FilterBox = styled.div`
  overflow: hidden;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px;
  background-color: #00000080;
  padding: 20px;
  box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};

  @media (${mainTheme.deviсe.laptopL}) {
    width: 100%;
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    flex-direction: column;
    gap: 30px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 90%;
    margin-left: 0px;
    margin-right: 0px;
    padding: 15px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    padding: 12px;
  }
`;

export const SearchPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  width: 64%;

  @media (${mainTheme.deviсe.tablet}) {
    width: 100%;
  }
`;

export const ControlPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const ButtonBox = styled.button`
  color: transparent;
  background-color: transparent;
  border: none;
  position: relative;
  height: 25px;
  width: 25px;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 20px;
    width: 20px;
  }
`;

export const TextIcon = styled.span`
  text-align: center;
  font-size: 9px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.white};

  @media (max-width: 870px) {
    font-size: 8px;
    text-align: center;
  }
`;
