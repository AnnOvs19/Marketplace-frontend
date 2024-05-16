"use client";

import React, { FC } from "react";
import * as S from "./orderDesktopList.style";
import * as T from "@/styles/baseText.style";
import { IOrderInfo } from "@/interfaces/orders/order";

interface IProps {
  item: IOrderInfo;
}

const OrderDesktopItem: FC<IProps> = ({ item }) => {
  return (
    <S.OrderString>
      <S.OrderElement>
        <T.BasketTitle>{item.productName}</T.BasketTitle>
      </S.OrderElement>
      <S.OrderElement>
        <T.BasketPrice>{item.client}</T.BasketPrice>
      </S.OrderElement>
      <S.OrderElement>
        <T.BasketTitle>{item.sumOrder} руб</T.BasketTitle>
      </S.OrderElement>
      <S.OrderElement>
        <T.BasketPrice>{item.storeName}</T.BasketPrice>
      </S.OrderElement>
      <S.OrderElement>
        <T.BasketTitle>{item.status}</T.BasketTitle>
      </S.OrderElement>
    </S.OrderString>
  );
};

export default OrderDesktopItem;
