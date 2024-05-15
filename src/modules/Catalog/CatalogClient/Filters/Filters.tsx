"use client";

import InputSearch from "@/ui/Inputs/InputSearch/InputSearch";
import React, { FC, useState } from "react";
import * as S from "./filter.style";
import Image from "next/image";
import order from "@/assets/icons/filterOrder.svg";
import reverse from "@/assets/icons/filterReverseOrder.svg";
import delivery from "@/assets/icons/filterDelivery.svg";
import like from "@/assets/icons/filterLike.svg";
import Link from "next/link";
import { ICategory } from "@/interfaces/product/category";
import { IProduct } from "@/interfaces/product/product";
import axios from "@/helpers/axios";
import FilterMenu from "../../FilterMenu/FilterMenu";
import { SearchButton } from "@/styles/baseButtons.style";

interface IProps {
  filters: ICategory[];
  popularProducts: IProduct[];
  setProducts: (arr: IProduct[]) => void;
}

const Filters: FC<IProps> = ({ filters, popularProducts, setProducts }) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  function sortNewProducts() {
    const prodArr = [...popularProducts];
    const sortNew = prodArr.sort((a, b) => b.id - a.id);
    setProducts(sortNew);
  }
  function sortOldPosts() {
    const prodArr = [...popularProducts];
    const sortOld = prodArr.sort((a, b) => a.id - b.id);
    setProducts(sortOld);
  }

  async function clearFilters() {
    const res = await axios.get("/api/products?populate=*");
    const productsMain: IProduct[] = res.data.data;
    setProducts(productsMain.sort((a, b) => b.likes.length - a.likes.length));
  }

  return (
    <>
      <S.FiltersWrap>
        <S.FilterBox>
          <S.SearchPanel>
            <InputSearch type="text" placeholder="Поиск товаров" />
            <SearchButton onClick={() => setOpenFilter(true)}>
              Фильры
            </SearchButton>
            <SearchButton onClick={clearFilters}>Отчистить</SearchButton>
          </S.SearchPanel>
          <S.ControlPanel>
            <S.IconsContainer>
              <S.ButtonBox onClick={sortNewProducts}>
                <Image
                  src={order}
                  alt="Sort in descending order"
                  fill
                  style={{
                    objectFit: "contain"
                  }}
                />
              </S.ButtonBox>
              <S.TextIcon>С новых товаров</S.TextIcon>
            </S.IconsContainer>
            <S.IconsContainer>
              <S.ButtonBox onClick={sortOldPosts}>
                <Image
                  src={reverse}
                  alt="Sorting in reverse order"
                  fill
                  style={{
                    objectFit: "contain"
                  }}
                />
              </S.ButtonBox>
              <S.TextIcon>В обратном порядке</S.TextIcon>
            </S.IconsContainer>
            <S.IconsContainer>
              <S.ButtonBox>
                <Image
                  src={like}
                  alt=""
                  fill
                  style={{
                    objectFit: "contain"
                  }}
                />
              </S.ButtonBox>
              <S.TextIcon>Избранное</S.TextIcon>
            </S.IconsContainer>
            <Link href="/myOrders">
              <S.IconsContainer>
                <S.ButtonBox>
                  <Image
                    src={delivery}
                    alt=""
                    fill
                    style={{
                      objectFit: "contain"
                    }}
                  />
                </S.ButtonBox>
                <S.TextIcon>Мои заказы</S.TextIcon>
              </S.IconsContainer>
            </Link>
          </S.ControlPanel>
        </S.FilterBox>
      </S.FiltersWrap>
      <FilterMenu
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        filters={filters}
        setProducts={setProducts}
      />
    </>
  );
};

export default Filters;
