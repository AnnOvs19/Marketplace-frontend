"use client";

import React from "react";
import * as S from "./newsHome.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import Image from "next/image";
import bg from "@/assets/images/blob2.svg";
import NewsItem from "../NewsItem/NewsItem";
import NewsList from "../NewsList/NewsList";

const NewsHome = () => {
  return (
    <S.NewsHomeWraper>
      <S.BGNewsHome>
        <Image
          src={bg}
          alt="The bacground image"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </S.BGNewsHome>

      <S.NewsHomeContainer>
        <T.TitleSection>Блог и новинки</T.TitleSection>
        <S.NewsHead>
          <B.TransparentButton>Все</B.TransparentButton>
          <B.TransparentButton>Ноутбуки</B.TransparentButton>
          <B.TransparentButton>Телефоны</B.TransparentButton>
          <B.TransparentButton>Часы</B.TransparentButton>
          <B.TransparentButton>Наушники</B.TransparentButton>
        </S.NewsHead>

        <S.NewsHomeBox>
          <NewsItem />
          <NewsList />
        </S.NewsHomeBox>
      </S.NewsHomeContainer>
    </S.NewsHomeWraper>
  );
};

export default NewsHome;
