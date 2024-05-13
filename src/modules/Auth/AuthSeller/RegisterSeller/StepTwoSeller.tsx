"use client";

import React, { FC } from "react";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as B from "@/styles/baseButtons.style";
import * as T from "@/styles/baseText.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import { BottomAuth, StepRegister2 } from "../../auth.style";
import { Controller, UseFormReturn } from "react-hook-form";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";
import { IRegisrerSeller } from "@/interfaces/users/seller";

interface IProps {
  indexTab: number;
  setIndexTab: (step: number) => void;
  formControl: UseFormReturn<IRegisrerSeller>;
  textButton: string;
  statusLoad: boolean;
}

const StepTwoSeller: FC<IProps> = ({
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
        <T.TextForm>Название вашего магазина</T.TextForm>
        <Controller
          name="storeName"
          rules={{ required: true, minLength: 5 }}
          control={control}
          render={({ field: { value, onChange }, fieldState }) => (
            <InputForm
              placeholder="Название вашего магазина"
              type="text"
              name="storeName"
              value={value}
              onChange={onChange}
              errors={fieldState.invalid}
            />
          )}
        />
        {errors.storeName && (
          <U.ErrorMessage>
            Введите название своего магазина не короче пяти символов
          </U.ErrorMessage>
        )}
      </U.BodyInputWrapper>
      <U.BodyInputWrapper>
        <T.TextForm>Область и город для вашего бизнеса</T.TextForm>
        <Controller
          name="sity"
          rules={{ required: true, minLength: 10 }}
          control={control}
          render={({ field: { value, onChange }, fieldState }) => (
            <InputForm
              placeholder="Ваша область и город проживания"
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
        <T.TextForm>Введите адрес своего склада</T.TextForm>
        <Controller
          name="adress"
          rules={{ required: true, minLength: 10 }}
          control={control}
          render={({ field: { value, onChange }, fieldState }) => (
            <InputForm
              placeholder="Адрес склада вашего магазина"
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
            Введите адрес своего склада не короче 10 символов
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

export default StepTwoSeller;
