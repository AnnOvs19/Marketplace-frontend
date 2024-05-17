"use client";

import React, { FC } from "react";
import BasketDeskItem from "./BasketDeskItem";
import { BasketDesktop } from "../baskets.style";
import * as S from "./basketDesk.style";
import { IProduct } from "@/interfaces/product/product";

interface IProps {
  products: IProduct[];
  setProducts: (arr: IProduct[]) => void;
}

const BasketDeskList: FC<IProps> = ({ products, setProducts }) => {
  console.log(products);

  return (
    <BasketDesktop>
      <S.BasketTable>
        <S.TableBody>
          {products?.map((item, index) => {
            return (
              <BasketDeskItem
                item={item}
                key={index}
                setProducts={setProducts}
                products={products}
              />
            );
          })}
        </S.TableBody>
      </S.BasketTable>
    </BasketDesktop>
  );
};

export default BasketDeskList;
