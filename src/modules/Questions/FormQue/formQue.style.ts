import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const FormQueWraper = styled.article`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: red;
  height: 380px;
  width: 50%;
  padding: 25px;

  @media (${mainTheme.deviсe.laptopL}) {
    width: 60%;
    height: 337px;
    margin-right: 40px;
  }

  @media (${mainTheme.deviсe.laptopS}) {
    margin-right: 20px;
  }

  @media (max-width: 975px) {
    margin-right: 0px;
  }

  @media (max-width: 870px) {
    align-items: center;
    margin-left: 0px;
    width: 85%;
  }
`;