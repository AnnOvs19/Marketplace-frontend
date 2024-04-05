"use client";

import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import React from "react";
import BasketMobItem from "./BasketMobItem";
import { BasketMobile } from "../baskets.style";

const BasketMobList = () => {
  return (
    <BasketMobile>
      {mockDelCatalog?.map((item, index) => {
        return <BasketMobItem item={item} key={index} />;
      })}
    </BasketMobile>
  );
};

export default BasketMobList;
