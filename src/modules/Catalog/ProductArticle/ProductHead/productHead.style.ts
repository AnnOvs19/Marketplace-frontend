import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const HeadBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 40px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 30px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 15px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    flex-direction: column;
    gap: 25px;
    width: 100%;
  }
`;

export const HeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 80%;
    margin: 0 auto;
    gap: 18px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 85%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 90%;
    gap: 15px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 95%;
  }
`;

export const CommonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (${mainTheme.deviсe.mobileS}) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (${mainTheme.deviсe.laptopS}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
`;
