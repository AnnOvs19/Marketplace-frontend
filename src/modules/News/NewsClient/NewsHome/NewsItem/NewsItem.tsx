"use client";

import React, { FC } from "react";
import * as S from "./NewsItem.style";
import * as T from "@/styles/baseText.style";
import * as C from "../newsHome.style";
import { INewsMock } from "../mockDelNews";
import { TextMedium } from "@/styles/baseText.style";
import Image from "next/image";

interface IProps {
  item: INewsMock;
}

const NewsItem: FC<IProps> = ({ item }) => {
  return (
    <S.NewsItemWrap>
      <S.NewsItemImage>
        <Image
          src={item.img}
          alt="The main picture of the news post"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </S.NewsItemImage>
      <S.NewsItemText>
        <C.NewsHead>
          <T.SmallText>by {item.autor}</T.SmallText>
          <T.SmallText>| {item.date}</T.SmallText>
        </C.NewsHead>
        <TextMedium>{item.title}</TextMedium>
        <T.SmallText> {item.text.substring(0, 108)}</T.SmallText>
      </S.NewsItemText>
    </S.NewsItemWrap>
  );
};

export default NewsItem;
