"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterForm } from "../../auth.style";
import StepOneClient from "./StepOneClient";
import StepTwoClient from "./StepTwoClient";
import { IRegisrerClient } from "@/interfaces/users/client";
import axios from "@/helpers/axios";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  const formControl = useForm<IRegisrerClient>({
    defaultValues,
    mode: "onChange"
  });

  // 1 - Client
  // 2 - Public
  // 3 - Seller

  async function submit(data: IRegisrerClient) {
    data.role = "1";
    setTextButton("Регистрация...");
    console.log(data);
    setStatusLoad(true);
    formControl.reset();

    const res = await axios.post("api/users", data);
    if (res.data) {
      createBasket(res.data.id);
      setTextButton("Зарегистрироваться");
      setStatusLoad(false);
      alert("Регистрация прошла успешно! Можете зайти в свой аккаунт");
    }
  }

  async function createBasket(id: any) {
    await axios.post("api/baskets", {
      data: {
        client: {
          id: id
        }
      }
    });
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
