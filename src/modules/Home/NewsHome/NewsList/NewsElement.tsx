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
        <T.SmallText>by {item.store.storeName}</T.SmallText>
        <T.SmallText>
          | {new Date(item.createdAt).toLocaleDateString()}
        </T.SmallText>
      </C.NewsHead>
      <T.TextMedium>{item.title.substring(0, 80)}...</T.TextMedium>
    </S.NewsElementWrap>
  );
};

export default NewsElement;
