"use client";

import React, { FC } from "react";

import * as S from "../createEditProduct.style";
import * as B from "@/styles/baseButtons.style";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as T from "@/styles/baseText.style";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import Image from "next/image";
import FileInput from "@/ui/Inputs/FileInput/FileInput";
import MiniLoader from "@/ui/Loading/MiniLoader/MiniLoader";

interface IProps {
  indexTab: number;
  setIndexTab: (step: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  photo: string[];
  validPhoto: boolean;
  textButton: string;
  statusLoad: boolean;
}

const StepThreeProduct: FC<IProps> = ({
  indexTab,
  setIndexTab,
  handleChange,
  photo,
  validPhoto,
  textButton,
  statusLoad
}) => {
  return (
    <S.StepProduct3 step={indexTab}>
      <S.ImageList>
        {photo.map((element, index) => {
          return (
            <S.ImageItem key={index}>
              <Image
                src={element}
                alt="photo of a news post"
                fill
                style={{
                  objectFit: "cover"
                }}
              />
            </S.ImageItem>
          );
        })}
      </S.ImageList>
      <S.ImageListMobile>
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
                <S.ImageItem>
                  <Image
                    src={elem}
                    alt="photo of a news post"
                    fill
                    style={{
                      objectFit: "cover"
                    }}
                  />
                </S.ImageItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.ImageListMobile>
      <B.FileButton>
        <FileInput accept="image/*" onChange={(e) => handleChange(e)} />
        Добавить фото
      </B.FileButton>
      {!validPhoto && (
        <S.Notice>
          <U.ErrorMessage>
            Для загрузки поста необходима хотя бы одна фотография
          </U.ErrorMessage>
        </S.Notice>
      )}
      <S.Notice>
        <T.SmallText>Вы можете загрузить не более 6 фотографий</T.SmallText>
      </S.Notice>

      <S.BottomProduct>
        <B.FormButton type="button" onClick={() => setIndexTab(2)}>
          Назад
        </B.FormButton>
        <B.FormButton>
          {textButton}
          {statusLoad ? <MiniLoader /> : ""}
        </B.FormButton>
      </S.BottomProduct>
    </S.StepProduct3>
  );
};

export default StepThreeProduct;
