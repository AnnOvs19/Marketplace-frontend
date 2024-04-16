"use client";

import React from "react";
import * as S from "./orderDesktopList.style";
import { mockDelOrder } from "../../mockDelOrder";
import OrderDesktopItem from "./OrderDesktopItem";

const OrderDesktopList = () => {
  return (
    <S.OrderDesktop>
      <S.OrderBody>
        {mockDelOrder?.map((item, index) => {
          return <OrderDesktopItem item={item} key={index} />;
        })}
      </S.OrderBody>
    </S.OrderDesktop>
  );
};

export default OrderDesktopList;
