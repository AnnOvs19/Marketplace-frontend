"use client";

import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import React from "react";
import BasketMobItem from "./BasketMobItem";
import { BasketMobile } from "../baskets.style";
import * as S from "./basketMob.style";

const BasketMobList = () => {
  return (
    <BasketMobile>
      <S.BasketContainer>
        {mockDelCatalog?.map((item, index) => {
          return <BasketMobItem item={item} key={index} />;
        })}
      </S.BasketContainer>
    </BasketMobile>
  );
};

export default BasketMobList;
