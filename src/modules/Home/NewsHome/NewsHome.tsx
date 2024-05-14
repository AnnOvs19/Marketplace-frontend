"use client";

import React, { FC, useState } from "react";
import * as S from "./newsHome.style";
import * as T from "@/styles/baseText.style";
import NewsItem from "./NewsItem/NewsItem";
import NewsList from "./NewsList/NewsList";
import Image from "next/image";
import clava from "@/assets/images/clavs.jpg";
import { mockDelNews } from "@/modules/News/mockDelNews";
import { INewsItem } from "@/interfaces/news/newsItem";

interface IProps {
  newsHome: INewsItem[];
}

const NewsHome: FC<IProps> = ({ newsHome }) => {
  const [indexItem, setIndexItem] = useState<number>(0);

  return (
    <S.NewsHomeWraper>
      <S.NewsHomeContainer>
        <T.TitleSection>Блог и новинки</T.TitleSection>
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
