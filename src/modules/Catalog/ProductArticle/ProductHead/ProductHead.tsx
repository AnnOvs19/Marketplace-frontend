"use client";

import CardImage from "@/components/CardImage/CardImage";
import React from "react";
import * as S from "./productHead.style";

const ProductHead = () => {
  return (
    <S.HeadBox>
      <CardImage />
      <S.HeadInfo></S.HeadInfo>
    </S.HeadBox>
  );
};

export default ProductHead;
