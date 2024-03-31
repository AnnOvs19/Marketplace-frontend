import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const QuestionsWraper = styled.section`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  max-width: 1405px;
  height: auto;
  overflow: hidden;
  gap: 30px;

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 30px;
    margin-bottom: 30px;
    gap: 17px;
  }
`;

export const QuestionsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 180px;

  @media (${mainTheme.deviсe.desktopM}) {
    justify-content: center;
    gap: 128px;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    justify-content: center;
    gap: 70px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    gap: 50px;
  }

  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 40px;
  }
`;
