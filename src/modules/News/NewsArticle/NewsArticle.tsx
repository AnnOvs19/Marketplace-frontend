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
import { LoaderImage } from "@/helpers/loaderImage";

interface IProps {
  newsPage: INewsItem;
}

const NewsArticle: FC<IProps> = ({ newsPage }) => {
  const text = newsPage.text
    .split("\n")
    .map((str) => <T.TextMedium>{str}</T.TextMedium>);

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
            {newsPage.image.map((elem, index) => {
              return (
                <SwiperSlide key={index}>
                  <S.ArticleImage>
                    <Image
                      loader={LoaderImage}
                      src={elem.url}
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
          <T.TitleSection>{newsPage.title}</T.TitleSection>
          <S.TextBox>{text}</S.TextBox>
        </S.InfoBox>
      </S.ArticleBox>
    </S.ArticleWrapper>
  );
};

export default NewsArticle;
