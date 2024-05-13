"use client";

import React, { FC } from "react";
import * as S from "./NewsItem.style";
import * as T from "@/styles/baseText.style";
import * as C from "../newsHome.style";
import Image from "next/image";
import { INewsItem } from "@/interfaces/news/newsItem";

interface IProps {
  item: INewsItem;
}

const NewsItem: FC<IProps> = ({ item }) => {
  return (
    <S.NewsItemWrap>
      <S.NewsItemImage>
        <Image
          src={item.image[0]}
          alt="The main picture of the news post"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </S.NewsItemImage>
      <S.NewsItemText>
        <C.NewsHead>
          <T.SmallText>by {item.seller.name}</T.SmallText>
          <T.SmallText>| {item.date}</T.SmallText>
        </C.NewsHead>
        <T.TextMedium>{item.title}</T.TextMedium>
        <T.SmallText> {item.text.substring(0, 108)}</T.SmallText>
      </S.NewsItemText>
    </S.NewsItemWrap>
  );
};

export default NewsItem;
