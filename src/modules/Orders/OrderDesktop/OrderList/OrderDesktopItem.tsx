"use client";

import React, { FC } from "react";
import * as S from "./orderDesktopList.style";
import { IOrderInfo } from "@/interfaces/orders/order";
import { BasketPrice } from "@/styles/baseText.style";
import { BasketTitle } from "@/styles/baseTitle.style";

interface IProps {
  item: IOrderInfo;
}

const OrderDesktopItem: FC<IProps> = ({ item }) => {
  return (
    <S.OrderString>
      <S.OrderElement>
        <BasketTitle>{item.productName}</BasketTitle>
      </S.OrderElement>
      <S.OrderElement>
        <BasketPrice>{item.client}</BasketPrice>
      </S.OrderElement>
      <S.OrderElement>
        <BasketTitle>{item.sumOrder} руб</BasketTitle>
      </S.OrderElement>
      <S.OrderElement>
        <BasketPrice>{item.storeName}</BasketPrice>
      </S.OrderElement>
      <S.OrderElement>
        <BasketTitle>{item.status}</BasketTitle>
      </S.OrderElement>
    </S.OrderString>
  );
};

export default OrderDesktopItem;
