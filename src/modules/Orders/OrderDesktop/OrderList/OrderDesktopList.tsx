"use client";

import React, { FC, useState } from "react";
import * as S from "./orderDesktopList.style";
import { mockDelOrder } from "../../mockDelOrder";
import OrderDesktopItem from "./OrderDesktopItem";
import { IOrderInfo } from "@/interfaces/orders/order";

interface IProps {
  orders: IOrderInfo[];
}

const OrderDesktopList: FC<IProps> = ({ orders }) => {
  const [ordersNew, setOrdersNew] = useState<IOrderInfo[]>(
    orders.sort((a, b) => b.id - a.id)
  );
  return (
    <S.OrderDesktop>
      <S.OrderBody>
        {ordersNew?.map((item, index) => {
          return <OrderDesktopItem item={item} key={index} />;
        })}
      </S.OrderBody>
    </S.OrderDesktop>
  );
};

export default OrderDesktopList;
