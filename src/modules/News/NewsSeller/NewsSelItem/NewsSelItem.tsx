"use client";

import { INewsItem } from "@/interfaces/news/newsItem";
import React, { FC } from "react";
import * as S from "./newsSelItem.style";
import { SmallText, TextMedium } from "@/styles/baseText.style";
import Image from "next/image";
import { LoaderImage } from "@/helpers/loaderImage";
import { BaseButton, FormButton } from "@/styles/baseButtons.style";
import Link from "next/link";

interface IProps {
  item: INewsItem;
}

const NewsSelItem: FC<IProps> = ({ item }) => {
  return (
    <S.ItemNewsSel>
      <S.SelNewsImage>
        <Image
          loader={LoaderImage}
          src={item.image[0]?.url}
          alt="The main picture of the news post"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </S.SelNewsImage>
      <S.ItemSelBox>
        <TextMedium>{item.title.substring(0, 60)}...</TextMedium>
        <Link href={`/blog/${item.id}`} style={{ width: "100%" }}>
          <FormButton>Открыть новость</FormButton>
        </Link>

        <S.ButtonBottom>
          <FormButton style={{ marginTop: "0px" }}>Редактировать</FormButton>
          <FormButton style={{ marginTop: "0px" }}>Удалить</FormButton>
        </S.ButtonBottom>
      </S.ItemSelBox>
    </S.ItemNewsSel>
  );
};

export default NewsSelItem;
