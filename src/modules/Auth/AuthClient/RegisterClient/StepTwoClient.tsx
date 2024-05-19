"use client";

import React, { FC } from "react";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import { Controller, UseFormReturn } from "react-hook-form";
import { BottomAuth, StepRegister2 } from "../../auth.style";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";
import { IRegisrerClient } from "@/interfaces/users/client";
import { FormButton } from "@/styles/baseButtons.style";
import { TextForm } from "@/styles/baseText.style";

interface IProps {
  indexTab: number;
  setIndexTab: (step: number) => void;
  formControl: UseFormReturn<IRegisrerClient>;
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
        <TextForm>Введите email</TextForm>
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
        <TextForm>Ваша область и город </TextForm>
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
      <BottomAuth>
        <FormButton type="button" onClick={() => setIndexTab(1)}>
          Назад
        </FormButton>
        <FormButton type="submit">
          {textButton}
          {statusLoad ? <MiniLoader /> : ""}
        </FormButton>
      </BottomAuth>
    </StepRegister2>
  );
};

export default StepTwoClient;
