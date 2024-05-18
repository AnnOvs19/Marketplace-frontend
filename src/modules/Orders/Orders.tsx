"use client";

import React, { FC, useEffect, useState } from "react";
import * as S from "./orders.style";
import InputSearch from "@/ui/Inputs/InputSearch/InputSearch";
import OrderDesktopList from "./OrderDesktop/OrderList/OrderDesktopList";
import OrderMobList from "./OrderMobile/OrderMobList";
import { TransparentButton } from "@/styles/baseButtons.style";
import { IOrder, IOrderInfo } from "@/interfaces/orders/order";
import { TitleSection } from "@/styles/baseTitle.style";
import { IOrderStatus } from "@/interfaces/orders/orderStatus";
import axios from "@/helpers/axios";
import { useSession } from "next-auth/react";

interface IProps {
  orders: IOrderInfo[];
  statusOrders: IOrderStatus[];
  flag?: number;
  storeId?: number;
}

const Orders: FC<IProps> = ({ orders, statusOrders, flag, storeId }) => {
  const session = useSession();
  const [role, setRole] = useState<string>(localStorage.getItem("role")!);
  const [orderArray, setOrderArray] = useState<IOrderInfo[]>(orders);

  async function getOrderStatus(id: number) {
    if (flag == 1) {
      const res = await axios.get(
        `api/orders?populate=*&filters[orderStatus][id][$eq]=${id}&filters[user][id][$eq]=${session.data?.user.id}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`
          }
        }
      );

      if (res.data) {
        const myOrders: IOrderInfo[] = res.data.data.map((item: any) => {
          return {
            id: item.id,
            client: item.user.username,
            storeName: item.store.storeName,
            status: item.orderStatus.status,
            sumOrder: item.sumOrder,
            productName: item.product.title
          };
        });

        setOrderArray(myOrders);
      }
    } else {
      const res = await axios.get(
        `api/orders?populate=*&filters[orderStatus][id][$eq]=${id}&filters[store][id][$eq]=${storeId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`
          }
        }
      );

      if (res.data) {
        const allOrders: IOrderInfo[] = res.data.data.map((item: any) => {
          return {
            id: item.id,
            client: item.user.username,
            storeName: item.store.storeName,
            status: item.orderStatus.status,
            sumOrder: item.sumOrder,
            productName: item.product.title
          };
        });

        setOrderArray(allOrders);
      }
    }
  }

  async function clearStatus() {
    if (flag == 1) {
      const res = await axios.get(
        `api/orders?populate=*&filters[user][id][$eq]=${session.data?.user.id}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`
          }
        }
      );
      const orders: IOrderInfo[] = res.data.data.map((item: any) => {
        return {
          id: item.id,
          client: item.user.username,
          storeName: item.store.storeName,
          status: item.orderStatus.status,
          sumOrder: item.sumOrder,
          productName: item.product.title
        };
      });
      setOrderArray(orders.sort((a, b) => b.id - a.id));
    } else {
      const res = await axios.get(
        `api/orders?populate=*&filters[store][id][$eq]=${storeId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`
          }
        }
      );
      const orders: IOrderInfo[] = res.data.data.map((item: any) => {
        return {
          id: item.id,
          client: item.user.username,
          storeName: item.store.storeName,
          status: item.orderStatus.status,
          sumOrder: item.sumOrder,
          productName: item.product.title
        };
      });
      setOrderArray(orders.sort((a, b) => b.id - a.id));
    }
  }

  return (
    <S.OrderWrap>
      <S.BoxOrder>
        {role == "Seller" ? (
          <TitleSection>Все заказы покупателей</TitleSection>
        ) : (
          <TitleSection>Мои заказы</TitleSection>
        )}

        <S.HeadOrder>
          <InputSearch type="text" placeholder="Поиск заказов по id" />
          <S.HeadBox>
            <TransparentButton onClick={clearStatus}>
              Все заказы
            </TransparentButton>
            {statusOrders?.map((item, index) => {
              return (
                <TransparentButton
                  key={index}
                  type="button"
                  onClick={() => getOrderStatus(item.id)}
                >
                  {item.status}
                </TransparentButton>
              );
            })}
          </S.HeadBox>
        </S.HeadOrder>
        <OrderDesktopList orders={orderArray} />
        <OrderMobList orders={orderArray} />
      </S.BoxOrder>
    </S.OrderWrap>
  );
};

export default Orders;
