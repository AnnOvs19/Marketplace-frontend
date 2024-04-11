import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const BlogListWrap = styled.div`
  overflow: hidden;
  max-width: 1405px;
  margin: 0 auto;
  margin-top: 300px;
  margin-bottom: 150px;
  position: relative;
  z-index: 15;

  @media (${mainTheme.deviсe.laptopL}) {
    margin-top: 170px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-top: 140px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    display: flex;
    justify-content: center;
    margin-top: 130px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    margin-top: 110px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    margin-top: 80px;
  }
`;

export const BlogListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (${mainTheme.deviсe.laptopL}) {
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin-left: 0;
    margin-right: 0;
    gap: 20px;
  }
`;
