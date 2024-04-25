"use client";

import React, { useState } from "react";
import * as S from "./editPageSel.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import Image, { StaticImageData } from "next/image";
import noAvatarImage from "@/assets/images/noAvatar.jpg";
import FileInput from "@/ui/Inputs/FileInput/FileInput";

const EditPageSel = () => {
  const [noAvatar, setNoAvatar] = useState<StaticImageData | string>(
    noAvatarImage
  );
  const [imageData, setImageData] = useState<File>();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const loadedImage = e.target.files && e.target.files[0];
    setImageData(loadedImage!);
    setNoAvatar(URL.createObjectURL(loadedImage!));
  }
  console.log(imageData);
  return (
    <S.EditForm>
      <T.TitleForm>Редактирование профиля</T.TitleForm>
      <S.EditSelBody>
        <S.SelBodyAvatar>
          <S.SellerPhoto>
            <Image
              src={noAvatar}
              alt="The seller's avatar"
              fill
              style={{
                objectFit: "cover"
              }}
            />
          </S.SellerPhoto>
          <B.FileButton>
            <FileInput accept="image/*" onChange={(e) => handleChange(e)} />
            Добавить фото
          </B.FileButton>
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
