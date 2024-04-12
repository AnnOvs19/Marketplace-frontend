import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const BasketContainer = styled.div`
  padding: 18px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (${mainTheme.deviсe.mobileL}) {
    padding: 8px;
  }
`;

export const ItemBox = styled.div`
  padding: 0;
  background-color: #161616;
  border: 1px solid ${mainTheme.colors.gray};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MobItem = styled.div`
  padding: 18px 18px 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media (${mainTheme.deviсe.mobileL}) {
    padding: 10px 10px 0 0;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    gap: 10px;
  }
`;

export const ItemInfo = styled.div`
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

export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
