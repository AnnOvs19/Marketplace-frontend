"use client";

import React, { FC } from "react";
import * as S from "./filterMenu.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import CheckBox from "@/ui/Inputs/Checkbox/CheckBox";

interface IProps {
  openFilter: boolean;
  setOpenFilter: (state: boolean) => void;
}

const FilterMenu: FC<IProps> = ({ openFilter, setOpenFilter }) => {
  return (
    <S.FilterMenuWrap
      openFilter={openFilter}
      onClick={() => setOpenFilter(false)}
    >
      <S.FilterContent onClick={(event) => event.stopPropagation()}>
        <T.FilterTitle>Фильтры по категориям:</T.FilterTitle>
        <S.ContentList>
          <S.ContentItem>
            <CheckBox />
            <T.FilterText>Компьютеры</T.FilterText>
          </S.ContentItem>
          <S.ContentItem>
            <CheckBox />
            <T.FilterText>Мониторы</T.FilterText>
          </S.ContentItem>
          <S.ContentItem>
            <CheckBox />
            <T.FilterText>Ноутбуки</T.FilterText>
          </S.ContentItem>
          <S.ContentItem>
            <CheckBox />
            <T.FilterText>Планшеты</T.FilterText>
          </S.ContentItem>
          <S.ContentItem>
            <CheckBox />
            <T.FilterText>Телефоны</T.FilterText>
          </S.ContentItem>
          <S.ContentItem>
            <CheckBox />
            <T.FilterText>Гарнитура</T.FilterText>
          </S.ContentItem>
          <S.ContentItem>
            <CheckBox />
            <T.FilterText>Часы</T.FilterText>
          </S.ContentItem>
          <S.ContentItem>
            <CheckBox />
            <T.FilterText>Прочее</T.FilterText>
          </S.ContentItem>
        </S.ContentList>
        <B.BaseButton>Применить фильтры</B.BaseButton>
      </S.FilterContent>
    </S.FilterMenuWrap>
  );
};

export default FilterMenu;
