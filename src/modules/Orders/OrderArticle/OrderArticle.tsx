"use client";

import React, { FC } from "react";
import * as S from "./orderArticle.style";
import { OrderText } from "@/styles/baseText.style";
import Image from "next/image";
import mockimage from "@/assets/images/clavs.jpg";
import { FormButton } from "@/styles/baseButtons.style";
import { OrderSubTitle, OrderTitle } from "@/styles/baseTitle.style";
import { IOrder } from "@/interfaces/orders/order";
import { LoaderImage } from "@/helpers/loaderImage";

interface IProps {
  orderPage: IOrder;
}

const OrderArticle: FC<IProps> = ({ orderPage }) => {
  console.log(orderPage);

  return (
    <S.OrderArticleWrap>
      <S.OrderList>
        <S.OrderInfo>
          <OrderTitle>Номер заказа: {orderPage.id}</OrderTitle>
          <S.OrderString>
            <OrderSubTitle>Магазин:</OrderSubTitle>
            <OrderText>{orderPage.store.storeName}</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Продавец:</OrderSubTitle>
            <OrderText>{orderPage.store.user?.username}</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Электронная почта:</OrderSubTitle>
            <OrderText>{orderPage.store.user?.email}</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Номер телефона:</OrderSubTitle>
            <OrderText>{orderPage.store.user?.phone}</OrderText>
          </S.OrderString>
        </S.OrderInfo>
        <S.OrderInfo>
          <OrderTitle>Покупатель: {orderPage.user.username}</OrderTitle>
          <S.OrderString>
            <OrderSubTitle>Город и область:</OrderSubTitle>
            <OrderText>{orderPage.user.sity}</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Адрес:</OrderSubTitle>
            <OrderText>{orderPage.user.adress}</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Электронная почта:</OrderSubTitle>
            <OrderText>{orderPage.user.email}</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Номер телефона:</OrderSubTitle>
            <OrderText>{orderPage.user.phone}</OrderText>
          </S.OrderString>
        </S.OrderInfo>
        <S.OrderInfo>
          <S.HeadProduct>
            <S.ImageProduct>
              <Image
                loader={LoaderImage}
                src={orderPage.product.image[0].url}
                alt="Product card image"
                fill
                style={{
                  objectFit: "cover"
                }}
              />
            </S.ImageProduct>
            <OrderTitle>{orderPage.product.title}</OrderTitle>
          </S.HeadProduct>
          <S.OrderString>
            <OrderSubTitle>Торговый артикул:</OrderSubTitle>
            <OrderText> {orderPage.product.article}</OrderText>
          </S.OrderString>
          <S.OrderString>
            <OrderSubTitle>Количество:</OrderSubTitle>
            <OrderText> {orderPage.quantity} шт</OrderText>
          </S.OrderString>
          <S.OrderPrice>
            <S.OrderString>
              <OrderSubTitle>Цена за одну единицу:</OrderSubTitle>
              <OrderText> {orderPage.product.price}руб</OrderText>
            </S.OrderString>

            <OrderTitle>
              Итого: {orderPage.product.price * orderPage.quantity}руб
            </OrderTitle>
          </S.OrderPrice>
        </S.OrderInfo>
        <S.OrderInfo>
          <OrderTitle>Статус заказа: {orderPage.orderStatus.status}</OrderTitle>
          <FormButton>Изменить статус</FormButton>
        </S.OrderInfo>
      </S.OrderList>
    </S.OrderArticleWrap>
  );
};

export default OrderArticle;
