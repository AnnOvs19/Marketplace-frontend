import React, { FC } from "react";
import * as S from "./NewsList.style";
import * as C from "../newsHome.style";
import { INewsItem } from "@/interfaces/news/newsItem";
import { SmallText, TextMedium } from "@/styles/baseText.style";

interface IProps {
  item: INewsItem;
  index: number;
  click: (index: number) => void;
}

const NewsElement: FC<IProps> = ({ item, click, index }) => {
  return (
    <S.NewsElementWrap onClick={() => click(index)}>
      <C.NewsHead>
        <SmallText>by {item.store.storeName}</SmallText>
        <SmallText>| {new Date(item.createdAt).toLocaleDateString()}</SmallText>
      </C.NewsHead>
      <TextMedium>{item.title.substring(0, 80)}...</TextMedium>
    </S.NewsElementWrap>
  );
};

export default NewsElement;
