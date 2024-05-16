"use client";

import React, { FC } from "react";
import * as S from "./productReviews.style";
import CreateReviews from "./CreateReviews/CreateReviews";
import { IReview } from "@/interfaces/product/review";
import { TitleSection } from "@/styles/baseTitle.style";
import { DeskKey, ReviewText } from "@/styles/baseText.style";

interface IProps {
  reviews: IReview[];
}

const ProductReviews: FC<IProps> = ({ reviews }) => {
  return (
    <S.ReviewBox>
      <TitleSection>Отзывы</TitleSection>
      <S.ReviewContainer>
        <S.ReviewList>
          {reviews?.map((item) => {
            return (
              <S.ReviewItem>
                <DeskKey>{item.client.username}</DeskKey>
                <ReviewText>{item.text}</ReviewText>
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
