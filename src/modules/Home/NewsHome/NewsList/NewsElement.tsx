import React, { FC } from "react";
import * as S from "./NewsList.style";
import * as T from "@/styles/baseText.style";
import * as C from "../newsHome.style";
import { INewsItem } from "@/interfaces/news/newsItem";

interface IProps {
  item: INewsItem;
  index: number;
  click: (index: number) => void;
}

const NewsElement: FC<IProps> = ({ item, click, index }) => {
  return (
    <S.NewsElementWrap onClick={() => click(index)}>
      <C.NewsHead>
        <T.SmallText>by {item.seller.name}</T.SmallText>
        <T.SmallText>| {item.date}</T.SmallText>
      </C.NewsHead>
      <T.TextMedium>{item.title}</T.TextMedium>
    </S.NewsElementWrap>
  );
};

export default NewsElement;
