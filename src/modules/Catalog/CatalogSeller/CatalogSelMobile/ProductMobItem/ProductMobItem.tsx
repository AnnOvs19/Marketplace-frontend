"use client";

import React, { FC } from "react";
import * as S from "../ProductMobList/productMobList.style";
import * as C from "../../catalogSeller.style";
import Image from "next/image";
import { DeleteButton, EditButton } from "@/styles/baseButtons.style";
import { IProduct } from "@/interfaces/product/product";
import { LoaderImage } from "@/helpers/loaderImage";
import { BasketPrice, BasketTitle } from "@/styles/baseText.style";

interface IProps {
  item: IProduct;
}

const ProductMobItem: FC<IProps> = ({ item }) => {
  console.log(item);

  return (
    <S.ProductMobBox>
      <S.ProductMobItem>
        <C.ProductImage>
          <Image
            loader={LoaderImage}
            src={item.image[0]?.url}
            alt="the main photo of the product"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </C.ProductImage>
        <S.ProductItemInfo>
          <BasketTitle>{item.title}</BasketTitle>
          <BasketPrice>№{item.id}</BasketPrice>
          <BasketPrice>Категория: {item.category.title}</BasketPrice>
          <BasketTitle>Цена: {item.price.toFixed(2)} руб</BasketTitle>
        </S.ProductItemInfo>
      </S.ProductMobItem>
      <EditButton>Редактировать</EditButton>
      <DeleteButton>Удалить</DeleteButton>
    </S.ProductMobBox>
  );
};

export default ProductMobItem;
