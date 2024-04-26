"use client";

import React, { useState } from "react";
import StepOneSeller from "./StepOneSeller";
import StepTwoSeller from "./StepTwoSeller";
import { RegisterForm } from "../../auth.style";
import { useForm } from "react-hook-form";

export interface IFormRegisrerSeller {
  name: string;
  phone: string;
  email: string;
  password: string;
  storeName: string;
  sity: string;
  adress: string;
}

const defaultValues: IFormRegisrerSeller = {
  name: "",
  phone: "",
  email: "",
  password: "",
  storeName: "",
  sity: "",
  adress: ""
};

const RegisterSeller = () => {
  const [indexTab, setIndexTab] = useState<number>(1);
  const [textButton, setTextButton] = useState<string>("Зарегистрироваться");
  const [statusLoad, setStatusLoad] = useState<boolean>(false);

  const formControl = useForm<IFormRegisrerSeller>({
    defaultValues,
    mode: "onChange"
  });

  function submit(data: IFormRegisrerSeller) {
    console.log(data);
    setTextButton("Регистрация...");
    setStatusLoad(true);
    formControl.reset();
  }

  return (
    <RegisterForm onSubmit={formControl.handleSubmit(submit)}>
      <StepOneSeller
        indexTab={indexTab}
        setIndexTab={setIndexTab}
        formControl={formControl}
      />
      <StepTwoSeller
        indexTab={indexTab}
        textButton={textButton}
        statusLoad={statusLoad}
        setIndexTab={setIndexTab}
        formControl={formControl}
      />
    </RegisterForm>
  );
};

export default RegisterSeller;
