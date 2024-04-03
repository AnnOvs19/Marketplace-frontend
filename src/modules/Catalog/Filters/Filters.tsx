"use client";

import * as B from "@/styles/baseButtons.style";
import InputSearch from "@/ui/Inputs/InputSearch/InputSearch";
import React from "react";
import * as S from "./filter.style";

const Filters = () => {
  return (
    <S.FiltersWrap>
      <S.FilterBox>
        <B.SearchButton>Фильры</B.SearchButton>
        <InputSearch type="text" placeholder="Поиск товаров" />
      </S.FilterBox>
    </S.FiltersWrap>
  );
};

export default Filters;
