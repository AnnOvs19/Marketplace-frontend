"use client";

import React, { FC } from "react";
import * as S from "./blogItem.style";
import Image from "next/image";
import { INewsItem } from "@/interfaces/news/newsItem";
import { LoaderImage } from "@/helpers/loaderImage";
import { NewsHead } from "@/modules/Home/NewsHome/newsHome.style";
import { SmallText, TextMedium } from "@/styles/baseText.style";

interface IProps {
  item: INewsItem;
}

const BlogItem: FC<IProps> = ({ item }) => {
  return (
    <S.BlogItemWrap>
      <S.BlogItemBox>
        <NewsHead>
          <SmallText>by {item.store.storeName}</SmallText>
          <SmallText>
            | {new Date(item.createdAt).toLocaleDateString()}
          </SmallText>
        </NewsHead>
        <TextMedium>{item.title}</TextMedium>
        <SmallText> {item.text.substring(0, 108)}</SmallText>
      </S.BlogItemBox>

      <S.BlogItemImage>
        <Image
          loader={LoaderImage}
          src={item.image[0]?.url}
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
