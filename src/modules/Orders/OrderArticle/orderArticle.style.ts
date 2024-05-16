import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const OrderArticleWrap = styled.article`
  overflow: hidden;
  max-width: 1405px;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 150px;
  position: relative;
  z-index: 15;

  @media (${mainTheme.deviсe.laptopL}) {
    max-width: 100%;
    width: 100%;
    margin-top: 120px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    margin-top: 80px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    margin-top: 60px;
  }

  @media (max-width: 636px) {
    margin-top: 110px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 150px;
    max-width: 90%;
    width: 90%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    margin-top: 135px;
    max-width: 95%;
    width: 95%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    margin-top: 90px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    margin-top: 80px;
  }
`;

export const OrderList = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media (${mainTheme.deviсe.tablet}) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 636px) {
    margin: 20px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin: 0px;
    gap: 10px;
  }
`;

export const OrderInfo = styled.section`
  width: 46%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${mainTheme.colors.colorForm};
  box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  height: auto;
  padding: 30px;
  margin-bottom: 10px;

  @media (${mainTheme.deviсe.tablet}) {
    width: 80%;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 90%;
    padding: 20px;
    margin-bottom: 5px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 95%;
    margin-bottom: 0px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    padding: 15px;
    width: 98%;
  }
`;

export const OrderString = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const OrderPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid ${mainTheme.colors.lightGray};
`;

export const HeadProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  @media (${mainTheme.deviсe.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageProduct = styled.div`
  width: 25%;
  height: 80px;
  position: relative;

  @media (${mainTheme.deviсe.desktopS}) {
    width: 30%;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    width: 40%;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 70%;
  }

  @media (max-width: 850px) {
    width: 100%;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 80%;
    height: 260px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 90%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 100%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    height: 230px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    height: 200px;
  }
`;
