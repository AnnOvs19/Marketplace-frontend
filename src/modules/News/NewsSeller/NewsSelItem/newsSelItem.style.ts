import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const ItemNewsSel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${mainTheme.colors.gray};
  background-color: #0d09128d;
  backdrop-filter: blur(35px);
  width: 345px;
  height: 450px;
  &:hover {
    box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 300px;
    height: 405px;
  }

  @media (max-width: 1340px) {
    width: 240px;
    height: 380px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 220px;
    height: 380px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 200px;
    height: 360px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 47%;
    height: 428px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    height: 398px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    height: 378px;
    width: 100%;
  }
`;

export const ItemSelBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 20px;
  width: 100%;

  @media (${mainTheme.deviсe.laptopL}) {
    padding: 15px;
  }

  @media (max-width: 1340px) {
    padding: 10px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    padding: 5px;
  }
`;

export const SelNewsImage = styled.div`
  position: relative;
  width: 99%;
  margin: 1px;
  height: 220px;

  @media (${mainTheme.deviсe.laptopL}) {
    height: 190px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 240px;
  }
`;

export const ButtonBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;

  @media (${mainTheme.deviсe.laptopS}) {
    flex-direction: column;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    flex-direction: row;
  }
`;
