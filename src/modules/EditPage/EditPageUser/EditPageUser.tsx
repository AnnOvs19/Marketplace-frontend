"use client";

import React, { useState } from "react";
import * as S from "../editPage.style";
import * as T from "@/styles/baseText.style";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import { Controller, useForm } from "react-hook-form";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";
import { FormButton } from "@/styles/baseButtons.style";

export interface IEditPageUser {
  name: string;
  phone: string;
  email: string;
  sity: string;
  adress: string;
}

const defaultValues: IEditPageUser = {
  name: "",
  phone: "",
  email: "",
  sity: "",
  adress: ""
};

const EditPageUser = () => {
  const [textButton, setTextButton] = useState<string>(
    "Редактировать информацию о себе"
  );
  const [statusLoad, setStatusLoad] = useState<boolean>(false);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<IEditPageUser>({ defaultValues, mode: "onChange" });

  function submit(data: IEditPageUser) {
    console.log(data);
    setTextButton("Сохранение данных...");
    setStatusLoad(true);
    reset();
  }
  return (
    <S.EditForm onSubmit={handleSubmit(submit)}>
      <T.TitleForm>Редактирование профиля покупателя</T.TitleForm>
      <S.EditBody>
        <S.SelBodyInfo>
          <S.EditItemBox>
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
                <U.ErrorMessage>
                  Введите ФИО не короче пяти символов
                </U.ErrorMessage>
              )}
            </U.BodyInputWrapper>
            <U.BodyInputWrapper>
              <T.TextForm>Номер телефона</T.TextForm>
              <Controller
                name="phone"
                rules={{
                  required: true,
                  minLength: 5,
                  pattern:
                    /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
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
                <U.ErrorMessage>
                  Введите корректный номер телефона
                </U.ErrorMessage>
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
          </S.EditItemBox>
          <S.EditItemBox>
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
                  Введите название области и города проживания не короче 10
                  символов
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
          </S.EditItemBox>
        </S.SelBodyInfo>
      </S.EditBody>
      <FormButton>
        {textButton}
        {statusLoad ? <MiniLoader /> : ""}
      </FormButton>
    </S.EditForm>
  );
};

export default EditPageUser;
