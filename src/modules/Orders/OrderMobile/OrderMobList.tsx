"use client";

import React, { FC, useState } from "react";
import { mockDelOrder } from "../mockDelOrder";
import OrderMobItem from "./OrderMobItem";
import * as S from "./orderMobList.style";
import { IOrderInfo } from "@/interfaces/orders/order";
import Link from "next/link";

interface IProps {
  orders: IOrderInfo[];
}

const OrderMobList: FC<IProps> = ({ orders }) => {
  const [role, setRole] = useState<string>(localStorage.getItem("role")!);

  return (
    <S.OrderContainer>
      {orders
        ?.sort((a, b) => b.id - a.id)
        .map((item, index) => {
          return (
            <>
              {role == "Seller" ? (
                <Link
                  href={`/allOrdersClient/${item.id}`}
                  style={{ width: "100%" }}
                >
                  <OrderMobItem item={item} key={index} />
                </Link>
              ) : (
                <Link href={`/myOrders/${item.id}`} style={{ width: "100%" }}>
                  <OrderMobItem item={item} key={index} />
                </Link>
              )}
            </>
          );
        })}
    </S.OrderContainer>
  );
};

export default OrderMobList;
