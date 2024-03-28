"use client";

import React from "react";
import * as T from "@/styles/baseText.style";
import * as S from "./headerClient.style";
import * as B from "@/styles/baseButtons.style";
import * as I from "@/styles/baseIcons.style";

import logo from "@/assets/icons/mainLogo.svg";
import basket from "@/assets/icons/basketHeader.svg";
import Image from "next/image";

const HeaderClient = () => {
  return (
    <S.HeaderWraper>
      <S.HeaderBox>
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
          </I.LogoIcon>
          <T.LogoText>Marketech</T.LogoText>
        </I.LogoBox>
        <S.Navigation>
          <T.LinkText>Главная</T.LinkText>
          <T.LinkText>Блог</T.LinkText>
          <T.LinkText>Каталог</T.LinkText>
          <I.BasketIcon>
            <Image
              src={basket}
              alt="The page with the shopping cart"
              fill
              style={{
                objectFit: "cover"
              }}
            />
            <S.CountBasket>0</S.CountBasket>
          </I.BasketIcon>
          <B.NavButton>
            <T.ButtonText>Вы продавец?</T.ButtonText>
          </B.NavButton>
        </S.Navigation>
      </S.HeaderBox>
    </S.HeaderWraper>
  );
};

export default HeaderClient;
