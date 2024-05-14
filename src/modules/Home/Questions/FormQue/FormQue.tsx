"use client";

import React, { useState } from "react";
import * as S from "./formQue.style";
import * as T from "@/styles/baseText.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import TextAreaForm from "@/ui/TextArea/TextAreaForm/TextAreaForm";
import { Controller, useForm } from "react-hook-form";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";
import { FormButton } from "@/styles/baseButtons.style";

interface IFormQuestions {
  name: string;
  email: string;
  massage: string;
}

const defaultValues: IFormQuestions = {
  name: "",
  email: "",
  massage: ""
};

const FormQue = () => {
  const [textButton, setTextButton] = useState<string>("Отправить вопрос");
  const [statusLoad, setStatusLoad] = useState<boolean>(false);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<IFormQuestions>({ defaultValues, mode: "onChange" });

  function submit(data: IFormQuestions) {
    console.log(data);
    setTextButton("Отправка...");
    setStatusLoad(true);
    reset();
  }

  return (
    <S.FormQueWraper onSubmit={handleSubmit(submit)}>
      <T.TitleForm>Ещё остались вопросы?</T.TitleForm>
      <U.BodyInputWrapper>
        <T.TextForm>Введите своё имя*</T.TextForm>
        <Controller
          name="name"
          rules={{ required: true, minLength: 5 }}
          control={control}
          render={({ field: { value, onChange }, fieldState }) => (
            <InputForm
              placeholder="Ваше ФИO"
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
        <T.TextForm>Введите свой email*</T.TextForm>
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
        <T.TextForm>Напишите свой вопроc*</T.TextForm>
        <Controller
          name="massage"
          control={control}
          rules={{ required: true, minLength: 10 }}
          render={({ field: { value, onChange }, fieldState }) => (
            <TextAreaForm
              placeholder="Ваш вопрос"
              name="massage"
              errors={fieldState.invalid}
              value={value}
              onChange={onChange}
            />
          )}
        />
        {errors.massage && (
          <U.ErrorMessage>
            Введите сообщение не короче 10 симфолов
          </U.ErrorMessage>
        )}
      </U.BodyInputWrapper>
      <FormButton>
        {textButton}
        {statusLoad ? <MiniLoader /> : ""}
      </FormButton>
    </S.FormQueWraper>
  );
};

export default FormQue;
