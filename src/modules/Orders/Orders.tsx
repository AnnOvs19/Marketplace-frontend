"use client";

import React from "react";
import * as S from "./orders.style";
import * as T from "@/styles/baseText.style";
import InputSearch from "@/ui/Inputs/InputSearch/InputSearch";
import * as B from "@/styles/baseButtons.style";
import OrderDesktopList from "./OrderDesktop/OrderList/OrderDesktopList";
import OrderMobList from "./OrderMobile/OrderMobList";

const Orders = () => {
  return (
    <S.OrderWrap>
      <S.BoxOrder>
        <T.TitleSection>Все заказы покупателей</T.TitleSection>
        <S.HeadOrder>
          <InputSearch type="text" placeholder="Поиск заказов по id" />
          <S.HeadBox>
            <B.TransparentButton>Все</B.TransparentButton>
            <B.TransparentButton>На сборке</B.TransparentButton>
            <B.TransparentButton>В доставке</B.TransparentButton>
            <B.TransparentButton>Доставленные</B.TransparentButton>
            <B.TransparentButton>Возврат</B.TransparentButton>
            <B.TransparentButton>Отменённые</B.TransparentButton>
          </S.HeadBox>
        </S.HeadOrder>
        <OrderDesktopList />
        <OrderMobList />
      </S.BoxOrder>
    </S.OrderWrap>
  );
};

export default Orders;
