"use client";

import React, { FC } from "react";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import { Controller, UseFormReturn } from "react-hook-form";
import { StepRegister1 } from "../../auth.style";
import { IRegisrerClient } from "@/interfaces/users/client";
import { FormButton } from "@/styles/baseButtons.style";
import { TextForm } from "@/styles/baseText.style";

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
        <TextForm>Введите своё имя</TextForm>
        <Controller
          name="username"
          rules={{ required: true, minLength: 5 }}
          control={control}
          render={({ field: { value, onChange }, fieldState }) => (
            <InputForm
              placeholder="Ваше ФИО"
              type="text"
              name="username"
              value={value}
              onChange={onChange}
              errors={fieldState.invalid}
            />
          )}
        />
        {errors.username && (
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
        <TextForm>Придумайте свой пароль</TextForm>
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
