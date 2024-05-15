"use client";

import React, { FC } from "react";
import * as T from "@/styles/baseText.style";
import * as S from "./headerDesktop.style";
import * as I from "@/styles/baseIcons.style";
import * as C from "../Headers.style";

import logo from "@/assets/icons/mainLogo.svg";
import basket from "@/assets/icons/basketHeader.svg";
import profile from "@/assets/icons/profileHeader.svg";
import Image from "next/image";

import Link from "next/link";
import { IClient } from "@/interfaces/users/client";
import { ISeller } from "@/interfaces/users/seller";
import { HeaderButton } from "@/styles/baseButtons.style";

interface IProps {
  userInfo: ISeller | IClient;
}

const HeaderDesktop: FC<IProps> = ({ userInfo }) => {
  return (
    <C.HeaderDesktopWrapper>
      <C.Header>
        <C.HeaderBox>
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
          {!userInfo ? (
            <S.Navigation>
              <Link href="/">
                <T.LinkText>Главная</T.LinkText>
              </Link>
              <Link href="/blog">
                <T.LinkText>Блог</T.LinkText>
              </Link>

              <Link href="/catalog">
                <T.LinkText>Каталог</T.LinkText>
              </Link>
              <Link href="/loginSeller">
                <HeaderButton>Вы продавец?</HeaderButton>
              </Link>
            </S.Navigation>
          ) : userInfo?.role?.name == "Seller" ? (
            <S.Navigation>
              <Link href="/myProducts">
                <T.LinkText>Мои товары</T.LinkText>
              </Link>
              <Link href="/allOrdersClient">
                <T.LinkText>Все заказы</T.LinkText>
              </Link>
              <Link href="myNews">
                <T.LinkText>Мой блог</T.LinkText>
              </Link>
              <Link href="/accountSeller">
                <I.BasketIcon>
                  <Image
                    src={profile}
                    alt="The page profile user"
                    fill
                    style={{
                      objectFit: "cover"
                    }}
                  />
                </I.BasketIcon>
              </Link>
            </S.Navigation>
          ) : (
            <S.Navigation>
              <Link href="/">
                <T.LinkText>Главная</T.LinkText>
              </Link>
              <Link href="/blog">
                <T.LinkText>Блог</T.LinkText>
              </Link>

              <Link href="/catalog">
                <T.LinkText>Каталог</T.LinkText>
              </Link>
              <Link href="/myOrders">
                <T.LinkText>Мои заказы</T.LinkText>
              </Link>
              <Link href="/accountUser">
                <I.BasketIcon>
                  <Image
                    src={profile}
                    alt="The page profile user"
                    fill
                    style={{
                      objectFit: "cover"
                    }}
                  />
                </I.BasketIcon>
              </Link>
              <Link href="/basket">
                <I.BasketIcon>
                  <Image
                    src={basket}
                    alt="The page with the shopping cart"
                    fill
                    style={{
                      objectFit: "cover"
                    }}
                  />
                </I.BasketIcon>
              </Link>
            </S.Navigation>
          )}
        </C.HeaderBox>
      </C.Header>
    </C.HeaderDesktopWrapper>
  );
};

export default HeaderDesktop;
