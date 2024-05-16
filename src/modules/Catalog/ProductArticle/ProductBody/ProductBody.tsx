"use client";

import React, { FC } from "react";
import * as S from "./productBody.style";
import { IProduct } from "@/interfaces/product/product";
import { DeskTitle } from "@/styles/baseTitle.style";
import { DeskKey, DeskValue, SmallText } from "@/styles/baseText.style";

interface IProps {
  product: IProduct;
}

const ProductBody: FC<IProps> = ({ product }) => {
  const text = product.text
    .split("\n")
    .map((str) => <SmallText>{str}</SmallText>);
  return (
    <S.BodyBox>
      <S.BodyDesk>
        <S.BodyItem>
          <S.InfoContainer>
            <DeskTitle>Общие характеристики</DeskTitle>
            <S.InfoItem>
              <DeskKey>Название товара</DeskKey>
              <DeskValue>{product.title}</DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <DeskKey>Модель</DeskKey>
              <DeskValue>{product.model}</DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <DeskKey>Торговый артикул</DeskKey>
              <DeskValue>{product.article}</DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <DeskKey>Размеры товара в упаковке (см)</DeskKey>
              <DeskValue>{product.size}</DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <DeskKey>Страна производства</DeskKey>
              <DeskValue>{product.country}</DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <DeskKey>Бренд-производитель</DeskKey>
              <DeskValue>{product.brand}</DeskValue>
            </S.InfoItem>
            <S.InfoItem>
              <DeskKey>Количество товаров на складе</DeskKey>
              <DeskValue>{product.sumInStock}</DeskValue>
            </S.InfoItem>
          </S.InfoContainer>
          <S.OtherContainer>
            <DeskTitle>Комплектация товара</DeskTitle>
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
            <DeskTitle>Описание товара</DeskTitle>
            <>{text}</>
          </S.TextContainer>
          <S.OtherContainer>
            <DeskTitle>Материалы</DeskTitle>
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
    </S.BodyBox>
  );
};

export default ProductBody;
