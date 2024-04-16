"use client";

import React, { FC } from "react";
import { IOrderMock } from "../mockDelOrder";
import * as S from "./orderMobList.style";
import * as T from "@/styles/baseText.style";

interface IProps {
  item: IOrderMock;
}

const OrderMobItem: FC<IProps> = ({ item }) => {
  return (
    <S.OrderItem>
      <T.BasketPrice>Номер заказа:{item.id}</T.BasketPrice>
      <T.BasketTitle>Покупатель: {item.client}</T.BasketTitle>
      <T.BasketPrice>Цена: {item.price} руб</T.BasketPrice>
      <T.BasketTitle>Продавец: {item.seller}</T.BasketTitle>
      <T.BasketPrice>{item.status}</T.BasketPrice>
    </S.OrderItem>
  );
};

export default OrderMobItem;
