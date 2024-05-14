"use client";

import React, { FC } from "react";

import CatalogItem from "../CatalogItem/CatalogItem";
import * as S from "./catalogList.style";
import { IProduct } from "@/interfaces/product/product";

interface IProps {
  popularProducts: IProduct[];
}

const CatalogList: FC<IProps> = ({ popularProducts }) => {
  return (
    <S.CardList>
      <S.CardBox>
        {popularProducts?.map((item, index) => {
          return <CatalogItem item={item} key={index} />;
        })}
      </S.CardBox>
    </S.CardList>
  );
};

export default CatalogList;
