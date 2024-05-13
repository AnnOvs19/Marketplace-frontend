"use client";

import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LoginForm } from "../../auth.style";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as B from "@/styles/baseButtons.style";
import * as T from "@/styles/baseText.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";
import { ILoginClient } from "@/interfaces/users/client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const defaultValues: ILoginClient = {
  name: "",
  password: ""
};

const LogInClient = () => {
  const session = useSession();

  const router = useRouter();

  const [textButton, setTextButton] = useState<string>(
    "Войти в личный кабинет"
  );
  const [statusLoad, setStatusLoad] = useState<boolean>(false);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<ILoginClient>({ defaultValues, mode: "onChange" });

  async function submit(data: ILoginClient) {
    setTextButton("Вход...");
    setStatusLoad(true);
    reset();

    const response = await signIn("credentials", {
      identifier: data.name,
      password: data.password,
      redirect: false
    });

    if (response?.ok) {
      setTextButton("Добро пожаловать");
      setStatusLoad(false);
      router.push("/accountUser");
    }
  }

  useEffect(() => {
    if (session.data) {
      localStorage.setItem("token", JSON.stringify(session.data?.user.token));
    }
  }, [session]);

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

      <B.FormButton type="submit">
        {textButton}
        {statusLoad ? <MiniLoader /> : ""}
      </B.FormButton>
    </LoginForm>
  );
};

export default LogInClient;
