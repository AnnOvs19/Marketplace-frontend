"use client";

import CardImage from "@/components/CardImage/CardImage";
import React, { FC } from "react";
import * as S from "./productHead.style";
import * as T from "@/styles/baseText.style";
import { ICatalogMock } from "../../mockDelCatalog";
import * as I from "@/styles/baseIcons.style";
import like from "@/assets/icons/likeProductIcon.svg";
import reviews from "@/assets/icons/reviewsProductIcon.svg";
import Image from "next/image";
import { BaseButton } from "@/styles/baseButtons.style";

interface IProps {
  product: ICatalogMock;
}

const ProductHead: FC<IProps> = ({ product }) => {
  return (
    <S.HeadBox>
      <CardImage />
      <S.HeadInfo>
        <T.TitleProduct>{product.title}</T.TitleProduct>
        <S.CommonInfo>
          <S.CategoryBox>
            <T.SmallText>Артикул: {product.id}</T.SmallText>
            <T.SmallText>Категория: {product.category}</T.SmallText>
          </S.CategoryBox>
          <S.CategoryBox>
            <S.LikeBox>
              <I.LikeIcon>
                <Image
                  src={like}
                  alt=""
                  fill
                  style={{
                    objectFit: "contain"
                  }}
                />
              </I.LikeIcon>
              <T.SmallText>{product.like} оценок</T.SmallText>
            </S.LikeBox>
            <S.LikeBox>
              <I.LikeIcon>
                <Image
                  src={reviews}
                  alt=""
                  fill
                  style={{
                    objectFit: "contain"
                  }}
                />
              </I.LikeIcon>
              <T.SmallText>{product.reviews?.length} отзывов</T.SmallText>
            </S.LikeBox>
          </S.CategoryBox>
        </S.CommonInfo>
        <S.PriceBox>
          <T.InfoProduct>
            Количество на складе: {product.sumInStock}шт
          </T.InfoProduct>
          <T.InfoProduct>Стоимость: {product.price}руб</T.InfoProduct>
        </S.PriceBox>
        <BaseButton>Добавить в корзину</BaseButton>
      </S.HeadInfo>
    </S.HeadBox>
  );
};

export default ProductHead;