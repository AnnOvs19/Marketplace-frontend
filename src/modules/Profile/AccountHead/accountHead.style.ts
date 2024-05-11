import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const HeadAccount = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 45px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 20px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    gap: 20px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    gap: 15px;
  }
`;

export const AvatarSeller = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 250px;
  border: 1px solid ${mainTheme.colors.lightGray};
  position: relative;
  overflow: hidden;

  @media (${mainTheme.deviсe.desktopS}) {
    width: 200px;
    height: 200px;
    border-radius: 220px;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 180px;
    height: 180px;
    border-radius: 200px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 160px;
    height: 160px;
    border-radius: 180px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 140px;
    height: 140px;
    border-radius: 160px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 120px;
    height: 120px;
    border-radius: 140px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 100px;
    height: 100px;
    border-radius: 120px;
  }
`;

export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 9px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    gap: 8px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 7px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    gap: 6px;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
