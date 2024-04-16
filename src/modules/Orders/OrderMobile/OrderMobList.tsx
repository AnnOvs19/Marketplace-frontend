"use client";

import React from "react";
import { mockDelOrder } from "../mockDelOrder";
import OrderMobItem from "./OrderMobItem";
import * as S from "./orderMobList.style";

const OrderMobList = () => {
  return (
    <S.OrderContainer>
      {mockDelOrder?.map((item, index) => {
        return <OrderMobItem item={item} key={index} />;
      })}
    </S.OrderContainer>
  );
};

export default OrderMobList;
