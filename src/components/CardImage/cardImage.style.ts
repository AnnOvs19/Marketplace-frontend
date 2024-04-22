import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 10px;
  }

  @media (max-width: 860px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 20px;
  }
`;
