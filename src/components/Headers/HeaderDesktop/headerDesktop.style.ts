import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 26px;
  align-items: center;

  @media (${mainTheme.deviсe.desktopS}) {
    gap: 24px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    gap: 20px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 18px;
  }
`;

export const CountBasket = styled.span`
  position: absolute;
  right: -11px;
  font-size: 11px;
  font-weight: 300;
  width: 18px;
  height: 20px;
  text-align: center;
  padding: 3px;
  border-radius: 50px;
  color: ${mainTheme.colors.white};
  background-color: ${mainTheme.colors.purple};
`;
