"use client";

import StyledComponentsRegistry from "@/app/registry";
import { mainTheme } from "@/styles/mainTheme.style";
import React from "react";
import { ThemeProvider } from "styled-components";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={mainTheme}>{props.children} </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
