"use client";

import React, { FC, useEffect, useState } from "react";
import * as S from "./totalCost.style";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import { IOrderContacts } from "@/interfaces/basket/basket";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";
import { Controller, useForm } from "react-hook-form";
import { FormButton } from "@/styles/baseButtons.style";
import { TitleForm } from "@/styles/baseTitle.style";
import { TextForm, TotalPrice, TotalText } from "@/styles/baseText.style";
import { IProduct } from "@/interfaces/product/product";

interface IProps {
  products: IProduct[];
  myBasket?: IOrderContacts;
}

const TotalCost: FC<IProps> = ({ myBasket, products }) => {
  const defaultValues: IOrderContacts = {
    name: myBasket?.name ? myBasket.name : "",
    phone: myBasket?.phone ? myBasket.phone : "",
    sity: myBasket?.sity ? myBasket.sity : "",
    adress: myBasket?.adress ? myBasket.adress : ""
  };

  const [textButton, setTextButton] = useState<string>("Заказать товары");
  const [statusLoad, setStatusLoad] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<IOrderContacts>({ defaultValues, mode: "onChange" });

  function calcPrice() {
    let price = 0;
    products.forEach((item) => {
      price += item.price * item.quantity!;
    });
    setTotalPrice(price);
  }

  function submit(data: IOrderContacts) {
    setTextButton("Создание заказов...");
    setStatusLoad(true);
    reset();
  }

  useEffect(() => {
    calcPrice();
  }, [products]);

  return (
    <S.CostWrap>
      <S.TotalPrice>
        <S.PriceBox>
          <S.PriceElem>
            <TotalText>Стоимость всех товаров</TotalText>
            <TotalPrice>{totalPrice} руб</TotalPrice>
          </S.PriceElem>
        </S.PriceBox>
      </S.TotalPrice>
      <S.TotalForm onSubmit={handleSubmit(submit)}>
        <TitleForm>Оставьте данные получателя</TitleForm>
        <U.BodyInputWrapper>
          <TextForm>Имя получателя</TextForm>
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
          <TextForm>Номер телефона</TextForm>
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
          <TextForm>Область и город получателя</TextForm>
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
          <TextForm>Введите адрес для доставки</TextForm>
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
        <FormButton type="submit">
          {textButton}
          {statusLoad ? <MiniLoader /> : ""}
        </FormButton>
      </S.TotalForm>
    </S.CostWrap>
  );
};

export default TotalCost;
