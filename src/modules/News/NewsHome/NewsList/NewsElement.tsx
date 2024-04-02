import React, { FC } from "react";
import { INewsMock } from "../mockDelNews";
import * as S from "./NewsList.style";
import * as T from "@/styles/baseText.style";
import * as C from "../NewsHome/newsHome.style";

interface IProps {
  item: INewsMock;
  index: number;
  click: (index: number) => void;
}

const NewsElement: FC<IProps> = ({ item, click, index }) => {
  return (
    <S.NewsElementWrap onClick={() => click(index)}>
      <C.NewsHead>
        <T.SmallText>by {item.autor}</T.SmallText>
        <T.SmallText>| {item.date}</T.SmallText>
      </C.NewsHead>
      <T.TextMedium>{item.title}</T.TextMedium>
    </S.NewsElementWrap>
  );
};

export default NewsElement;
