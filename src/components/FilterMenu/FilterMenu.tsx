"use client";

import React, { FC, useState } from "react";
import * as S from "./filterMenu.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import CheckBox from "@/ui/Inputs/Checkbox/CheckBox";
import { ICategory } from "@/interfaces/product/category";
import axios from "@/helpers/axios";
import { IProduct } from "@/interfaces/product/product";

interface IProps {
  openFilter: boolean;
  setOpenFilter: (state: boolean) => void;
  filters: ICategory[];
  setProducts: (arr: IProduct[]) => void;
}

const FilterMenu: FC<IProps> = ({
  openFilter,
  setOpenFilter,
  filters,
  setProducts
}) => {
  const [idArray, setIdArray] = useState<number[]>([]);

  //отправляю id выбранных категорий: мапаю массив и превращаю каждый елемент в строку, потом их соединяю
  async function getProductFiters() {
    const strCategory = idArray
      .map((i) => `filters[category][id][$eq]=${i}`)
      .join("&");
    const res = await axios.get(`api/products?populate=*&${strCategory}`);
    if (res.data) {
      setProducts(res.data.data as IProduct[]);
    }
  }

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
                <CheckBox
                  idArray={idArray}
                  setIdArray={setIdArray}
                  id={item.id!}
                />
                <T.FilterText>{item.title}</T.FilterText>
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
