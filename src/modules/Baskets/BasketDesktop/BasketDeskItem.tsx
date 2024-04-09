"use client";

import { ICatalogMock } from "@/modules/Catalog/mockDelCatalog";
import React, { FC } from "react";
import * as S from "./basketDesk.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import * as I from "@/styles/baseIcons.style";
import * as C from "../baskets.style";
import Image from "next/image";
import deleteBasket from "@/assets/icons/deleteBasket.svg";

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
        <T.BasketTitle>{item.title}</T.BasketTitle>
      </S.BodyElement>
      <S.BodyElement>
        <T.BasketPrice>{item.price.toFixed(2)} руб</T.BasketPrice>
      </S.BodyElement>
      <S.BodyElement>
        <B.QuantityButton>-</B.QuantityButton>
        <T.TextMedium>{item.quantity}</T.TextMedium>
        <B.QuantityButton>+</B.QuantityButton>
      </S.BodyElement>
      <S.BodyElement>
        <T.BasketPrice>{item.price.toFixed(2)} руб</T.BasketPrice>
      </S.BodyElement>

      <S.BodyElement>
        <I.DeleteIcon>
          <Image
            src={deleteBasket}
            alt="The page with the shopping cart"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </I.DeleteIcon>
      </S.BodyElement>
    </S.TableString>
  );
};

export default BasketDeskItem;
