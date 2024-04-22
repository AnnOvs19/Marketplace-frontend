"use client";

import React from "react";
import ProductHead from "./ProductHead/ProductHead";
import ProductBody from "./ProductBody/ProductBody";
import * as S from "./productArticle.style";
import { mockDelCatalog } from "../mockDelCatalog";

const ProductArticle = () => {
  const product = mockDelCatalog[0];
  return (
    <S.ProductWrapper>
      <S.ProductBox>
        <ProductHead product={product} />
        <ProductBody />
      </S.ProductBox>
    </S.ProductWrapper>
  );
};

export default ProductArticle;
