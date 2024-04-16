"use client";

import React, { FC } from "react";
import { IOrderMock } from "../../mockDelOrder";
import * as S from "./orderDesktopList.style";
import * as T from "@/styles/baseText.style";

interface IProps {
  item: IOrderMock;
}

const OrderDesktopItem: FC<IProps> = ({ item }) => {
  return (
    <S.OrderString>
      <S.OrderElement>
        <T.BasketPrice>№{item.id}</T.BasketPrice>
      </S.OrderElement>
      <S.OrderElement>
        <T.BasketTitle>{item.client}</T.BasketTitle>
      </S.OrderElement>
      <S.OrderElement>
        <T.BasketPrice>{item.price} руб</T.BasketPrice>
      </S.OrderElement>
      <S.OrderElement>
        <T.BasketTitle>{item.seller}</T.BasketTitle>
      </S.OrderElement>
      <S.OrderElement>
        <T.BasketPrice>{item.status}</T.BasketPrice>
      </S.OrderElement>
    </S.OrderString>
  );
};

export default OrderDesktopItem;
