"use client";

import React from "react";
import BasketDeskList from "./BasketDesktop/BasketDeskList";
import BasketMobList from "./BasketMobile/BasketMobList";
import TotalCost from "./TotalCost/TotalCost";
import { BasketMain } from "./baskets.style";

const Baskets = () => {
  return (
    <BasketMain>
      <BasketDeskList />
      {/* <BasketMobList /> */}
      {/* <TotalCost /> */}
    </BasketMain>
  );
};

export default Baskets;
