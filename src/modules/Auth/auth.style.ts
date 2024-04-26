import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

interface IProps {
  openTab?: boolean;
}

export const AuthContainer = styled.div`
  margin: 0 auto;
  margin-top: 250px;
  position: relative;
  z-index: 150;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.desktopS}) {
    margin-top: 210px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    margin-top: 250px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    margin-top: 210px;
  }
`;

export const AuthWrap = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: 150;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${mainTheme.colors.colorForm};
  box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  height: auto;
  width: 30%;

  @media (${mainTheme.deviсe.desktopM}) {
    width: 40%;
  }

  @media (${mainTheme.deviсe.desktopS}) {
    width: 45%;
  }

  @media (${mainTheme.deviсe.laptopL}) {
    width: 50%;
    gap: 15px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    width: 55%;
  }

  @media (max-width: 870px) {
    width: 65%;
  }

  @media (${mainTheme.deviсe.tablet}) {
    width: 70%;
  }

  @media (max-width: 650px) {
    width: 75%;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    width: 80%;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    width: 90%;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    width: 95%;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    width: 98%;
  }
`;

export const AuthHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const HeadButton = styled.button<IProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.openTab ? "#030303" : "transparent")};
  color: ${mainTheme.colors.extraLightPurple};
  border: none;
  padding: 35px 45px;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    color: ${mainTheme.colors.lightPurple};
  }

  @media (${mainTheme.deviсe.laptopL}) {
    font-size: 18px;
  }

  @media (${mainTheme.deviсe.tablet}) {
    font-size: 16px;
    padding: 28px 40px;
  }

  @media (${mainTheme.deviсe.mobileXL}) {
    font-size: 15px;
    padding: 23px 35px;
  }

  @media (${mainTheme.deviсe.mobileM}) {
    font-size: 14px;
    padding: 20px 30px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    font-size: 14px;
    padding: 19px 25px;
  }

  @media (${mainTheme.deviсe.mobileXS}) {
    font-size: 13px;
    padding: 18px 22px;
  }
`;

export const AuthBody = styled.div`
  padding: 2px 30px 30px 30px;
  /* display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 18px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 14px;
  } */
`;

export const BottomAuth = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (${mainTheme.deviсe.mobileXL}) {
    gap: 10px;
    flex-direction: column;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 18px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 14px;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 18px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 14px;
  }
`;

export const StepRegister1 = styled.div<{ step: number }>`
  display: ${(props) => (props.step === 1 ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 18px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 14px;
  }
`;

export const StepRegister2 = styled.div<{ step: number }>`
  display: ${(props) => (props.step === 2 ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;

  @media (${mainTheme.deviсe.laptopL}) {
    gap: 18px;
  }

  @media (${mainTheme.deviсe.mobileL}) {
    gap: 16px;
  }

  @media (${mainTheme.deviсe.mobileS}) {
    gap: 14px;
  }
`;
