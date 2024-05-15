"use client";

import React, { FC } from "react";
import * as S from "./productDeskList.style";
import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import ProductDeskItem from "../ProductDeskItem/ProductDeskItem";
import { IProduct } from "@/interfaces/product/product";

interface IProps {
  myProduct: IProduct[];
}

const ProductDeskList: FC<IProps> = ({ myProduct }) => {
  return (
    <S.ProductDesktop>
      <S.ProductBody>
        {myProduct?.map((item, index) => {
          return <ProductDeskItem item={item} key={index} />;
        })}
      </S.ProductBody>
    </S.ProductDesktop>
  );
};

export default ProductDeskList;
