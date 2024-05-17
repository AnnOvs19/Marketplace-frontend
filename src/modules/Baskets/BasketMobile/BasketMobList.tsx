"use client";

import React, { FC } from "react";
import BasketMobItem from "./BasketMobItem";
import { BasketMobile } from "../baskets.style";
import * as S from "./basketMob.style";
import { IProduct } from "@/interfaces/product/product";

interface IProps {
  products: IProduct[];
  setProducts: (arr: IProduct[]) => void;
}

const BasketMobList: FC<IProps> = ({ products, setProducts }) => {
  return (
    <BasketMobile>
      <S.BasketContainer>
        {products?.map((item, index) => {
          return (
            <BasketMobItem
              item={item}
              key={index}
              setProducts={setProducts}
              products={products}
            />
          );
        })}
      </S.BasketContainer>
    </BasketMobile>
  );
};

export default BasketMobList;
