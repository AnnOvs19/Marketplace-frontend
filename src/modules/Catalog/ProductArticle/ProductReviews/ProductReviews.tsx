"use client";

import React, { FC } from "react";
import { ICatalogMock } from "../../mockDelCatalog";
import * as S from "./productReviews.style";
import * as T from "@/styles/baseText.style";
import CreateReviews from "./CreateReviews/CreateReviews";
import { IProduct } from "@/interfaces/product/product";
import { IReview } from "@/interfaces/product/review";

interface IProps {
  reviews: IReview[];
}

const ProductReviews: FC<IProps> = ({ reviews }) => {
  console.log(reviews);

  return (
    <S.ReviewBox>
      <T.TitleSection>Отзывы</T.TitleSection>
      <S.ReviewContainer>
        <S.ReviewList>
          {reviews?.map((item) => {
            return (
              <S.ReviewItem>
                <T.DeskKey>{item.client.username}</T.DeskKey>
                <T.ReviewText>{item.text}</T.ReviewText>
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
