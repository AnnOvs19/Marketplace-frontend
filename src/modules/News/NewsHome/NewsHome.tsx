"use client";

import React, { useState } from "react";
import * as S from "./newsHome.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import NewsItem from "./NewsItem/NewsItem";
import NewsList from "./NewsList/NewsList";
import { mockDelNews } from "../mockDelNews";
import Image from "next/image";
import clava from "@/assets/images/clavs.jpg";

const NewsHome = () => {
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
          <NewsList setIndexItem={setIndexItem} />
          <NewsItem item={mockDelNews[indexItem]} />
          <S.NewsView>Посмотреть остальные новости</S.NewsView>
        </S.NewsHomeBox>
      </S.NewsHomeContainer>
    </S.NewsHomeWraper>
  );
};

export default NewsHome;
