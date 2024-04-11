"use client";

import React, { FC } from "react";
import * as S from "./newsArticle.style";
import * as T from "@/styles/baseText.style";
import Image from "next/image";
import { INewsMock } from "../NewsHome/mockDelNews";

interface IProps {
  item: INewsMock;
}

const NewsArticle: FC<IProps> = ({ item }) => {
  return (
    <S.ArticleWrapper>
      <S.ArticleBox>
        <T.TitleSection>{item.title}</T.TitleSection>
        <S.ArticleImage>
          <Image
            src={item.img}
            alt="Main image article"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </S.ArticleImage>
        <T.TextMedium>{item.text}</T.TextMedium>
      </S.ArticleBox>
    </S.ArticleWrapper>
  );
};

export default NewsArticle;
