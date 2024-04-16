import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const OrderContainer = styled.div`
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

export const OrderItem = styled.div`
  padding: 20px;
  background-color: #161616;
  border: 1px solid ${mainTheme.colors.gray};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 12px;
  }
`;
