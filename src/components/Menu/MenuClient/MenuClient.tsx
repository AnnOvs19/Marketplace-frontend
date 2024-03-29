"use client";

import React from "react";
import * as S from "./menuClient.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import * as I from "@/styles/baseIcons.style";

import Image from "next/image";
import logo from "@/assets/icons/mainLogo.svg";

const MenuClient = () => {
  return (
    <S.MenuWrapper>
      <I.LogoBox>
        <I.LogoIcon>
          <Image
            src={logo}
            alt="The logo of the entire site"
            fill
            style={{
              objectFit: "cover"
            }}
          />
          ;
        </I.LogoIcon>
        <T.LogoTextMenu>Marketech</T.LogoTextMenu>
      </I.LogoBox>
      <S.MenuNavigation>
        <T.MenuText>Главная</T.MenuText>
        <T.MenuText>Блог</T.MenuText>
        <T.MenuText>Каталог</T.MenuText>
        <T.MenuText>Корзина</T.MenuText>
      </S.MenuNavigation>
      <B.HeaderButton>Вы продавец?</B.HeaderButton>
    </S.MenuWrapper>
  );
};

export default MenuClient;
