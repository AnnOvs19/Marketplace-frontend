"use client";

import React, { FC } from "react";
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
import { ISeller } from "@/interfaces/users/seller";

interface IProps {
  sellerMe: ISeller;
}

const HeadSeller: FC<IProps> = ({ sellerMe }) => {
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
          <TitleSection>{sellerMe.username}</TitleSection>
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
        <SubTitle>{sellerMe.store?.storeName}</SubTitle>
        <ProfileText>{sellerMe.email}</ProfileText>
        <ProfileText>
          {sellerMe.sity}, {sellerMe.adress}
        </ProfileText>
        <BaseButton
          style={{ marginTop: "10px" }}
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
