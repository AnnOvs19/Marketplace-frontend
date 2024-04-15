import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

interface IProps {
  openFilter: boolean;
}

export const FilterMenuWrap = styled.div<IProps>`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.496);
  position: fixed;
  z-index: 220;
  top: 0;
  left: 0;
  transition: 0.5s;
  opacity: ${(props) => (props.openFilter ? 1 : 0)};
  pointer-events: ${(props) => (props.openFilter ? "all" : "none")};
`;

export const FilterContent = styled.aside`
  height: 100vh;
  width: 500px;
  padding: 100px 35px;
  background-color: ${mainTheme.colors.colorForm};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  @media (${mainTheme.deviсe.laptopS}) {
    width: 300px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    height: 585px;
    width: 100%;
    padding: 50px 20px;
    gap: 30px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    height: 545px;
  }
`;

export const ContentList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopS}) {
    gap: 15px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    gap: 11px;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 6px;
`;
