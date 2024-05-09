"use client";

import StyledComponentsRegistry from "@/app/registry";
import { mainTheme } from "@/styles/mainTheme.style";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ThemeProvider } from "styled-components";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={mainTheme}>
        <SessionProvider>{props.children} </SessionProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
