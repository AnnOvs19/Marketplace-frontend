"use client";

import * as B from "@/styles/baseButtons.style";
import InputSearch from "@/ui/Inputs/InputSearch/InputSearch";
import React, { FC, useState } from "react";
import * as S from "./filter.style";
import Image from "next/image";
import order from "@/assets/icons/filterOrder.svg";
import reverse from "@/assets/icons/filterReverseOrder.svg";
import delivery from "@/assets/icons/filterDelivery.svg";
import like from "@/assets/icons/filterLike.svg";
import FilterMenu from "@/components/FilterMenu/FilterMenu";
import Link from "next/link";
import { ICategory } from "@/interfaces/product/category";

interface IProps {
  filters: ICategory[];
}

const Filters: FC<IProps> = ({ filters }) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  return (
    <>
      <S.FiltersWrap>
        <S.FilterBox>
          <S.SearchPanel>
            <InputSearch type="text" placeholder="Поиск товаров" />
            <B.SearchButton onClick={() => setOpenFilter(true)}>
              Фильры
            </B.SearchButton>
          </S.SearchPanel>
          <S.ControlPanel>
            <S.IconsContainer>
              <S.ButtonBox>
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
              <S.ButtonBox>
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
      />
    </>
  );
};

export default Filters;
