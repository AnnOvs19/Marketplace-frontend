"use client";

import React from "react";
import ProductMobItem from "../ProductMobItem/ProductMobItem";
import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import * as S from "./productMobList.style";

const ProductMobList = () => {
  return (
    <S.ProductContainer>
      {mockDelCatalog?.map((item, index) => {
        return <ProductMobItem item={item} key={index} />;
      })}
    </S.ProductContainer>
  );
};

export default ProductMobList;
