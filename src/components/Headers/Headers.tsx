"use client";

import React from "react";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import axios from "@/helpers/axios";

const Headers = () => {
  const res = axios
    .get("http://127.0.0.1:1337/api/users/me", {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") || "")}`
      }
    })
    .then((res) => console.log(res));

  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
};

export default Headers;
