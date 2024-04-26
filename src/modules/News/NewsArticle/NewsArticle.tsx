"use client";

import React, { FC } from "react";
import * as S from "./newsArticle.style";
import * as T from "@/styles/baseText.style";
import Image from "next/image";
import { INewsMock } from "../mockDelNews";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

interface IProps {
  item: INewsMock;
}

const NewsArticle: FC<IProps> = ({ item }) => {
  // const text = item.text.split("\n").map((str) => <>{str}</>);

  return (
    <S.ArticleWrapper>
      <S.ArticleBox>
        <S.ImageList>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={"auto"}
            speed={500}
          >
            {item.img.map((elem, index) => {
              return (
                <SwiperSlide key={index}>
                  <S.ArticleImage>
                    <Image
                      src={elem}
                      alt="Main image article"
                      fill
                      style={{
                        objectFit: "cover"
                      }}
                    />
                  </S.ArticleImage>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </S.ImageList>
        <S.InfoBox>
          <T.TitleSection>{item.title}</T.TitleSection>
          <T.TextMedium>{item.text}</T.TextMedium>
        </S.InfoBox>
      </S.ArticleBox>
    </S.ArticleWrapper>
  );
};

export default NewsArticle;
