"use client";

import React, { FC } from "react";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as T from "@/styles/baseText.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import { Controller, UseFormReturn } from "react-hook-form";
import { StepRegister1 } from "../../auth.style";
import { IRegisrerClient } from "@/interfaces/users/client";
import { FormButton } from "@/styles/baseButtons.style";

interface IProps {
  indexTab: number;
  setIndexTab: (step: number) => void;
  formControl: UseFormReturn<IRegisrerClient>;
}

const StepOneClient: FC<IProps> = ({ indexTab, setIndexTab, formControl }) => {
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
      <FormButton type="button" onClick={() => setIndexTab(2)}>
        К следующему шагу
      </FormButton>
    </StepRegister1>
  );
};

export default StepOneClient;
