"use client";

import React from "react";
import * as S from "./totalCost.style";
import * as B from "@/styles/baseButtons.style";
import * as T from "@/styles/baseText.style";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";

const TotalCost = () => {
  return (
    <S.CostWrap>
      <S.TotalPrice>
        <T.TitleBasket>Итоговая стоимость</T.TitleBasket>
        <S.PriceBox>
          <S.PriceElem>
            <T.TotalText>Цена</T.TotalText>
            <T.TotalPrice>20000 руб</T.TotalPrice>
          </S.PriceElem>
          <S.PriceElem>
            <T.TotalText>Доставка</T.TotalText>
            <T.TotalPrice>2000 руб</T.TotalPrice>
          </S.PriceElem>
          <S.PriceElem>
            <T.TotalText>Итого</T.TotalText>
            <T.TotalPrice>40000 руб</T.TotalPrice>
          </S.PriceElem>
        </S.PriceBox>
      </S.TotalPrice>
      <S.TotalForm>
        <T.TitleForm>Оставьте свои данные</T.TitleForm>
        <U.BodyInputWrapper>
          <T.TextForm>Введите своё имя</T.TextForm>
          <InputForm placeholder="Введите своё имя" type="text" />
        </U.BodyInputWrapper>
        <U.BodyInputWrapper>
          <T.TextForm>Введите своё имя</T.TextForm>
          <InputForm placeholder="Введите своё имя" type="text" />
        </U.BodyInputWrapper>
        <U.BodyInputWrapper>
          <T.TextForm>Введите своё имя</T.TextForm>
          <InputForm placeholder="Введите своё имя" type="text" />
        </U.BodyInputWrapper>
        <B.FormButton>Отправить заказ</B.FormButton>
      </S.TotalForm>
    </S.CostWrap>
  );
};

export default TotalCost;
