"use client";

import React from "react";
import BasketDeskList from "./BasketDesktop/BasketDeskList";
import BasketMobList from "./BasketMobile/BasketMobList";
import TotalCost from "./TotalCost/TotalCost";
import { BasketMain, BoxBasket } from "./baskets.style";

const Baskets = () => {
  return (
    <BasketMain>
      <BoxBasket>
        <BasketDeskList />
        <BasketMobList />
        <TotalCost />
      </BoxBasket>
    </BasketMain>
  );
};

export default Baskets;
