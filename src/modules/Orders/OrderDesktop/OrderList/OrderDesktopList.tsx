"use client";

import React, { FC, useState } from "react";
import * as S from "./orderDesktopList.style";
import OrderDesktopItem from "./OrderDesktopItem";
import { IOrderInfo } from "@/interfaces/orders/order";
import Link from "next/link";

interface IProps {
  orders: IOrderInfo[];
}

const OrderDesktopList: FC<IProps> = ({ orders }) => {
  const [role, setRole] = useState<string>(localStorage.getItem("role")!);

  return (
    <S.OrderDesktop>
      <S.OrderBody>
        {orders
          ?.sort((a, b) => b.id - a.id)
          .map((item, index) => {
            return (
              <>
                {role == "Seller" ? (
                  <Link href={`/allOrdersClient/${index + 1}`}>
                    <OrderDesktopItem item={item} key={index} />
                  </Link>
                ) : (
                  <Link href={`/myOrders/${index + 1}`}>
                    <OrderDesktopItem item={item} key={index} />
                  </Link>
                )}
              </>
            );
          })}
      </S.OrderBody>
    </S.OrderDesktop>
  );
};

export default OrderDesktopList;
