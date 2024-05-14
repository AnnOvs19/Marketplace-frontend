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
import { ProfileText, TitleSection } from "@/styles/baseText.style";

const HeadUser = () => {
  return (
    <S.HeadAccount>
      <S.Avatar>
        <Image
          src={avatar}
          alt="The users avatar"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </S.Avatar>
      <S.AvatarInfo>
        <S.InfoHeader>
          <TitleSection>Покупатель Покупателевич</TitleSection>
          <Link href="/editAccountUser">
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
        <ProfileText>email1111@gmail.com</ProfileText>
        <ProfileText>Город, адрес</ProfileText>
        <BaseButton onClick={() => signOut({ callbackUrl: "/" })}>
          Выйти из кабинета
        </BaseButton>
      </S.AvatarInfo>
    </S.HeadAccount>
  );
};

export default HeadUser;
