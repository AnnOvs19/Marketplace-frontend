"use client";

import React from "react";
import * as S from "../accountHead.style";
import * as T from "@/styles/baseText.style";
import * as I from "@/styles/baseIcons.style";
import * as B from "@/styles/baseButtons.style";
import Image from "next/image";
import avatar from "@/assets/images/clavs.jpg";
import edit from "@/assets/icons/editIcon.svg";
import { signOut } from "next-auth/react";

const HeadSeller = () => {
  return (
    <S.HeadAccount>
      <S.AvatarSeller>
        <Image
          src={avatar}
          alt="The seller's avatar"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </S.AvatarSeller>
      <S.AvatarInfo>
        <S.InfoHeader>
          <T.TitleSection>Пупс Пупсович</T.TitleSection>
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
        </S.InfoHeader>
        <T.SubTitle>Название магазина</T.SubTitle>
        <T.TextMedium>email1111@gmail.com</T.TextMedium>
        <T.TextMedium>Город, адрес</T.TextMedium>
        <B.BaseButton onClick={() => signOut({ callbackUrl: "/" })}>
          Выйти из кабинета
        </B.BaseButton>
      </S.AvatarInfo>
    </S.HeadAccount>
  );
};

export default HeadSeller;
