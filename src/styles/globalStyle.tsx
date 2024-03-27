"use client";

import { createGlobalStyle } from "styled-components";

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
  justify-content: center;
  background-color: 'white';
  font-family: "Lato", sans-serif;
}

a {
        cursor: pointer;
        text-decoration: none;
    }


    button {
        cursor: pointer;
        
    }
`;
