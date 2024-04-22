"use client";

import React, { FC } from "react";
import * as S from "./blogItem.style";
import * as T from "@/styles/baseText.style";
import { INewsMock } from "../../mockDelNews";
import Image from "next/image";
import * as C from "../../NewsHome/newsHome.style";

interface IProps {
  item: INewsMock;
}

const BlogItem: FC<IProps> = ({ item }) => {
  return (
    <S.BlogItemWrap>
      <S.BlogItemBox>
        <C.NewsHead>
          <T.SmallText>by {item.autor}</T.SmallText>
          <T.SmallText>| {item.date}</T.SmallText>
        </C.NewsHead>
        <T.TextMedium>{item.title}</T.TextMedium>
        <T.SmallText> {item.text.substring(0, 108)}</T.SmallText>
      </S.BlogItemBox>

      <S.BlogItemImage>
        <Image
          src={item.img[0]}
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
