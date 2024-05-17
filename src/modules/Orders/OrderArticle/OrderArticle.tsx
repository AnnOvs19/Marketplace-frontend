"use client";

import React from "react";
import * as S from "./orderArticle.style";
import { OrderText } from "@/styles/baseText.style";
import Image from "next/image";
import mockimage from "@/assets/images/clavs.jpg";
import { FormButton } from "@/styles/baseButtons.style";
import { OrderSubTitle, OrderTitle } from "@/styles/baseTitle.style";

const OrderArticle = () => {
  return (
    <S.OrderArticleWrap>
      <S.OrderList>
        <S.OrderInfo>
          <OrderTitle>Номер заказа: 11111</OrderTitle>
          <S.OrderString>
            <OrderSubTitle>Магазин:</OrderSubTitle>
            <OrderText>Beats</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Продавец:</OrderSubTitle>
            <OrderText>Иван Иванович</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Электронная почта:</OrderSubTitle>
            <OrderText>собака@mail.ru</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Номер телефона:</OrderSubTitle>
            <OrderText>+79494135425</OrderText>
          </S.OrderString>
        </S.OrderInfo>
        <S.OrderInfo>
          <OrderTitle>Покупатель: Пётр Петрович</OrderTitle>
          <S.OrderString>
            <OrderSubTitle>Город и область:</OrderSubTitle>
            <OrderText>Донецк, ДНР</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Адрес:</OrderSubTitle>
            <OrderText>пл. Трудовских, дом 4, кв 8</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Электронная почта:</OrderSubTitle>
            <OrderText>собака@mail.ru</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Номер телефона:</OrderSubTitle>
            <OrderText>+79494135425</OrderText>
          </S.OrderString>
        </S.OrderInfo>
        <S.OrderInfo>
          <S.HeadProduct>
            <S.ImageProduct>
              <Image
                src={mockimage}
                alt="Product card image"
                fill
                style={{
                  objectFit: "cover"
                }}
              />
            </S.ImageProduct>
            <OrderTitle>
              Беспроводные наушники Т2 TWS / Bluetooth с микрофоном, гарнитура
            </OrderTitle>
          </S.HeadProduct>
          <S.OrderString>
            <OrderSubTitle>Торговый артикул:</OrderSubTitle>
            <OrderText> 12к23к434е3</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Количество:</OrderSubTitle>
            <OrderText> 2 шт</OrderText>
          </S.OrderString>
          <S.OrderPrice>
            <S.OrderString>
              <OrderSubTitle>Цена за одну единицу:</OrderSubTitle>
              <OrderText> 600 руб</OrderText>
            </S.OrderString>

            <OrderTitle>Итого: 1220 руб</OrderTitle>
          </S.OrderPrice>
        </S.OrderInfo>
        <S.OrderInfo>
          <OrderTitle>Статус заказа: здесь дропдаун</OrderTitle>
          <FormButton>Изменить статус</FormButton>
        </S.OrderInfo>
      </S.OrderList>
    </S.OrderArticleWrap>
  );
};

export default OrderArticle;
