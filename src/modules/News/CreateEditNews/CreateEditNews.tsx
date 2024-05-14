"use client";

import React, { useState } from "react";
import * as S from "./createEditNews.style";
import * as T from "@/styles/baseText.style";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import Image from "next/image";
import FileInput from "@/ui/Inputs/FileInput/FileInput";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";
import { Controller, useForm } from "react-hook-form";
import TextAreaForm from "@/ui/TextArea/TextAreaForm/TextAreaForm";
import InputForm from "@/ui/Inputs/InputForm/InputForm";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { FileButton, FormButton } from "@/styles/baseButtons.style";

interface ICreateEditNews {
  title: string;
  text: string;
  image?: FileList;
}

const defaultValues: ICreateEditNews = {
  title: "",
  text: ""
};

const CreateEditNews = () => {
  const [photo, setPhoto] = useState<string[]>([]);
  const [imageData, setImageData] = useState<FileList>();
  const [validPhoto, setValidPhoto] = useState<boolean>(true);

  const [textButton, setTextButton] = useState<string>("Создать пост");
  const [statusLoad, setStatusLoad] = useState<boolean>(false);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<ICreateEditNews>({ defaultValues, mode: "onChange" });

  function submit(data: ICreateEditNews) {
    console.log(data);
    if (photo.length !== 0) {
      setTextButton("Сохранение данных...");
      setStatusLoad(true);
      setValidPhoto(true);
      reset();
    } else {
      setValidPhoto(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const loadedImage = e.target.files;
    setImageData(loadedImage!);
    const arrayPhoto = [];
    if (loadedImage!.length < 11) {
      for (let key in loadedImage!) {
        if (loadedImage[key] instanceof File) {
          const element = loadedImage[key];
          const imageBlob = URL.createObjectURL(element);
          arrayPhoto.push(imageBlob);
          setPhoto(arrayPhoto);
        }
      }
    }
  }

  console.log(photo);

  return (
    <S.CreateNews onSubmit={handleSubmit(submit)}>
      <T.TitleForm>Создание новостного поста</T.TitleForm>
      <S.InfoBox>
        <U.BodyInputWrapper>
          <T.TextForm>Название статьи</T.TextForm>
          <Controller
            name="title"
            rules={{ required: true, minLength: 5, maxLength: 200 }}
            control={control}
            render={({ field: { value, onChange }, fieldState }) => (
              <InputForm
                placeholder="Название вашего магазина"
                type="text"
                name="title"
                value={value}
                onChange={onChange}
                errors={fieldState.invalid}
              />
            )}
          />
          {errors.title && (
            <U.ErrorMessage>
              Введите заголовок статьи не менее 5 и не более 200 символов
            </U.ErrorMessage>
          )}
        </U.BodyInputWrapper>
        <U.BodyInputWrapper>
          <T.TextForm>Напишите текст своей статьи</T.TextForm>
          <Controller
            name="text"
            control={control}
            rules={{ required: true, minLength: 10, maxLength: 1000 }}
            render={({ field: { value, onChange }, fieldState }) => (
              <TextAreaForm
                placeholder="Текст вашего поста"
                name="text"
                errors={fieldState.invalid}
                value={value}
                onChange={onChange}
              />
            )}
          />
          {errors.text && (
            <U.ErrorMessage>
              Напишите текст не короче 10 и не более 1000 символов
            </U.ErrorMessage>
          )}
        </U.BodyInputWrapper>
      </S.InfoBox>
      <S.PhotoList>
        {photo.map((element, index) => {
          return (
            <S.PhotoItem key={index}>
              <Image
                src={element}
                alt="photo of a news post"
                fill
                style={{
                  objectFit: "cover"
                }}
              />
            </S.PhotoItem>
          );
        })}
      </S.PhotoList>
      <S.PhotoListMobile>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={"auto"}
          speed={500}
        >
          {photo.map((elem, index) => {
            return (
              <SwiperSlide key={index}>
                <S.PhotoItem>
                  <Image
                    src={elem}
                    alt="photo of a news post"
                    fill
                    style={{
                      objectFit: "cover"
                    }}
                  />
                </S.PhotoItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.PhotoListMobile>
      <FileButton>
        <FileInput accept="image/*" onChange={(e) => handleChange(e)} />
        Добавить фото
      </FileButton>
      {!validPhoto && (
        <U.ErrorMessage>
          Для загрузки поста необходима хотя бы одна фотография
        </U.ErrorMessage>
      )}
      <T.SmallText>Вы можете загрузить не более 10 фотографий</T.SmallText>

      <FormButton>
        {textButton}
        {statusLoad ? <MiniLoader /> : ""}
      </FormButton>
    </S.CreateNews>
  );
};

export default CreateEditNews;
