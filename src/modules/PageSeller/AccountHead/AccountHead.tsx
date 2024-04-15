"use client";

import React from "react";
import * as S from "./accountHead.style";
import * as T from "@/styles/baseText.style";
import * as I from "@/styles/baseIcons.style";
import Image from "next/image";
import avatar from "@/assets/images/clavs.jpg";
import edit from "@/assets/icons/editIcon.svg";

const AccountHead = () => {
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
        <T.TextMedium>email1111@gmail.com</T.TextMedium>
      </S.AvatarInfo>
    </S.HeadAccount>
  );
};

export default AccountHead;
