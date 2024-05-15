"use client";

import React, { FC } from "react";
import * as S from "../../blogList.style";
import { INewsItem } from "@/interfaces/news/newsItem";
import NewsSelItem from "../NewsSelItem/NewsSelItem";

interface IProps {
  myNews: INewsItem[];
}

const NewsSelList: FC<IProps> = ({ myNews }) => {
  console.log(myNews);

  return (
    <S.BlogListWrap>
      <S.NewsSeltBox>
        {myNews.map((item, index) => {
          return <NewsSelItem item={item} key={index} />;
        })}
      </S.NewsSeltBox>
    </S.BlogListWrap>
  );
};

export default NewsSelList;
