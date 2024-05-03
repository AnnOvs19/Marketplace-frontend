"use client";

import React, { useState } from "react";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as B from "@/styles/baseButtons.style";
import * as T from "@/styles/baseText.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import { Controller, useForm } from "react-hook-form";
import { LoginForm } from "../../auth.style";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";
import { ILoginSeller } from "@/interfaces/users/seller";

const defaultValues: ILoginSeller = {
  storeName: "",
  password: "",
  name: ""
};

const LogInSeller = () => {
  const [textButton, setTextButton] = useState<string>(
    "Войти в личный кабинет"
  );
  const [statusLoad, setStatusLoad] = useState<boolean>(false);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<ILoginSeller>({ defaultValues, mode: "onChange" });

  function submit(data: ILoginSeller) {
    console.log(data);
    setTextButton("Вход...");
    setStatusLoad(true);
    reset();
  }

  return (
    <LoginForm onSubmit={handleSubmit(submit)}>
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
        <T.TextForm>Введите свой пароль</T.TextForm>
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
              placeholder="Введите ваш пароль"
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
            В пароле должны быть цифры, строчные и заглавные латинские буквы,
            длина не менее 6 символов
          </U.ErrorMessage>
        )}
      </U.BodyInputWrapper>
      <B.FormButton>
        {textButton}
        {statusLoad ? <MiniLoader /> : ""}
      </B.FormButton>
    </LoginForm>
  );
};

export default LogInSeller;
