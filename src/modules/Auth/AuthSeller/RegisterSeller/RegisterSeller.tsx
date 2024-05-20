"use client";

import React, { useState } from "react";
import StepOneSeller from "./StepOneSeller";
import StepTwoSeller from "./StepTwoSeller";
import { RegisterForm } from "../../auth.style";
import { useForm } from "react-hook-form";
import { IRegisrerSeller } from "@/interfaces/users/seller";
import axios from "@/helpers/axios";
import { useRouter } from "next/navigation";

const defaultValues: IRegisrerSeller = {
  username: "",
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

  const router = useRouter();

  const formControl = useForm<IRegisrerSeller>({
    defaultValues,
    mode: "onChange"
  });

  // 1 - Client
  // 2 - Public
  // 3 - Seller

  async function submit(data: IRegisrerSeller) {
    data.role = "3";
    setTextButton("Регистрация...");
    setStatusLoad(true);
    formControl.reset();

    const res = await axios.post("api/users", data);
    if (res.data) {
      createStore(res.data.id, data);
      setTextButton("Зарегистрироваться");
      setStatusLoad(false);
      alert("Регистрация прошла успешно! Можете зайти в свой аккаунт");
    }
  }

  async function createStore(id: any, data: IRegisrerSeller) {
    await axios.post("api/stores", {
      data: {
        user: {
          id: id
        },
        storeName: data.storeName
      }
    });
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
