"use client";

import React, { FC } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { ICreateEditeProduct } from "../CreateEditProduct";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as T from "@/styles/baseText.style";
import * as S from "../createEditProduct.style";
import TextAreaForm from "@/ui/TextArea/TextAreaForm/TextAreaForm";
import TodoList from "@/components/TodoList/TodoList";
import { FormButton } from "@/styles/baseButtons.style";

interface IProps {
  indexTab: number;
  setIndexTab: (step: number) => void;
  productControl: UseFormReturn<ICreateEditeProduct>;
  errorDrop: boolean;
  setErrorDrop: (state: boolean) => void;
  list: string[];
  setList: (list: string[]) => void;
}

const StepTwoProduct: FC<IProps> = ({
  indexTab,
  setIndexTab,
  productControl,
  errorDrop,
  setErrorDrop,
  list,
  setList
}) => {
  const {
    control,
    formState: { errors }
  } = productControl;
  return (
    <S.StepProduct2 step={indexTab}>
      <U.BodyInputWrapper>
        <T.TextForm>Напишите описание к своему продукту*</T.TextForm>
        <Controller
          name="text"
          control={control}
          rules={{ required: true, minLength: 100 }}
          render={({ field: { value, onChange }, fieldState }) => (
            <TextAreaForm
              placeholder="Описание товара"
              name="text"
              errors={fieldState.invalid}
              value={value}
              onChange={onChange}
            />
          )}
        />
        {errors.text && (
          <U.ErrorMessage>
            Напишите описание не короче 100 симфолов
          </U.ErrorMessage>
        )}
      </U.BodyInputWrapper>
      <U.BodyInputWrapper>
        <T.TextForm>Опишите комплектацию товара (необязательно)</T.TextForm>
        <TodoList list={list} setList={setList} />
      </U.BodyInputWrapper>
      <S.BottomProduct>
        <FormButton type="button" onClick={() => setIndexTab(1)}>
          Назад
        </FormButton>
        <FormButton type="button" onClick={() => setIndexTab(3)}>
          Продолжить
        </FormButton>
      </S.BottomProduct>
    </S.StepProduct2>
  );
};

export default StepTwoProduct;
