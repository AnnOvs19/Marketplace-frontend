"use client";

import React, { useState } from "react";
import * as S from "./catalogSeller.style";
import InputSearch from "@/ui/Inputs/InputSearch/InputSearch";
import ProductMobList from "./CatalogSelMobile/ProductMobList/ProductMobList";
import ProductDeskList from "./CatalogSelDesktop/ProductDeskList/ProductDeskList";
import { SearchButton } from "@/styles/baseButtons.style";
import { TitleSection } from "@/styles/baseText.style";

const CatalogSeller = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  return (
    <>
      <S.CatalogSelWrap>
        <S.BoxCatalogSel>
          <S.BoxРHeadSel>
            <TitleSection>Мои товары</TitleSection>
            <S.HeadFilter>
              <InputSearch
                type="text"
                placeholder="Поиск моих товаров по названию"
              />
              <SearchButton onClick={() => setOpenFilter(true)}>
                Фильры
              </SearchButton>
            </S.HeadFilter>
          </S.BoxРHeadSel>
          <ProductDeskList />
          <ProductMobList />
        </S.BoxCatalogSel>
      </S.CatalogSelWrap>
    </>
  );
};

export default CatalogSeller;
