"use client";

import { ISizeDevice } from "@/interfaces/themes";

const size: ISizeDevice = {
  mobileXS: "281px",
  mobileS: "321px",
  mobileM: "376px",
  mobileL: "426px",
  mobileXL: "551px",
  tablet: "769px",
  laptopS: "1025px",
  laptopM: "1281px",
  laptopL: "1441px",
  desktopS: "1681px",
  desktopM: "1921px"
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
    lightGray: "#c5c5c5",
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
