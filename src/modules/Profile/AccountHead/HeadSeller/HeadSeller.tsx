"use client";

import React from "react";
import * as S from "../accountHead.style";
import * as T from "@/styles/baseText.style";
import * as I from "@/styles/baseIcons.style";
import * as B from "@/styles/baseButtons.style";

import Image from "next/image";
import avatar from "@/assets/images/noAvatar.jpg";
import edit from "@/assets/icons/editIcon.svg";

import { signOut } from "next-auth/react";
import Link from "next/link";

const HeadSeller = () => {
  return (
    <S.HeadAccount>
      <S.Avatar>
        <Image
          src={avatar}
          alt="The seller's avatar"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </S.Avatar>
      <S.AvatarInfo>
        <S.InfoHeader>
          <T.TitleSection>Продавец продавцович</T.TitleSection>
          <Link href="/editAccountSel">
            <I.EditIcon>
              <Image
                src={edit}
                alt="Edit a profile"
                fill
                style={{
                  objectFit: "contain"
                }}
              />
            </I.EditIcon>
          </Link>
        </S.InfoHeader>
        <T.SubTitle>Название магазина</T.SubTitle>
        <T.ProfileText>email1111@gmail.com</T.ProfileText>
        <T.ProfileText>Город, адрес</T.ProfileText>
        <B.BaseButton onClick={() => signOut({ callbackUrl: "/" })}>
          Выйти из кабинета
        </B.BaseButton>
      </S.AvatarInfo>
    </S.HeadAccount>
  );
};

export default HeadSeller;
