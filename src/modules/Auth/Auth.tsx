"use client";

import React, { MouseEvent, useState } from "react";
import * as S from "./auth.style";
import Login from "./Login/Login";
import Reagister from "./Register/Reagister";

const Auth = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  function toggleForm(event: MouseEvent<HTMLButtonElement>, type: number) {
    event.preventDefault();
    setActiveTab(type);
  }

  return (
    <S.AuthForm>
      <S.AuthHead>
        <S.HeadButton onClick={(event) => toggleForm(event, 0)}>
          Вход
        </S.HeadButton>
        <S.HeadButton onClick={(event) => toggleForm(event, 1)}>
          Регистрация
        </S.HeadButton>
      </S.AuthHead>
      <S.AuthBody>{activeTab == 0 ? <Login /> : <Reagister />}</S.AuthBody>
    </S.AuthForm>
  );
};

export default Auth;
