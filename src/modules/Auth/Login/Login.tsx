"use client";

import React from "react";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as B from "@/styles/baseButtons.style";
import * as T from "@/styles/baseText.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";

const Login = () => {
  return (
    <>
      <U.BodyInputWrapper>
        <T.TextForm>Введите своё имя</T.TextForm>
        <InputForm placeholder="Введите своё имя" type="text" />
      </U.BodyInputWrapper>
      <U.BodyInputWrapper>
        <T.TextForm>Введите своё имя</T.TextForm>
        <InputForm placeholder="Введите своё имя" type="text" />
      </U.BodyInputWrapper>
      <B.FormButton>Войти в личный кабинет</B.FormButton>
    </>
  );
};

export default Login;
