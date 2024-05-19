"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterForm } from "../../auth.style";
import StepOneClient from "./StepOneClient";
import StepTwoClient from "./StepTwoClient";
import { IRegisrerClient } from "@/interfaces/users/client";
import axios from "@/helpers/axios";

const defaultValues: IRegisrerClient = {
  username: "",
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

  async function submit(data: IRegisrerClient) {
    data.role = "Client";
    setTextButton("Регистрация...");
    console.log(data);
    setStatusLoad(true);
    formControl.reset();

    const res = await axios.post("api/auth/local/register", data);

    console.log(res.data);
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
