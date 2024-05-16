"use client";

import React, { FC } from "react";
import * as S from "./orderMobList.style";
import * as T from "@/styles/baseText.style";
import { IOrderInfo } from "@/interfaces/orders/order";

interface IProps {
  item: IOrderInfo;
}

const OrderMobItem: FC<IProps> = ({ item }) => {
  return (
    <S.OrderItem>
      <T.BasketTitle>Название:{item.productName}</T.BasketTitle>
      <T.BasketPrice>Покупатель: {item.client}</T.BasketPrice>
      <T.BasketTitle>Цена: {item.sumOrder} руб</T.BasketTitle>
      <T.BasketPrice>Продавец: {item.storeName}</T.BasketPrice>
      <T.BasketTitle>{item.status}</T.BasketTitle>
    </S.OrderItem>
  );
};

export default OrderMobItem;
