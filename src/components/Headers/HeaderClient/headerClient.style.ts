import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";
// import css from "styled-jsx/css";

interface IPropMenu {
  activeMenu?: boolean;
}

export const HeaderWraper = styled.header`
  padding: 12px 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${mainTheme.colors.gray};

  @media (${mainTheme.deviсe.desktopS}) {
    padding: 10px 50px;
  }

  @media (${mainTheme.deviсe.laptopM}) {
    padding: 10px 30px;
    height: 60px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    padding: 10px 20px;
  }
`;

export const HeaderBox = styled.div`
  width: 1850px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

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

export const MenuButon = styled.button<IPropMenu>`
  display: none;
  position: relative;
  border: none;
  background: transparent;
  width: 40px;
  height: 26px;

  &::before,
  &::after {
    content: "";
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 7px;
    background: (${mainTheme.colors.white});
  }

  &::before {
    top: 0;
    box-shadow: 0 11px 0 #5967d1;
    transition:
      box-shadow 0.3s 0.15s,
      top 0.3s 0.15s,
      transform 0.3s;
  }

  &::after {
    bottom: 0;
    transition:
      bottom 0.3s 0.15s,
      transform 0.3s;
  }
`;

// const startBefore = css`
//   top: 0;
//     box-shadow: 0 11px 0 (${mainTheme.colors.white});
//     transition:
//       box-shadow 0.3s 0.15s,
//       top 0.3s 0.15s,
//       transform 0.3s;
// `;

// const startAfter = css`
//   top: 0;
//     box-shadow: 0 11px 0 (${mainTheme.colors.white});
//     transition:
//       box-shadow 0.3s 0.15s,
//       top 0.3s 0.15s,
//       transform 0.3s;
// `;

// const activeBefore = css`
//   top: 11px;
//   transform: rotate(45deg);
//   box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
//   transition:
//     box-shadow 0.15s,
//     top 0.3s,
//     transform 0.3s 0.15s;
// `;

// const activeAfter = css`
//   bottom: 11px;
//   transform: rotate(-45deg);
//   transition:
//     bottom 0.3s,
//     transform 0.3s 0.15s;
// `;
