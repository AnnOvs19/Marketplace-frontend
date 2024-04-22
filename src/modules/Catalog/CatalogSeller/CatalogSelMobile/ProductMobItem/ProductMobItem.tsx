"use client";

import { ICatalogMock } from "@/modules/Catalog/mockDelCatalog";
import React, { FC } from "react";
import * as S from "../ProductMobList/productMobList.style";
import * as C from "../../catalogSeller.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import Image from "next/image";

interface IProps {
  item: ICatalogMock;
}

const ProductMobItem: FC<IProps> = ({ item }) => {
  return (
    <S.ProductMobBox>
      <S.ProductMobItem>
        <C.ProductImage>
          <Image
            src={item.image[0]}
            alt="the main photo of the product"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </C.ProductImage>
        <S.ProductItemInfo>
          <T.BasketTitle>{item.title}</T.BasketTitle>
          <T.BasketPrice>№{item.id}</T.BasketPrice>
          <T.BasketTitle>Категория: {item.category}</T.BasketTitle>
          <T.BasketPrice>Цена: {item.price.toFixed(2)} руб</T.BasketPrice>
        </S.ProductItemInfo>
      </S.ProductMobItem>
      <B.EditButton>Редактировать</B.EditButton>
      <B.DeleteButton>Удалить</B.DeleteButton>
    </S.ProductMobBox>
  );
};

export default ProductMobItem;
