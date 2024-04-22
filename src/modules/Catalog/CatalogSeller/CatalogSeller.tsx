"use client";

import React, { useState } from "react";
import * as S from "./catalogSeller.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import InputSearch from "@/ui/Inputs/InputSearch/InputSearch";
import ProductMobList from "./CatalogSelMobile/ProductMobList/ProductMobList";
import ProductDeskList from "./CatalogSelDesktop/ProductDeskList/ProductDeskList";
import FilterMenu from "@/components/FilterMenu/FilterMenu";

const CatalogSeller = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  return (
    <>
      <S.CatalogSelWrap>
        <S.BoxCatalogSel>
          <S.BoxРHeadSel>
            <T.TitleSection>Мои товары</T.TitleSection>
            <S.HeadFilter>
              <InputSearch
                type="text"
                placeholder="Поиск моих товаров по названию"
              />
              <B.SearchButton onClick={() => setOpenFilter(true)}>
                Фильры
              </B.SearchButton>
            </S.HeadFilter>
          </S.BoxРHeadSel>
          <ProductDeskList />
          <ProductMobList />
        </S.BoxCatalogSel>
      </S.CatalogSelWrap>
      <FilterMenu openFilter={openFilter} setOpenFilter={setOpenFilter} />
    </>
  );
};

export default CatalogSeller;
