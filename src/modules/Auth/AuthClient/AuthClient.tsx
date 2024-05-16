"use client";

import React, { MouseEvent, useState } from "react";
import * as S from "../auth.style";
import LogInClient from "./LogInClient/LogInClient";
import RegisterClient from "./RegisterClient/RegisterClient";
import { TitleSection } from "@/styles/baseTitle.style";

const AuthClient = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  function toggleForm(event: MouseEvent<HTMLButtonElement>, type: number) {
    event.preventDefault();
    setActiveTab(type);
  }
  return (
    <S.AuthContainer>
      <TitleSection>Кабинет покупателя</TitleSection>
      <S.AuthWrap>
        <S.AuthHead>
          <S.HeadButton
            onClick={(event) => toggleForm(event, 0)}
            openTab={activeTab == 0 ? true : false}
          >
            Вход
          </S.HeadButton>
          <S.HeadButton
            onClick={(event) => toggleForm(event, 1)}
            openTab={activeTab == 1 ? true : false}
          >
            Регистрация
          </S.HeadButton>
        </S.AuthHead>
        <S.AuthBody>
          {activeTab == 0 ? <LogInClient /> : <RegisterClient />}
        </S.AuthBody>
      </S.AuthWrap>
    </S.AuthContainer>
  );
};

export default AuthClient;
