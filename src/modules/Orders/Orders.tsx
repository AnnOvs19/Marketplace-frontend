"use client";

import React, { FC } from "react";
import * as S from "./orders.style";
import InputSearch from "@/ui/Inputs/InputSearch/InputSearch";
import OrderDesktopList from "./OrderDesktop/OrderList/OrderDesktopList";
import OrderMobList from "./OrderMobile/OrderMobList";
import { TransparentButton } from "@/styles/baseButtons.style";
import { TitleSection } from "@/styles/baseText.style";
import { IOrderInfo } from "@/interfaces/orders/order";

interface IProps {
  orders: IOrderInfo[];
}

const Orders: FC<IProps> = ({ orders }) => {
  return (
    <S.OrderWrap>
      <S.BoxOrder>
        <TitleSection>Все заказы покупателей</TitleSection>
        <S.HeadOrder>
          <InputSearch type="text" placeholder="Поиск заказов по id" />
          <S.HeadBox>
            <TransparentButton>Все</TransparentButton>
            <TransparentButton>На сборке</TransparentButton>
            <TransparentButton>В доставке</TransparentButton>
            <TransparentButton>Доставленные</TransparentButton>
            <TransparentButton>Возврат</TransparentButton>
            <TransparentButton>Отменённые</TransparentButton>
          </S.HeadBox>
        </S.HeadOrder>
        <OrderDesktopList orders={orders} />
        <OrderMobList orders={orders} />
      </S.BoxOrder>
    </S.OrderWrap>
  );
};

export default Orders;
