"use client";

import { ISizeDevice } from "@/interfaces/themes";

const size: ISizeDevice = {
  mobileXS: "280px",
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileXL: "550px",
  tablet: "768px",
  laptopS: "1024px",
  laptopM: "1280px",
  laptopL: "1440px",
  desktopS: "1680px",
  desktopM: "1920px"
};

export const mainTheme = {
  colors: {
    extraDarkPurple: "#27043d",
    darkPurple: "#3d0361",
    purple: "#59078c",
    lightPurple: "#8b42b8",
    extraLightPurple: "#c18ae3",

    extraDarkGreen: "#043d3d",
    darkGreen: "#026161",
    green: "#0a948b",
    lightGreen: "#46bdb5",
    extraLightGreen: "#8ae3dd",

    white: "#ffffff",
    lightGray: "#808080",
    gray: "#404040",
    black: "#000000",

    colorBody: "#050505",
    colorForm: "#0e0d10"
  },

  deviсe: {
    mobileXS: `max-width: ${size.mobileXS}`,
    mobileS: `max-width: ${size.mobileS}`,
    mobileM: `max-width: ${size.mobileM}`,
    mobileL: `max-width: ${size.mobileL}`,
    mobileXL: `max-width: ${size.mobileXL}`,
    tablet: `max-width: ${size.tablet}`,
    laptopS: `max-width: ${size.laptopS}`,
    laptopM: `max-width: ${size.laptopM}`,
    laptopL: `max-width: ${size.laptopL}`,
    desktopS: `max-width: ${size.desktopS}`,
    desktopM: `max-width: ${size.desktopM}`
  }
};
