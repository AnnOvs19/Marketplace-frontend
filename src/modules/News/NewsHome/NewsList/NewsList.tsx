"use client";

import React, { FC } from "react";
import * as S from "./NewsList.style";
import NewsElement from "./NewsElement";
import { mockDelNews } from "../../mockDelNews";

interface IProps {
  setIndexItem: (state: number) => void;
}

const NewsList: FC<IProps> = ({ setIndexItem }) => {
  return (
    <S.NewsListWrap>
      {mockDelNews?.map((item, index) => {
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
