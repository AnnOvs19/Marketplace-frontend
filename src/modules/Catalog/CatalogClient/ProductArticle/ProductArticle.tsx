"use client";

import React from "react";
import ProductHead from "./ProductHead/ProductHead";
import ProductBody from "./ProductBody/ProductBody";
import * as S from "./productArticle.style";

const ProductArticle = () => {
  return (
    <S.ProductWrapper>
      <S.ProductBox>
        <ProductHead />
        <ProductBody />
      </S.ProductBox>
    </S.ProductWrapper>
  );
};

export default ProductArticle;
