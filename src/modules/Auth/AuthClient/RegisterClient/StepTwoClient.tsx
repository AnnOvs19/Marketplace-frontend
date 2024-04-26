"use client";

import React, { FC } from "react";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as B from "@/styles/baseButtons.style";
import * as T from "@/styles/baseText.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import { IFormRegisrerClient } from "./RegisterClient";
import { Controller, UseFormReturn } from "react-hook-form";
import { BottomAuth, StepRegister2 } from "../../auth.style";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";

interface IProps {
  indexTab: number;
  setIndexTab: (step: number) => void;
  formControl: UseFormReturn<IFormRegisrerClient>;
  textButton: string;
  statusLoad: boolean;
}

const StepTwoClient: FC<IProps> = ({
  indexTab,
  setIndexTab,
  formControl,
  textButton,
  statusLoad
}) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = formControl;

  return (
    <StepRegister2 step={indexTab}>
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
        <T.TextForm>Ваша область и город </T.TextForm>
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
      <BottomAuth>
        <B.FormButton type="button" onClick={() => setIndexTab(1)}>
          Назад
        </B.FormButton>
        <B.FormButton>
          {textButton}
          {statusLoad ? <MiniLoader /> : ""}
        </B.FormButton>
      </BottomAuth>
    </StepRegister2>
  );
};

export default StepTwoClient;
