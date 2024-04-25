import { mainTheme } from "@/styles/mainTheme.style";
import styled from "styled-components";

export const InputFile = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Label = styled.label`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
`;
