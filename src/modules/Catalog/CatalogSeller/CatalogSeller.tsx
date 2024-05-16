"use client";

import React, { FC, useState } from "react";
import * as S from "./catalogSeller.style";
import InputSearch from "@/ui/Inputs/InputSearch/InputSearch";
import ProductMobList from "./CatalogSelMobile/ProductMobList/ProductMobList";
import ProductDeskList from "./CatalogSelDesktop/ProductDeskList/ProductDeskList";
import { BaseButton, SearchButton } from "@/styles/baseButtons.style";
import { IProduct } from "@/interfaces/product/product";
import FilterMenu from "../FilterMenu/FilterMenu";
import { ICategory } from "@/interfaces/product/category";
import axios from "@/helpers/axios";
import { TitleSection } from "@/styles/baseTitle.style";

interface IProps {
  filters: ICategory[];
  myProduct: IProduct[];
  storeId: number;
}

const CatalogSeller: FC<IProps> = ({ myProduct, filters, storeId }) => {
  const [products, setProducts] = useState<IProduct[]>(
    myProduct.sort((a, b) => b.id - a.id)
  );
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  async function clearFilters() {
    const res = await axios.get(
      "/api/users/me?populate=store.products.image,store.products.category",
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`
        }
      }
    );
    const myProducts: IProduct[] = res.data.store.products;
    setProducts(myProducts.sort((a, b) => b.id - a.id));
  }

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
                Фильтры
              </SearchButton>
              <SearchButton onClick={clearFilters}>Отчистить</SearchButton>
            </S.HeadFilter>
            <BaseButton>Создать новый товар</BaseButton>
          </S.BoxРHeadSel>
          <ProductDeskList myProduct={products} />
          <ProductMobList myProduct={products} />
          <FilterMenu
            openFilter={openFilter}
            setOpenFilter={setOpenFilter}
            filters={filters}
            setProducts={setProducts}
            flag={1}
            storeId={storeId}
          />
        </S.BoxCatalogSel>
      </S.CatalogSelWrap>
    </>
  );
};

export default CatalogSeller;
