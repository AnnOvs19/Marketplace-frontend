"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterForm } from "../../auth.style";
import StepOneClient from "./StepOneClient";
import StepTwoClient from "./StepTwoClient";

export interface IFormRegisrerClient {
  name: string;
  phone: string;
  email: string;
  password: string;
  sity: string;
  adress: string;
}

const defaultValues: IFormRegisrerClient = {
  name: "",
  phone: "",
  email: "",
  password: "",
  sity: "",
  adress: ""
};

const RegisterClient = () => {
  const [indexTab, setIndexTab] = useState<number>(1);
  const [textButton, setTextButton] = useState<string>("Зарегистрироваться");
  const [statusLoad, setStatusLoad] = useState<boolean>(false);

  const formControl = useForm<IFormRegisrerClient>({
    defaultValues,
    mode: "onChange"
  });

  function submit(data: IFormRegisrerClient) {
    console.log(data);
    setTextButton("Регистрация...");
    setStatusLoad(true);
    formControl.reset();
  }
  return (
    <RegisterForm onSubmit={formControl.handleSubmit(submit)}>
      <StepOneClient
        indexTab={indexTab}
        setIndexTab={setIndexTab}
        formControl={formControl}
      />
      <StepTwoClient
        indexTab={indexTab}
        textButton={textButton}
        statusLoad={statusLoad}
        setIndexTab={setIndexTab}
        formControl={formControl}
      />
    </RegisterForm>
  );
};

export default RegisterClient;
