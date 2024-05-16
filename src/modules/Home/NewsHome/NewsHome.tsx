"use client";

import React, { FC, useState } from "react";
import * as S from "./newsHome.style";
import NewsItem from "./NewsItem/NewsItem";
import NewsList from "./NewsList/NewsList";
import Image from "next/image";
import clava from "@/assets/images/clavs.jpg";
import { INewsItem } from "@/interfaces/news/newsItem";
import { TitleSection } from "@/styles/baseTitle.style";

interface IProps {
  newsHome: INewsItem[];
}

const NewsHome: FC<IProps> = ({ newsHome }) => {
  const [indexItem, setIndexItem] = useState<number>(0);

  return (
    <S.NewsHomeWraper>
      <S.NewsHomeContainer>
        <TitleSection>Блог и новинки</TitleSection>
        <S.NewsHomeBox>
          <S.NewsImageBox>
            <Image
              src={clava}
              alt="Advertisement"
              fill
              style={{
                objectFit: "cover"
              }}
            />
          </S.NewsImageBox>
          <NewsList setIndexItem={setIndexItem} newsHome={newsHome} />
          <NewsItem item={newsHome[indexItem]} />
          <S.NewsView>Посмотреть остальные новости</S.NewsView>
        </S.NewsHomeBox>
      </S.NewsHomeContainer>
    </S.NewsHomeWraper>
  );
};

export default NewsHome;
