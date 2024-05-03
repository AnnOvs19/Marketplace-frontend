"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterForm } from "../../auth.style";
import StepOneClient from "./StepOneClient";
import StepTwoClient from "./StepTwoClient";
import { IRegisrerClient } from "@/interfaces/users/client";

const defaultValues: IRegisrerClient = {
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

  const formControl = useForm<IRegisrerClient>({
    defaultValues,
    mode: "onChange"
  });

  function submit(data: IRegisrerClient) {
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
