"use client";

import React, { FC, useState } from "react";
import BasketDeskList from "./BasketDesktop/BasketDeskList";
import BasketMobList from "./BasketMobile/BasketMobList";
import TotalCost from "./TotalCost/TotalCost";
import { BasketMain, BoxBasket } from "./baskets.style";
import { IOrderContacts } from "@/interfaces/basket/basket";
import { IProduct } from "@/interfaces/product/product";

interface IProps {
  myBasket: IOrderContacts;
}

const Baskets: FC<IProps> = ({ myBasket }) => {
  const [products, setProducts] = useState<IProduct[]>(
    myBasket.products!.map((item) => {
      return { ...item, quantity: 1 };
    })
  );

  return (
    <BasketMain>
      <BoxBasket>
        <BasketDeskList products={products} setProducts={setProducts} />
        <BasketMobList products={products} setProducts={setProducts} />
        <TotalCost myBasket={myBasket} products={products} />
      </BoxBasket>
    </BasketMain>
  );
};

export default Baskets;
