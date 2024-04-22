import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const TabListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 12px;
  }

  @media (max-width: 860px) {
    gap: 10px;
    flex-direction: row;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 6px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 10px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    gap: 5px;
  }
`;

export const TabItemWrap = styled.div`
  display: flex;
  position: relative;
  width: 55px;
  height: 55px;

  @media (${mainTheme.deviсe.laptopS}) {
    width: 45px;
    height: 45px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 650px) {
    width: 30px;
    height: 30px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 50px;
    height: 50px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 45px;
    height: 45px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 40px;
    height: 40px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    width: 35px;
    height: 35px;
  }
`;
