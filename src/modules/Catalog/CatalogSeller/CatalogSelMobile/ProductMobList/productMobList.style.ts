import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const ProductContainer = styled.div`
  display: none;
  @media (max-width: 636px) {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 100%;
  }
`;

export const ProductMobBox = styled.div`
  padding: 0;
  background-color: #161616;
  border: 1px solid ${mainTheme.colors.gray};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductMobItem = styled.div`
  padding: 15px 15px 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media (${mainTheme.deviсe.mobileL}) {
    padding: 12px 12px 0 0;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    gap: 10px;
  }
`;

export const ProductItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 5px;

  @media (${mainTheme.deviсe.mobileL}) {
    padding-top: 1px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    gap: 12px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 10px;
  }
`;
