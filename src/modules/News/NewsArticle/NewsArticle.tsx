"use client";

import React, { FC } from "react";
import * as S from "./newsArticle.style";
import * as T from "@/styles/baseText.style";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import { INewsItem } from "@/interfaces/news/newsItem";

interface IProps {
  item: INewsItem;
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
            {item.image.map((elem, index) => {
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
