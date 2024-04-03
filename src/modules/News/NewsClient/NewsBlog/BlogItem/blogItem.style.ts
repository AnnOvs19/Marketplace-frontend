import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const BlogItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${mainTheme.colors.gray};
  background-color: #0d09128d;
  backdrop-filter: blur(35px);
  width: 445px;
  height: 478px;
  &:hover {
    box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 400px;
    height: 438px;
  }

  @media (max-width: 1340px) {
    width: 340px;
    height: 378px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 320px;
    height: 378px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 290px;
    height: 368px;
  }

  @media (max-width: 650px) {
    width: 260px;
    height: 368px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 75%;
    height: 368px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 95%;
    height: 348px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 98%;
    height: 328px;
  }
`;

export const BlogItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 25px;
  width: 100%;

  @media (${mainTheme.deviсe.laptopL}) {
    padding: 20px;
  }

  @media (max-width: 1340px) {
    padding: 15px;
  }
`;

export const BlogItemImage = styled.div`
  position: relative;
  width: 99%;
  margin: 1px;
  height: 300px;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 270px;
  }

  @media (max-width: 1340px) {
    height: 250px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    height: 260px;
  }
`;
