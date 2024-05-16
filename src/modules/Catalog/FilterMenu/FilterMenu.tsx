"use client";

import React, { FC, useState } from "react";
import * as S from "./filterMenu.style";
import * as B from "@/styles/baseButtons.style";
import CheckBox from "@/ui/Inputs/Checkbox/CheckBox";
import { ICategory } from "@/interfaces/product/category";
import axios from "@/helpers/axios";
import { IProduct } from "@/interfaces/product/product";
import { FilterTitle } from "@/styles/baseTitle.style";
import { FilterText } from "@/styles/baseText.style";

interface IProps {
  openFilter: boolean;
  setOpenFilter: (state: boolean) => void;
  filters: ICategory[];
  setProducts: (arr: IProduct[]) => void;
  flag?: number;
  storeId?: number;
}

const FilterMenu: FC<IProps> = ({
  openFilter,
  setOpenFilter,
  filters,
  setProducts,
  flag,
  storeId
}) => {
  const [idArray, setIdArray] = useState<number[]>([]);

  //отправляю id выбранных категорий: мапаю массив и превращаю каждый елемент в строку, потом их соединяю
  async function getProductFiters() {
    if (flag == 1) {
      const strCategory = idArray
        .map((i) => `filters[category][id][$eq]=${i}`)
        .join("&");

      const res = await axios.get(
        `api/products?populate=category,store,image&filters[store][id][$eq]=${storeId}&${strCategory}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`
          }
        }
      );

      if (res.data) {
        setProducts(res.data.data as IProduct[]);
      }
    } else {
      const strCategory = idArray
        .map((i) => `filters[category][id][$eq]=${i}`)
        .join("&");
      const res = await axios.get(`api/products?populate=*&${strCategory}`);
      if (res.data) {
        setProducts(res.data.data as IProduct[]);
      }
    }
  }

  return (
    <S.FilterMenuWrap
      openFilter={openFilter}
      onClick={() => setOpenFilter(false)}
    >
      <S.FilterContent onClick={(event) => event.stopPropagation()}>
        <FilterTitle>Фильтры по категориям:</FilterTitle>
        <S.ContentList>
          {filters?.map((item, index) => {
            return (
              <S.ContentItem key={index}>
                <CheckBox
                  idArray={idArray}
                  setIdArray={setIdArray}
                  id={item.id!}
                />
                <FilterText>{item.title}</FilterText>
              </S.ContentItem>
            );
          })}
        </S.ContentList>
        <B.BaseButton onClick={getProductFiters}>
          Применить фильтры
        </B.BaseButton>
      </S.FilterContent>
    </S.FilterMenuWrap>
  );
};

export default FilterMenu;
