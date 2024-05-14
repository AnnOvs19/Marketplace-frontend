"use client";

import React, { useState } from "react";
import * as S from "./totalCost.style";
import * as B from "@/styles/baseButtons.style";
import * as T from "@/styles/baseText.style";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import { IOrderContacts } from "@/interfaces/basket/basket";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";
import { Controller, useForm } from "react-hook-form";

const TotalCost = () => {
  const defaultValues: IOrderContacts = {
    name: "",
    phone: "",
    sity: "",
    adress: ""
  };

  const [textButton, setTextButton] = useState<string>("Заказать товары");
  const [statusLoad, setStatusLoad] = useState<boolean>(false);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<IOrderContacts>({ defaultValues, mode: "onChange" });

  function submit(data: IOrderContacts) {
    setTextButton("Создание заказов...");
    setStatusLoad(true);
    reset();
  }

  return (
    <S.CostWrap>
      <S.TotalPrice>
        <T.TitleBasket>Итоговая стоимость за все товары</T.TitleBasket>
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
      <S.TotalForm onSubmit={handleSubmit(submit)}>
        <T.TitleForm>Оставьте данные получателя</T.TitleForm>
        <U.BodyInputWrapper>
          <T.TextForm>Имя получателя</T.TextForm>
          <Controller
            name="name"
            rules={{ required: true, minLength: 5 }}
            control={control}
            render={({ field: { value, onChange }, fieldState }) => (
              <InputForm
                placeholder="Введите ФИО"
                type="text"
                name="name"
                value={value}
                onChange={onChange}
                errors={fieldState.invalid}
              />
            )}
          />
          {errors.name && (
            <U.ErrorMessage>Введите ФИО не короче пяти символов</U.ErrorMessage>
          )}
        </U.BodyInputWrapper>
        <U.BodyInputWrapper>
          <T.TextForm>Номер телефона</T.TextForm>
          <Controller
            name="phone"
            rules={{
              required: true,
              minLength: 5,
              pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
            }}
            control={control}
            render={({ field: { value, onChange }, fieldState }) => (
              <InputForm
                placeholder="Номер телефона получателя"
                type="text"
                name="phone"
                value={value}
                onChange={onChange}
                errors={fieldState.invalid}
              />
            )}
          />
          {errors.phone && (
            <U.ErrorMessage>Введите корректный номер телефона</U.ErrorMessage>
          )}
        </U.BodyInputWrapper>
        <U.BodyInputWrapper>
          <T.TextForm>Область и город получателя</T.TextForm>
          <Controller
            name="sity"
            rules={{ required: true, minLength: 10 }}
            control={control}
            render={({ field: { value, onChange }, fieldState }) => (
              <InputForm
                placeholder="Область и город проживания"
                type="text"
                name="sity"
                value={value}
                onChange={onChange}
                errors={fieldState.invalid}
              />
            )}
          />
          {errors.sity && (
            <U.ErrorMessage>
              Введите название области и города проживания не короче 10 символов
            </U.ErrorMessage>
          )}
        </U.BodyInputWrapper>
        <U.BodyInputWrapper>
          <T.TextForm>Введите адрес для доставки</T.TextForm>
          <Controller
            name="adress"
            rules={{ required: true, minLength: 10 }}
            control={control}
            render={({ field: { value, onChange }, fieldState }) => (
              <InputForm
                placeholder="Адрес для доставки"
                type="text"
                name="adress"
                value={value}
                onChange={onChange}
                errors={fieldState.invalid}
              />
            )}
          />
          {errors.adress && (
            <U.ErrorMessage>
              Введите адрес для доставки не короче 10 символов
            </U.ErrorMessage>
          )}
        </U.BodyInputWrapper>
        <B.FormButton type="submit">
          {textButton}
          {statusLoad ? <MiniLoader /> : ""}
        </B.FormButton>
      </S.TotalForm>
    </S.CostWrap>
  );
};

export default TotalCost;
