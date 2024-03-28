"use client";

import { createGlobalStyle } from "styled-components";
import { mainTheme } from "./mainTheme.style";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${mainTheme.colors.colorBody};
  font-family: "Lato", sans-serif;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}

a {
        cursor: pointer;
        text-decoration: none;
        transition: 0.4s;
    }


    button {
        cursor: pointer;
        display: flex;
        transition: 0.4s;
    }
`;
