"use client";

import React, { FC } from "react";
import { ICatalogMock } from "../../mockDelCatalog";
import * as S from "./productBody.style";
import * as T from "@/styles/baseText.style";
import SliderProducts from "@/components/SliderProducts/SliderProducts";

interface IProps {
  product: ICatalogMock;
}

const ProductBody: FC<IProps> = ({ product }) => {
  return (
    <S.BodyBox>
      <S.BodyDesk>
        <S.InfoContainer>
          <T.DeskTitle>Общие характеристики</T.DeskTitle>
          <S.InfoItem>
            <T.DeskKey>Прампампам</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Прампампам</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Прампампам</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Прампампам</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Прампампам</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Прампампам</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>
          <S.InfoItem>
            <T.DeskKey>Прампампам</T.DeskKey>
            <S.InfoLine />
            <T.DeskValue>Прампампам</T.DeskValue>
          </S.InfoItem>

          {/* <T.SubTitle>Общие характеристики</T.SubTitle>
        <T.SmallText>Прампампам</T.SmallText>
        <T.SmallText>Прампампам</T.SmallText>
        <T.SmallText>Прампампам</T.SmallText>
        <T.SmallText>Прампампам</T.SmallText>
        <T.SubTitle>Общие характеристики</T.SubTitle>
        <T.SmallText>Прампампам</T.SmallText>
        <T.SmallText>Прампампам</T.SmallText>
        <T.SmallText>Прампампам</T.SmallText>
        <T.SmallText>Прампампам</T.SmallText>
        <T.SubTitle>Общие характеристики</T.SubTitle>
        <T.SmallText>Прампампам</T.SmallText>
        <T.SmallText>Прампампам</T.SmallText>
        <T.SmallText>Прампампам</T.SmallText>
        <T.SmallText>Прампампам</T.SmallText> */}
        </S.InfoContainer>
        <S.TextContainer>
          <T.DeskTitle>Описание товара</T.DeskTitle>
          <T.SmallText>{product.text}</T.SmallText>
        </S.TextContainer>
      </S.BodyDesk>

      <SliderProducts />
    </S.BodyBox>
  );
};

export default ProductBody;
