import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const BodyBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const BodyDesk = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (${mainTheme.deviсe.tablet}) {
    flex-direction: column;
  }
`;

export const BodyItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 47%;

  @media (${mainTheme.deviсe.tablet}) {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${mainTheme.colors.colorForm};
  padding: 20px;

  @media (max-width: 650px) {
    padding: 35px 50px 35px 50px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    padding: 30px 45px 30px 45px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    padding: 20px 30px 20px 30px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    padding: 20px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    padding: 10px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const InfoLine = styled.div`
  margin-top: 6px;
  border-bottom: 1px dashed #d3d4dd61;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${mainTheme.colors.colorForm};
  padding: 20px;
  min-height: 180px;
  height: fit-content;

  @media (max-width: 650px) {
    padding: 35px 50px 35px 50px;
    min-height: 150px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    padding: 30px 45px 30px 45px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    padding: 20px 30px 20px 30px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    padding: 20px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    padding: 10px;
  }
`;

export const OtherContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${mainTheme.colors.colorForm};
  padding: 20px;

  @media (max-width: 650px) {
    padding: 35px 50px 35px 50px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    padding: 30px 45px 30px 45px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    padding: 20px 30px 20px 30px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    padding: 20px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    padding: 10px;
  }
`;

export const BodyOther = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const ItemOther = styled.li`
  margin-left: 12px;
  width: 45%;
  line-height: 110%;
  font-size: 14px;
  transition: 0.4s;
  font-weight: 300;
  color: ${mainTheme.colors.white};

  @media (${mainTheme.deviсe.mobileL}) {
    font-size: 14px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    font-size: 12px;
  }
`;
