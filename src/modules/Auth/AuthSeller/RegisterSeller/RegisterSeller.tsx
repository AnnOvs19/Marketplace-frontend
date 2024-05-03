"use client";

import React, { useState } from "react";
import StepOneSeller from "./StepOneSeller";
import StepTwoSeller from "./StepTwoSeller";
import { RegisterForm } from "../../auth.style";
import { useForm } from "react-hook-form";
import { IRegisrerSeller } from "@/interfaces/users/seller";

const defaultValues: IRegisrerSeller = {
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

  const formControl = useForm<IRegisrerSeller>({
    defaultValues,
    mode: "onChange"
  });

  function submit(data: IRegisrerSeller) {
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
