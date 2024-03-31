"use client";

import React, { FC, useState } from "react";
import * as S from "./menuClient.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import * as I from "@/styles/baseIcons.style";
import * as C from "../menu.style";

import Image from "next/image";
import logo from "@/assets/icons/mainLogo.svg";

interface IProps {
  openMenu: boolean;
}

const MenuClient: FC<IProps> = ({ openMenu }) => {
  return (
    <S.MenuClientWrapper openMenu={openMenu}>
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
      <C.MenuNavigation>
        <T.MenuText>Главная</T.MenuText>
        <T.MenuText>Блог</T.MenuText>
        <T.MenuText>Каталог</T.MenuText>
        <T.MenuText>Корзина</T.MenuText>
      </C.MenuNavigation>
      <B.HeaderButton>Вы продавец?</B.HeaderButton>
    </S.MenuClientWrapper>
  );
};

export default MenuClient;
