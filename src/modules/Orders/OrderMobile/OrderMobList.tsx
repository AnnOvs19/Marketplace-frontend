"use client";

import React, { FC, useState } from "react";
import { mockDelOrder } from "../mockDelOrder";
import OrderMobItem from "./OrderMobItem";
import * as S from "./orderMobList.style";
import { IOrderInfo } from "@/interfaces/orders/order";

interface IProps {
  orders: IOrderInfo[];
}

const OrderMobList: FC<IProps> = ({ orders }) => {
  const [ordersNew, setOrdersNew] = useState<IOrderInfo[]>(
    orders.sort((a, b) => b.id - a.id)
  );
  return (
    <S.OrderContainer>
      {ordersNew?.map((item, index) => {
        return <OrderMobItem item={item} key={index} />;
      })}
    </S.OrderContainer>
  );
};

export default OrderMobList;
