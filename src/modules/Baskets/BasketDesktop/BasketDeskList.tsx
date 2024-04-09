"use client";

import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import React from "react";
import BasketDeskItem from "./BasketDeskItem";
import { BasketDesktop } from "../baskets.style";
import * as T from "@/styles/baseText.style";
import * as S from "./basketDesk.style";

const BasketDeskList = () => {
  return (
    <BasketDesktop>
      <S.BasketTable>
        <S.TableBody>
          {mockDelCatalog?.map((item, index) => {
            return <BasketDeskItem item={item} key={index} />;
          })}
        </S.TableBody>
      </S.BasketTable>
    </BasketDesktop>
  );
};

export default BasketDeskList;
