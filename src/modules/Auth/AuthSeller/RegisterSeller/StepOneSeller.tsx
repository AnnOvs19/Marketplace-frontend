"use client";

import React, { FC, useState } from "react";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as B from "@/styles/baseButtons.style";
import * as T from "@/styles/baseText.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import { StepRegister1 } from "../../auth.style";
import { Controller, UseFormReturn } from "react-hook-form";
import { IFormRegisrerSeller } from "./RegisterSeller";

interface IProps {
  indexTab: number;
  setIndexTab: (step: number) => void;
  formControl: UseFormReturn<IFormRegisrerSeller>;
}

const StepOneSeller: FC<IProps> = ({ indexTab, setIndexTab, formControl }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = formControl;

  return (
    <StepRegister1 step={indexTab}>
      <U.BodyInputWrapper>
        <T.TextForm>Введите своё имя</T.TextForm>
        <Controller
          name="name"
          rules={{ required: true, minLength: 5 }}
          control={control}
          render={({ field: { value, onChange }, fieldState }) => (
            <InputForm
              placeholder="Ваше ФИО"
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
              placeholder="Ваш номер телефона"
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
        <T.TextForm>Введите email</T.TextForm>
        <Controller
          name="email"
          rules={{
            required: true,
            minLength: 5,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          }}
          control={control}
          render={({ field: { value, onChange }, fieldState }) => (
            <InputForm
              placeholder="Ваша почта"
              type="text"
              name="email"
              value={value}
              onChange={onChange}
              errors={fieldState.invalid}
            />
          )}
        />
        {errors.email && (
          <U.ErrorMessage>Введите корректный адрес почты</U.ErrorMessage>
        )}
      </U.BodyInputWrapper>
      <U.BodyInputWrapper>
        <T.TextForm>Придумайте свой пароль</T.TextForm>
        <Controller
          name="password"
          rules={{
            required: true,
            minLength: 6,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
          }}
          control={control}
          render={({ field: { value, onChange }, fieldState }) => (
            <InputForm
              placeholder="Введите ваш новый пароль"
              type="text"
              name="password"
              value={value}
              onChange={onChange}
              errors={fieldState.invalid}
            />
          )}
        />
        {errors.password && (
          <U.ErrorMessage>
            В вашем пароле должны быть цифры, строчные и заглавные латинские
            буквы, длина не менее 6 символов
          </U.ErrorMessage>
        )}
      </U.BodyInputWrapper>
      <B.FormButton type="button" onClick={() => setIndexTab(2)}>
        К следующему шагу
      </B.FormButton>
    </StepRegister1>
  );
};

export default StepOneSeller;
