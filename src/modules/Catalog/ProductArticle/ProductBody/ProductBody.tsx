"use client";

import React, { FC } from "react";
import * as S from "./productBody.style";
import * as T from "@/styles/baseText.style";
// import SliderProducts from "@/components/SliderProducts/SliderProducts";
import { IProduct } from "@/interfaces/product/product";
import SliderProducts from "@/modules/Home/SliderProducts/SliderProducts";

interface IProps {
  product: IProduct;
}

const ProductBody: FC<IProps> = ({ product }) => {
  const text = product.text
    .split("\n")
    .map((str) => <T.SmallText>{str}</T.SmallText>);
  return (
    <S.BodyBox>
      <S.BodyDesk>
        <S.BodyItem>
          <S.InfoContainer>
            <T.DeskTitle>Общие характеристики</T.DeskTitle>
            <S.InfoItem>
              <T.DeskKey>Название товара</T.DeskKey>
              <T.DeskValue>{product.title}</T.DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <T.DeskKey>Модель</T.DeskKey>
              <T.DeskValue>{product.model}</T.DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <T.DeskKey>Торговый артикул</T.DeskKey>
              <T.DeskValue>{product.article}</T.DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <T.DeskKey>Размеры товара в упаковке (см)</T.DeskKey>
              <T.DeskValue>{product.size}</T.DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <T.DeskKey>Страна производства</T.DeskKey>
              <T.DeskValue>{product.country}</T.DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <T.DeskKey>Бренд-производитель</T.DeskKey>
              <T.DeskValue>{product.brand}</T.DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <T.DeskKey>Количество товаров на складе</T.DeskKey>
              <T.DeskValue>{product.sumInStock}</T.DeskValue>
            </S.InfoItem>
          </S.InfoContainer>
          <S.OtherContainer>
            <T.DeskTitle>Комплектация товара</T.DeskTitle>
            <S.BodyOther>
              {product.equipment?.length !== 0 ? (
                product.equipment?.map((item) => {
                  return <S.ItemOther>{item}</S.ItemOther>;
                })
              ) : (
                <S.ItemOther>Комплектация товара не указана</S.ItemOther>
              )}
            </S.BodyOther>
          </S.OtherContainer>
        </S.BodyItem>
        <S.BodyItem>
          <S.TextContainer>
            <T.DeskTitle>Описание товара</T.DeskTitle>
            <>{text}</>
          </S.TextContainer>
          <S.OtherContainer>
            <T.DeskTitle>Материалы</T.DeskTitle>
            <S.BodyOther>
              {product.materials?.length !== 0 ? (
                product.materials?.map((item) => {
                  return <S.ItemOther>{item}</S.ItemOther>;
                })
              ) : (
                <S.ItemOther>Материалы товара не указаны</S.ItemOther>
              )}
            </S.BodyOther>
          </S.OtherContainer>
        </S.BodyItem>
      </S.BodyDesk>

      <SliderProducts />
    </S.BodyBox>
  );
};

export default ProductBody;
