"use client";

import React, { FC, useState } from "react";
import * as S from "./menuClient.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import * as I from "@/styles/baseIcons.style";

import Image from "next/image";
import logo from "@/assets/icons/mainLogo.svg";
import Link from "next/link";
import { ISeller } from "@/interfaces/users/seller";
import { IClient } from "@/interfaces/users/client";

interface IProps {
  openMenu: boolean;
  setOpenMenu: () => void;
  userInfo: ISeller | IClient;
}

const Menu: FC<IProps> = ({ openMenu, setOpenMenu, userInfo }) => {
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

      {!userInfo ? (
        <S.MenuNavigation>
          <Link href="/" onClick={setOpenMenu}>
            <T.MenuText>Главная</T.MenuText>
          </Link>
          <Link href="/blog" onClick={setOpenMenu}>
            <T.MenuText>Блог</T.MenuText>
          </Link>
          <Link href="/catalog" onClick={setOpenMenu}>
            <T.MenuText>Каталог</T.MenuText>
          </Link>
          <Link href="/basket" onClick={setOpenMenu}>
            <T.MenuText>Корзина</T.MenuText>
          </Link>
          <Link href="/loginSeller">
            <B.HeaderButton>Вы продавец?</B.HeaderButton>
          </Link>
        </S.MenuNavigation>
      ) : userInfo?.role?.name == "Seller" ? (
        <S.MenuNavigation>
          <T.LinkText>Мои товары</T.LinkText>
          <T.LinkText>Все заказы</T.LinkText>
          <Link href="/blog">
            <T.LinkText>Блог</T.LinkText>
          </Link>
          <T.LinkText>Профиль</T.LinkText>
        </S.MenuNavigation>
      ) : (
        <S.MenuNavigation>
          <Link href="/">
            <T.LinkText>Главная</T.LinkText>
          </Link>
          <Link href="/blog">
            <T.LinkText>Блог</T.LinkText>
          </Link>

          <Link href="/catalog">
            <T.LinkText>Каталог</T.LinkText>
          </Link>
          <T.LinkText>Мои заказы</T.LinkText>
          <T.LinkText>Профиль</T.LinkText>
          <Link href="/basket">
            <T.LinkText>Корзина</T.LinkText>
          </Link>
        </S.MenuNavigation>
      )}
    </S.MenuClientWrapper>
  );
};

export default Menu;
