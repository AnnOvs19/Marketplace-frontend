"use client";

import React, { useState } from "react";
import * as S from "../editPage.style";
import * as T from "@/styles/baseText.style";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";
import Image, { StaticImageData } from "next/image";
import noAvatarImage from "@/assets/images/noAvatar.jpg";
import FileInput from "@/ui/Inputs/FileInput/FileInput";
import { Controller, useForm } from "react-hook-form";
import TextAreaForm from "@/ui/TextArea/TextAreaForm/TextAreaForm";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";
import { FileButton, FormButton } from "@/styles/baseButtons.style";

interface IEditPageSeller {
  storeName: string;
  aboutMe: string;
  sity: string;
  adress: string;
  name: string;
  phone: string;
  email: string;
}

const defaultValues: IEditPageSeller = {
  storeName: "",
  aboutMe: "",
  sity: "",
  adress: "",
  name: "",
  phone: "",
  email: ""
};

const EditPageSel = () => {
  const [noAvatar, setNoAvatar] = useState<StaticImageData | string>(
    noAvatarImage
  );
  const [imageData, setImageData] = useState<File>();
  const [textButton, setTextButton] = useState<string>(
    "Редактировать информацию о себе"
  );
  const [statusLoad, setStatusLoad] = useState<boolean>(false);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<IEditPageSeller>({ defaultValues, mode: "onChange" });

  function submit(data: IEditPageSeller) {
    console.log(data);
    setTextButton("Сохранение данных...");
    setStatusLoad(true);
    reset();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const loadedImage = e.target.files && e.target.files[0];
    setImageData(loadedImage!);
    setNoAvatar(URL.createObjectURL(loadedImage!));
  }

  return (
    <S.EditForm onSubmit={handleSubmit(submit)}>
      <T.TitleForm>Редактирование профиля продавца</T.TitleForm>
      <S.EditBody>
        <S.BodyAvatar>
          <S.Photo>
            <Image
              src={noAvatar}
              alt="The seller's avatar"
              fill
              style={{
                objectFit: "cover"
              }}
            />
          </S.Photo>
          <FileButton>
            <FileInput accept="image/*" onChange={(e) => handleChange(e)} />
            Добавить фото
          </FileButton>
        </S.BodyAvatar>
        <S.SelBodyInfo>
          <S.EditItemBox>
            <U.BodyInputWrapper>
              <T.TextForm>Название вашего магазина</T.TextForm>
              <Controller
                name="storeName"
                rules={{ required: true, minLength: 5 }}
                control={control}
                render={({ field: { value, onChange }, fieldState }) => (
                  <InputForm
                    placeholder="Название вашего магазина"
                    type="text"
                    name="storeName"
                    value={value}
                    onChange={onChange}
                    errors={fieldState.invalid}
                  />
                )}
              />
              {errors.storeName && (
                <U.ErrorMessage>
                  Введите название своего магазина не короче пяти символов
                </U.ErrorMessage>
              )}
            </U.BodyInputWrapper>
            <U.BodyInputWrapper>
              <T.TextForm>Напишите о своём магазине</T.TextForm>
              <Controller
                name="aboutMe"
                control={control}
                rules={{ required: true, minLength: 10 }}
                render={({ field: { value, onChange }, fieldState }) => (
                  <TextAreaForm
                    placeholder="Информация о магазине"
                    name="aboutMe"
                    errors={fieldState.invalid}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              {errors.aboutMe && (
                <U.ErrorMessage>
                  Напишите описание не короче 10 симфолов
                </U.ErrorMessage>
              )}
            </U.BodyInputWrapper>
            <U.BodyInputWrapper>
              <T.TextForm>Область и город для вашего бизнеса</T.TextForm>
              <Controller
                name="sity"
                rules={{ required: true, minLength: 10 }}
                control={control}
                render={({ field: { value, onChange }, fieldState }) => (
                  <InputForm
                    placeholder="Ваша область и город проживания"
                    type="text"
                    name="sity"
                    value={value}
                    onChange={onChange}
                    errors={fieldState.invalid}
                  />
                )}
              />
              {errors.sity && (
                <U.ErrorMessage>
                  Введите название области и города проживания не короче 10
                  символов
                </U.ErrorMessage>
              )}
            </U.BodyInputWrapper>
          </S.EditItemBox>
          <S.EditItemBox>
            <U.BodyInputWrapper>
              <T.TextForm>Введите адрес своего склада</T.TextForm>
              <Controller
                name="adress"
                rules={{ required: true, minLength: 10 }}
                control={control}
                render={({ field: { value, onChange }, fieldState }) => (
                  <InputForm
                    placeholder="Адрес склада вашего магазина"
                    type="text"
                    name="adress"
                    value={value}
                    onChange={onChange}
                    errors={fieldState.invalid}
                  />
                )}
              />
              {errors.adress && (
                <U.ErrorMessage>
                  Введите адрес своего склада не короче 10 символов
                </U.ErrorMessage>
              )}
            </U.BodyInputWrapper>
            <U.BodyInputWrapper>
              <T.TextForm>Введите своё имя</T.TextForm>
              <Controller
                name="name"
                rules={{ required: true, minLength: 5 }}
                control={control}
                render={({ field: { value, onChange }, fieldState }) => (
                  <InputForm
                    placeholder="Ваше ФИО"
                    type="text"
                    name="name"
                    value={value}
                    onChange={onChange}
                    errors={fieldState.invalid}
                  />
                )}
              />
              {errors.name && (
                <U.ErrorMessage>
                  Введите ФИО не короче пяти символов
                </U.ErrorMessage>
              )}
            </U.BodyInputWrapper>
            <U.BodyInputWrapper>
              <T.TextForm>Номер телефона</T.TextForm>
              <Controller
                name="phone"
                rules={{
                  required: true,
                  minLength: 5,
                  pattern:
                    /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
                }}
                control={control}
                render={({ field: { value, onChange }, fieldState }) => (
                  <InputForm
                    placeholder="Ваш номер телефона"
                    type="text"
                    name="phone"
                    value={value}
                    onChange={onChange}
                    errors={fieldState.invalid}
                  />
                )}
              />
              {errors.phone && (
                <U.ErrorMessage>
                  Введите корректный номер телефона
                </U.ErrorMessage>
              )}
            </U.BodyInputWrapper>
            <U.BodyInputWrapper>
              <T.TextForm>Введите email</T.TextForm>
              <Controller
                name="email"
                rules={{
                  required: true,
                  minLength: 5,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                }}
                control={control}
                render={({ field: { value, onChange }, fieldState }) => (
                  <InputForm
                    placeholder="Ваша почта"
                    type="text"
                    name="email"
                    value={value}
                    onChange={onChange}
                    errors={fieldState.invalid}
                  />
                )}
              />
              {errors.email && (
                <U.ErrorMessage>Введите корректный адрес почты</U.ErrorMessage>
              )}
            </U.BodyInputWrapper>
          </S.EditItemBox>
        </S.SelBodyInfo>
      </S.EditBody>
      <FormButton>
        {textButton}
        {statusLoad ? <MiniLoader /> : ""}
      </FormButton>
    </S.EditForm>
  );
};

export default EditPageSel;
