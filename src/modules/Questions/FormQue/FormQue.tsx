"use client";

import React from "react";
import * as S from "./formQue.style";
import * as T from "@/styles/baseText.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as B from "@/styles/baseButtons.style";

const FormQue = () => {
  return (
    <S.FormQueWraper>
      <T.TitleForm>Ещё остались вопросы?</T.TitleForm>
      <U.BodyInputWrapper>
        <T.TextForm>Введите своё имя</T.TextForm>
        <InputForm placeholder="Введите своё имя" type="text" />
      </U.BodyInputWrapper>
      <U.BodyInputWrapper>
        <T.TextForm>Введите своё имя</T.TextForm>
        <InputForm placeholder="Введите своё имя" type="text" />
      </U.BodyInputWrapper>
      <U.BodyInputWrapper>
        <T.TextForm>Введите своё имя</T.TextForm>
        <InputForm placeholder="Введите своё имя" type="text" />
      </U.BodyInputWrapper>
      <B.FormButton>Отправить вопрос</B.FormButton>
    </S.FormQueWraper>
  );
};

export default FormQue;
