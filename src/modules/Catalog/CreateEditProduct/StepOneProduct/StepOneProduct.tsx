"use client";

import React, { FC, useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { ICreateEditeProduct } from "../CreateEditProduct";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as T from "@/styles/baseText.style";
import * as S from "../createEditProduct.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import DropdownCategory from "@/ui/DropdownCategory/DropdownCategory";
import { FormButton } from "@/styles/baseButtons.style";

interface IProps {
  indexTab: number;
  setIndexTab: (step: number) => void;
  productControl: UseFormReturn<ICreateEditeProduct>;
  errorDrop: boolean;
  setErrorDrop: (state: boolean) => void;
}

const StepOneProduct: FC<IProps> = ({
  indexTab,
  setIndexTab,
  productControl,
  errorDrop,
  setErrorDrop
}) => {
  const {
    control,
    formState: { errors }
  } = productControl;

  return (
    <S.StepProduct1 step={indexTab}>
      <S.ContainerRow>
        <S.ProductBox>
          <U.BodyInputWrapper>
            <T.TextForm>Название товара*</T.TextForm>
            <Controller
              name="title"
              rules={{ required: true, minLength: 5, maxLength: 200 }}
              control={control}
              render={({ field: { value, onChange }, fieldState }) => (
                <InputForm
                  placeholder="Название вашего товара"
                  type="text"
                  name="title"
                  value={value}
                  onChange={onChange}
                  errors={fieldState.invalid}
                />
              )}
            />
            {errors.title && (
              <U.ErrorMessage>
                Название товара должно быть не менее 5 и не более 200 символов
              </U.ErrorMessage>
            )}
          </U.BodyInputWrapper>
          <U.BodyInputWrapper>
            <T.TextForm>Модель товара*</T.TextForm>
            <Controller
              name="model"
              rules={{ required: true, minLength: 5, maxLength: 200 }}
              control={control}
              render={({ field: { value, onChange }, fieldState }) => (
                <InputForm
                  placeholder="Название модели товара"
                  type="text"
                  name="model"
                  value={value}
                  onChange={onChange}
                  errors={fieldState.invalid}
                />
              )}
            />
            {errors.model && (
              <U.ErrorMessage>
                Название модели должно быть не менее 5 и не более 200 символов
              </U.ErrorMessage>
            )}
          </U.BodyInputWrapper>
          <U.BodyInputWrapper>
            <T.TextForm>Торговый артикул*</T.TextForm>
            <Controller
              name="article"
              rules={{ required: true, minLength: 2 }}
              control={control}
              render={({ field: { value, onChange }, fieldState }) => (
                <InputForm
                  placeholder="Артикул товара"
                  type="text"
                  name="article"
                  value={value}
                  onChange={onChange}
                  errors={fieldState.invalid}
                />
              )}
            />
            {errors.article && (
              <U.ErrorMessage>
                Артикул товара должен быть не менее 2 символов
              </U.ErrorMessage>
            )}
          </U.BodyInputWrapper>

          <U.BodyInputWrapper>
            <T.TextForm>Цена товара*</T.TextForm>
            <Controller
              name="price"
              rules={{ required: true, minLength: 5 }}
              control={control}
              render={({ field: { value, onChange }, fieldState }) => (
                <InputForm
                  placeholder="Стоимость товара"
                  type="text"
                  name="price"
                  value={value}
                  onChange={onChange}
                  errors={fieldState.invalid}
                />
              )}
            />
            {errors.price && (
              <U.ErrorMessage>
                Цена товара должна быть не менее 5 символов
              </U.ErrorMessage>
            )}
          </U.BodyInputWrapper>
        </S.ProductBox>
        <S.ProductBox>
          <U.BodyInputWrapper>
            <T.TextForm>Размеры товара (ШхДхВ)см*</T.TextForm>
            <Controller
              name="size"
              rules={{ required: true, minLength: 5, maxLength: 100 }}
              control={control}
              render={({ field: { value, onChange }, fieldState }) => (
                <InputForm
                  placeholder="Размеры: ширина Х высота Х длина"
                  type="text"
                  name="size"
                  value={value}
                  onChange={onChange}
                  errors={fieldState.invalid}
                />
              )}
            />
            {errors.size && (
              <U.ErrorMessage>
                Размеры товара по длине должны быть не менее 5 символов
              </U.ErrorMessage>
            )}
          </U.BodyInputWrapper>
          <U.BodyInputWrapper>
            <T.TextForm>Страна производства*</T.TextForm>
            <Controller
              name="country"
              rules={{ required: true, minLength: 3, maxLength: 100 }}
              control={control}
              render={({ field: { value, onChange }, fieldState }) => (
                <InputForm
                  placeholder="Страна-производитель товара"
                  type="text"
                  name="country"
                  value={value}
                  onChange={onChange}
                  errors={fieldState.invalid}
                />
              )}
            />
            {errors.country && (
              <U.ErrorMessage>
                Наименование страны должно быть не менее 3 символов
              </U.ErrorMessage>
            )}
          </U.BodyInputWrapper>
          <U.BodyInputWrapper>
            <T.TextForm>Наименование бренда*</T.TextForm>
            <Controller
              name="brand"
              rules={{ required: true, minLength: 3, maxLength: 100 }}
              control={control}
              render={({ field: { value, onChange }, fieldState }) => (
                <InputForm
                  placeholder="Бренд-производитель товара"
                  type="text"
                  name="brand"
                  value={value}
                  onChange={onChange}
                  errors={fieldState.invalid}
                />
              )}
            />
            {errors.brand && (
              <U.ErrorMessage>
                Название бренда должно быть не менее 3 символов
              </U.ErrorMessage>
            )}
          </U.BodyInputWrapper>
          <U.BodyInputWrapper>
            <T.TextForm>Количество товаров на складе*</T.TextForm>
            <Controller
              name="sumInStock"
              rules={{ required: true, pattern: /^[0-9]+/ }}
              control={control}
              render={({ field: { value, onChange }, fieldState }) => (
                <InputForm
                  placeholder="Количество товаров на вашем складе"
                  type="number"
                  name="sumInStock"
                  value={value}
                  onChange={onChange}
                  errors={fieldState.invalid}
                />
              )}
            />
            {errors.sumInStock && (
              <U.ErrorMessage>
                Количество должно быть указано только в цифрах
              </U.ErrorMessage>
            )}
          </U.BodyInputWrapper>
        </S.ProductBox>
      </S.ContainerRow>
      <DropdownCategory errorDrop={errorDrop} setErrorDrop={setErrorDrop} />
      <FormButton type="button" onClick={() => setIndexTab(2)}>
        К следующему шагу
      </FormButton>
    </S.StepProduct1>
  );
};

export default StepOneProduct;
