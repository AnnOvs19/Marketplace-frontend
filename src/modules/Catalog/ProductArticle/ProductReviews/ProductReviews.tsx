"use client";

import React, { FC } from "react";
import { ICatalogMock } from "../../mockDelCatalog";
import * as S from "./productReviews.style";
import * as T from "@/styles/baseText.style";
import CreateReviews from "./CreateReviews/CreateReviews";

interface IProps {
  product: ICatalogMock;
}

const ProductReviews: FC<IProps> = ({ product }) => {
  return (
    <S.ReviewBox>
      <T.TitleSection>Отзывы</T.TitleSection>
      <S.ReviewContainer>
        <S.ReviewList>
          {product.reviews?.map((item) => {
            return (
              <S.ReviewItem>
                <T.DeskKey>{item.user}</T.DeskKey>
                <T.DeskValue>{item.text}</T.DeskValue>
              </S.ReviewItem>
            );
          })}
        </S.ReviewList>
        <CreateReviews />
      </S.ReviewContainer>
    </S.ReviewBox>
  );
};

export default ProductReviews;
