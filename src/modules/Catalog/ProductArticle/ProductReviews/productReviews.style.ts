import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const ReviewBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;

  @media (${mainTheme.deviсe.tablet}) {
    gap: 20px;
  }
`;

export const ReviewContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  width: 100%;

  @media (${mainTheme.deviсe.tablet}) {
    flex-direction: column-reverse;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 90%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 95%;
  }
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  justify-content: center;

  @media (max-width: 650px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
  width: 100%;
  padding: 20px;
  background-color: ${mainTheme.colors.colorForm};

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 12px;
    /* width: 48%; */
  }

  @media (max-width: 650px) {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    gap: 10px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 18px;
    padding: 18px;
  }
`;

export const ReviewHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 100%;

  @media (${mainTheme.deviсe.tablet}) {
  }
`;
