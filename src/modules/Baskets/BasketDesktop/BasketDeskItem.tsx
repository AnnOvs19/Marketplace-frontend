"use client";

import { ICatalogMock } from "@/modules/Catalog/mockDelCatalog";
import React, { FC } from "react";
import * as S from "./basketDesk.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import * as C from "../baskets.style";
import Image from "next/image";

interface IProps {
  item: ICatalogMock;
}

const BasketDeskItem: FC<IProps> = ({ item }) => {
  return (
    <S.TableString>
      <S.BodyElement>
        <C.BasketImage>
          <Image
            src={item.image}
            alt="the main photo of the product"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </C.BasketImage>
        <T.TextMedium>{item.title}</T.TextMedium>
      </S.BodyElement>
      <S.BodyElement>{item.price.toFixed(2)}</S.BodyElement>
      <S.BodyElement>
        <B.QuantityButton>-</B.QuantityButton>
        <T.TextMedium>{item.quantity}</T.TextMedium>
        <B.QuantityButton>+</B.QuantityButton>
      </S.BodyElement>
      <S.BodyElement>{item.price.toFixed(2)}</S.BodyElement>
      <S.BodyElement></S.BodyElement>
    </S.TableString>
  );
};

export default BasketDeskItem;
