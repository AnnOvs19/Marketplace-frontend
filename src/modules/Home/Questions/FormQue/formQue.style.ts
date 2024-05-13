import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const FormQueWraper = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${mainTheme.colors.colorForm};
  box-shadow: 0px 0px 26px 5px ${mainTheme.colors.darkPurple};
  height: auto;
  width: 50%;
  padding: 30px;
  margin-bottom: 20px;

  @media (${mainTheme.deviсe.laptopL}) {
    width: 60%;
    margin-right: 40px;
    gap: 15px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    margin-right: 20px;
  }

  @media (max-width: 975px) {
    margin-right: 0px;
  }

  @media (max-width: 870px) {
    margin-left: 0px;
    width: 85%;
    gap: 10px;
    padding: 20px;
  }
`;
