"use client";

import React, { FC } from "react";
import { ICatalogMock } from "../../mockDelCatalog";
import * as S from "./productBody.style";
import * as T from "@/styles/baseText.style";
import SliderProducts from "@/components/SliderProducts/SliderProducts";

interface IProps {
  product: ICatalogMock;
}

const сomplement = [
  "Телефоны",
  "Компьютеры",
  "Ноутбуки",
  "Планшеты",
  "Гарнитура",
  "Часы",
  "Прочее"
];

const ProductBody: FC<IProps> = ({ product }) => {
  return (
    <S.BodyBox>
      <S.BodyDesk>
        <S.InfoContainer>
          <T.DeskTitle>Общие характеристики</T.DeskTitle>
          <S.InfoItem>
            <T.DeskKey>Название товара</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Модель</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Торговый артикул</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Размеры товара (см)</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Страна производства</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Бренд-производитель</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Количество товаров на складе</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
        </S.InfoContainer>
        <S.TextContainer>
          <T.DeskTitle>Описание товара</T.DeskTitle>
          <T.SmallText>{product.text}</T.SmallText>
        </S.TextContainer>
        <S.ComplementContainer>
          <T.DeskTitle>Комплектация товара</T.DeskTitle>
          <S.BodyComplement>
            {сomplement?.map((item) => {
              return <S.ItemComplement>{item}</S.ItemComplement>;
            })}
          </S.BodyComplement>
        </S.ComplementContainer>
      </S.BodyDesk>

      <SliderProducts />
    </S.BodyBox>
  );
};

export default ProductBody;
