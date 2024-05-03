"use client";

import React, { FC } from "react";
import * as S from "./blogItem.style";
import * as T from "@/styles/baseText.style";
import Image from "next/image";
import * as C from "../../NewsHome/newsHome.style";
import { INewsItem } from "@/interfaces/news/newsItem";

interface IProps {
  item: INewsItem;
}

const BlogItem: FC<IProps> = ({ item }) => {
  return (
    <S.BlogItemWrap>
      <S.BlogItemBox>
        <C.NewsHead>
          <T.SmallText>by {item.seller.name}</T.SmallText>
          <T.SmallText>| {item.date}</T.SmallText>
        </C.NewsHead>
        <T.TextMedium>{item.title}</T.TextMedium>
        <T.SmallText> {item.text.substring(0, 108)}</T.SmallText>
      </S.BlogItemBox>

      <S.BlogItemImage>
        <Image
          src={item.image[0]}
          alt="The main picture of the news post"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </S.BlogItemImage>
    </S.BlogItemWrap>
  );
};

export default BlogItem;
