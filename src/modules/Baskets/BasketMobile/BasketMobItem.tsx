"use client";

import { ICatalogMock } from "@/modules/Catalog/mockDelCatalog";
import React, { FC } from "react";
import * as S from "./basketMob.style";
import * as C from "../baskets.style";
import Image from "next/image";
import { DeleteButton, QuantityButton } from "@/styles/baseButtons.style";
import { BasketTitle } from "@/styles/baseTitle.style";
import { BasketPrice, BasketQuantity } from "@/styles/baseText.style";

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
          <BasketTitle>{item.title}</BasketTitle>
          <S.Quantity>
            <QuantityButton>-</QuantityButton>
            <BasketQuantity>{item.quantity}</BasketQuantity>
            <QuantityButton>+</QuantityButton>
          </S.Quantity>
          <BasketPrice>Итого: {item.price.toFixed(2)} руб</BasketPrice>
        </S.ItemInfo>
      </S.MobItem>
      <DeleteButton>Удалить</DeleteButton>
    </S.ItemBox>
  );
};

export default BasketMobItem;
