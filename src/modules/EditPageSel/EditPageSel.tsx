"use client";

import React from "react";
import * as S from "./editPageSel.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import Image from "next/image";
import avatar from "@/assets/images/clavs.jpg";
import { InputFile } from "@/ui/Inputs/FileInput/fileInput.style";

const EditPageSel = () => {
  return (
    <S.EditForm>
      <T.TitleForm>Редактирование профиля</T.TitleForm>
      <S.EditSelBody>
        <S.SelBodyAvatar>
          <S.SellerPhoto>
            <Image
              src={avatar}
              alt="The seller's avatar"
              fill
              style={{
                objectFit: "cover"
              }}
            />
          </S.SellerPhoto>
          <B.BaseButton>
            <InputFile accept="image/*" name={"img"} />
          </B.BaseButton>
        </S.SelBodyAvatar>
        <S.SelBodyInfo>
          <U.BodyInputWrapper>
            <T.TextForm>Введите своё имя</T.TextForm>
            <InputForm placeholder="Введите своё имя" type="text" />
          </U.BodyInputWrapper>
          <U.BodyInputWrapper>
            <T.TextForm>Введите своё имя</T.TextForm>
            <InputForm placeholder="Введите своё имя" type="text" />
          </U.BodyInputWrapper>
          <U.BodyInputWrapper>
            <T.TextForm>Введите своё имя</T.TextForm>
            <InputForm placeholder="Введите своё имя" type="text" />
          </U.BodyInputWrapper>
        </S.SelBodyInfo>
      </S.EditSelBody>
      <B.FormButton>Сохранить</B.FormButton>
    </S.EditForm>
  );
};

export default EditPageSel;
