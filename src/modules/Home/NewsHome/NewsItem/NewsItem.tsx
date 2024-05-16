"use client";

import React, { FC } from "react";
import * as S from "./NewsItem.style";
import * as C from "../newsHome.style";
import Image from "next/image";
import { INewsItem } from "@/interfaces/news/newsItem";
import { LoaderImage } from "@/helpers/loaderImage";
import { SmallText, TextMedium } from "@/styles/baseText.style";

interface IProps {
  item: INewsItem;
}

const NewsItem: FC<IProps> = ({ item }) => {
  return (
    <S.NewsItemWrap>
      <S.NewsItemImage>
        <Image
          loader={LoaderImage}
          src={item.image[0].url}
          alt="The main picture of the news post"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </S.NewsItemImage>
      <S.NewsItemText>
        <C.NewsHead>
          <SmallText>by {item.store.storeName}</SmallText>
          <SmallText>
            | {new Date(item.createdAt).toLocaleDateString()}
          </SmallText>
        </C.NewsHead>
        <TextMedium>{item.title.substring(0, 80)}...</TextMedium>
        <SmallText> {item.text.substring(0, 108)}</SmallText>
      </S.NewsItemText>
    </S.NewsItemWrap>
  );
};

export default NewsItem;
