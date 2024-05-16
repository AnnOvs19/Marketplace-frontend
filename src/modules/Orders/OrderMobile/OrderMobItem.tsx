"use client";

import React, { FC } from "react";
import * as S from "./orderMobList.style";
import { IOrderInfo } from "@/interfaces/orders/order";
import { BasketPrice } from "@/styles/baseText.style";
import { BasketTitle } from "@/styles/baseTitle.style";

interface IProps {
  item: IOrderInfo;
}

const OrderMobItem: FC<IProps> = ({ item }) => {
  return (
    <S.OrderItem>
      <BasketTitle>Название:{item.productName}</BasketTitle>
      <BasketPrice>Покупатель: {item.client}</BasketPrice>
      <BasketTitle>Цена: {item.sumOrder} руб</BasketTitle>
      <BasketPrice>Продавец: {item.storeName}</BasketPrice>
      <BasketTitle>{item.status}</BasketTitle>
    </S.OrderItem>
  );
};

export default OrderMobItem;
