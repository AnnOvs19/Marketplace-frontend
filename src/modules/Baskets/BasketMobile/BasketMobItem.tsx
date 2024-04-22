"use client";

import { ICatalogMock } from "@/modules/Catalog/mockDelCatalog";
import React, { FC } from "react";
import * as S from "./basketMob.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import * as C from "../baskets.style";
import Image from "next/image";

interface IProps {
  item: ICatalogMock;
}

const BasketMobItem: FC<IProps> = ({ item }) => {
  return (
    <S.ItemBox>
      <S.MobItem>
        <C.BasketImage>
          <Image
            src={item.image[0]}
            alt="the main photo of the product"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </C.BasketImage>
        <S.ItemInfo>
          <T.BasketTitle>{item.title}</T.BasketTitle>
          <S.Quantity>
            <B.QuantityButton>-</B.QuantityButton>
            <T.BasketQuantity>{item.quantity}</T.BasketQuantity>
            <B.QuantityButton>+</B.QuantityButton>
          </S.Quantity>
          <T.BasketPrice>Итого: {item.price.toFixed(2)} руб</T.BasketPrice>
        </S.ItemInfo>
      </S.MobItem>
      <B.DeleteButton>Удалить</B.DeleteButton>
    </S.ItemBox>
  );
};

export default BasketMobItem;
