"use client";

import React, { FC } from "react";
import { ICatalogMock } from "../../mockDelCatalog";
import * as S from "./catalogItem.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import Image from "next/image";

interface IProps {
  item: ICatalogMock;
}

const CatalogItem: FC<IProps> = ({ item }) => {
  return (
    <S.CardItem>
      <S.CardItemImage>
        <Image
          src={item.image[0]}
          alt="Product card image"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </S.CardItemImage>
      <S.CardItemBox>
        <T.CardTitle>{item.title}</T.CardTitle>
        <T.CardPrice>{item.price} руб</T.CardPrice>
        <S.CardBottom>
          <T.CardOtherText>{item.category}</T.CardOtherText>
          <T.CardOtherText>{item.sumInStock} шт.</T.CardOtherText>
        </S.CardBottom>
        <B.CardButton>В корзину</B.CardButton>
      </S.CardItemBox>
    </S.CardItem>
  );
};

export default CatalogItem;
