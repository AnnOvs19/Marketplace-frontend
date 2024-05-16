"use client";

import React from "react";
import * as S from "../accountHead.style";
import * as I from "@/styles/baseIcons.style";

import Image from "next/image";
import avatar from "@/assets/images/noAvatar.jpg";
import edit from "@/assets/icons/editIcon.svg";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { BaseButton } from "@/styles/baseButtons.style";
import { SubTitle, TitleSection } from "@/styles/baseTitle.style";
import { ProfileText } from "@/styles/baseText.style";

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
          <TitleSection>Продавец продавцович</TitleSection>
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
        <SubTitle>Название магазина</SubTitle>
        <ProfileText>email1111@gmail.com</ProfileText>
        <ProfileText>Город, адрес</ProfileText>
        <BaseButton
          onClick={() => {
            signOut({ callbackUrl: "/" });
            localStorage.clear();
          }}
        >
          Выйти из кабинета
        </BaseButton>
      </S.AvatarInfo>
    </S.HeadAccount>
  );
};

export default HeadSeller;
