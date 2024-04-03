"use client";

import React, { FC } from "react";
import * as S from "./blogItem.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import * as C from "@/modules/News/NewsClient/NewsHome/newsHome.style";
import { INewsMock } from "../../NewsHome/mockDelNews";
import Image from "next/image";

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
          src={item.img}
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
