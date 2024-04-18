"use client";

import React from "react";
import * as S from "./catalogSeller.style";
import * as T from "@/styles/baseText.style";
import InputSearch from "@/ui/Inputs/InputSearch/InputSearch";
import ProductMobList from "./CatalogSelMobile/ProductMobList/ProductMobList";
import ProductDeskList from "./CatalogSelDesktop/ProductDeskList/ProductDeskList";

const CatalogSeller = () => {
  return (
    <S.CatalogSelWrap>
      <S.BoxCatalogSel>
        <S.BoxРHeadSel>
          <T.TitleSection>Мои товары</T.TitleSection>
          <InputSearch
            type="text"
            placeholder="Поиск моих товаров по названию"
          />
        </S.BoxРHeadSel>
        <ProductDeskList />
        <ProductMobList />
      </S.BoxCatalogSel>
    </S.CatalogSelWrap>
  );
};

export default CatalogSeller;
