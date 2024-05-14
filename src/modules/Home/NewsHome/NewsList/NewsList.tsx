"use client";

import React, { FC } from "react";
import * as S from "./NewsList.style";
import NewsElement from "./NewsElement";
import { mockDelNews } from "@/modules/News/mockDelNews";
import { INewsItem } from "@/interfaces/news/newsItem";

interface IProps {
  setIndexItem: (state: number) => void;
  newsHome: INewsItem[];
}

const NewsList: FC<IProps> = ({ setIndexItem, newsHome }) => {
  return (
    <S.NewsListWrap>
      {newsHome?.map((item, index) => {
        return (
          <NewsElement
            item={item}
            click={setIndexItem}
            index={index}
            key={index}
          />
        );
      })}
    </S.NewsListWrap>
  );
};

export default NewsList;
