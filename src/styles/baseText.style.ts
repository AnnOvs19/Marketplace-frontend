import styled from "styled-components";
import { mainTheme } from "./mainTheme.style";

export const MainTitle = styled.h1`
  text-align: center;
  font-size: 35px;
  color: ${mainTheme.colors.black};
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 35px;
  color: black;
`;

export const SubTitle = styled.h4`
  text-align: center;
  font-size: 35px;
  color: black;
`;

export const TextMedium = styled.p`
  font-size: 16px;
  transition: 0.4s;
  font-weight: 400;
  color: black;
`;

export const SmallText = styled.span`
  font-size: 16px;
  transition: 0.4s;
  font-weight: 400;
  color: black;
`;
