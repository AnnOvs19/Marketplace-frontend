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
import { ProfileText } from "@/styles/baseText.style";
import { TitleSection } from "@/styles/baseTitle.style";
import { IClient } from "@/interfaces/users/client";

interface IProps {
  clientMe: IClient;
}

const HeadUser: FC<IProps> = ({ clientMe }) => {
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
          <TitleSection>{clientMe.username}</TitleSection>
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
        <ProfileText>{clientMe.email}</ProfileText>
        <ProfileText>
          {clientMe.sity}, {clientMe.adress}
        </ProfileText>
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

export default HeadUser;
