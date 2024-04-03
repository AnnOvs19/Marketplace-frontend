import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const FiltersWrap = styled.div`
  overflow: hidden;
  max-width: 1405px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 150px;
  position: relative;
  z-index: 15;
`;

export const FilterBox = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (${mainTheme.deviсe.laptopL}) {
    width: 100%;
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 90%;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
