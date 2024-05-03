"use client";

import React, { FC } from "react";
import * as S from "./filterMenu.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import CheckBox from "@/ui/Inputs/Checkbox/CheckBox";
import { ICategory } from "@/interfaces/product/category";

interface IProps {
  openFilter: boolean;
  setOpenFilter: (state: boolean) => void;
  filters: ICategory[];
}

const FilterMenu: FC<IProps> = ({ openFilter, setOpenFilter, filters }) => {
  return (
    <S.FilterMenuWrap
      openFilter={openFilter}
      onClick={() => setOpenFilter(false)}
    >
      <S.FilterContent onClick={(event) => event.stopPropagation()}>
        <T.FilterTitle>Фильтры по категориям:</T.FilterTitle>
        <S.ContentList>
          {filters?.map((item, index) => {
            return (
              <S.ContentItem key={index}>
                <CheckBox />
                <T.FilterText>{item.title}</T.FilterText>
              </S.ContentItem>
            );
          })}
        </S.ContentList>
        <B.BaseButton>Применить фильтры</B.BaseButton>
      </S.FilterContent>
    </S.FilterMenuWrap>
  );
};

export default FilterMenu;
