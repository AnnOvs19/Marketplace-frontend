"use client";

import React, { FC } from "react";
import ProductHead from "./ProductHead/ProductHead";
import ProductBody from "./ProductBody/ProductBody";
import * as S from "./productArticle.style";
import { mockDelCatalog } from "../mockDelCatalog";
import ProductReviews from "./ProductReviews/ProductReviews";
import { IProduct } from "@/interfaces/product/product";
import { IReview } from "@/interfaces/product/review";

interface IProps {
  product: IProduct;
  reviews: IReview[];
}

const ProductArticle: FC<IProps> = ({ product, reviews }) => {
  // const product = mockDelCatalog[0];
  return (
    <S.ProductWrapper>
      <S.ProductBox>
        <ProductHead product={product} />
        <ProductBody product={product} />
        <ProductReviews reviews={reviews} />
      </S.ProductBox>
    </S.ProductWrapper>
  );
};

export default ProductArticle;
