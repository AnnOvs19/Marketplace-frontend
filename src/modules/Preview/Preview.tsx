"use client";

import React from "react";
import * as S from "./preview.style";

import Image from "next/image";
import phones from "@/assets/images/preview.png";

const Preview = () => {
  return (
    <S.PreviewWraper>
      <S.PreviewBacground>
        <S.Circle1 />
        <S.Circle2 />
        <S.Circle3 />
        <S.Circle4 />
        <S.Circle5 />
      </S.PreviewBacground>
      <S.PreviewBox></S.PreviewBox>
    </S.PreviewWraper>
  );
};

export default Preview;
