"use client";

import React, { FC } from "react";
import ProductMobItem from "../ProductMobItem/ProductMobItem";
import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import * as S from "./productMobList.style";
import { IProduct } from "@/interfaces/product/product";

interface IProps {
  myProduct: IProduct[];
}

const ProductMobList: FC<IProps> = ({ myProduct }) => {
  return (
    <S.ProductContainer>
      {myProduct?.map((item, index) => {
        return <ProductMobItem item={item} key={index} />;
      })}
    </S.ProductContainer>
  );
};

export default ProductMobList;
