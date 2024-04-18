"use client";

import React from "react";
import * as S from "./productDeskList.style";
import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import ProductDeskItem from "../ProductDeskItem/ProductDeskItem";

const ProductDeskList = () => {
  return (
    <S.ProductDesktop>
      <S.ProductBody>
        {mockDelCatalog?.map((item, index) => {
          return <ProductDeskItem item={item} key={index} />;
        })}
      </S.ProductBody>
    </S.ProductDesktop>
  );
};

export default ProductDeskList;
