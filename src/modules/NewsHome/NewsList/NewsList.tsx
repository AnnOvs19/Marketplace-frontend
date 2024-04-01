"use client";

import React from "react";
import * as S from "./NewsList.style";
import NewsElement from "./NewsElement";
import { mockDelNews } from "../mockDelNews";

const NewsList = () => {
  return (
    <S.NewsListWrap>
      {mockDelNews?.map((item) => {
        return <NewsElement item={item} />;
      })}
    </S.NewsListWrap>
  );
};

export default NewsList;
