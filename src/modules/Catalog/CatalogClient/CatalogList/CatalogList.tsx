"use client";

import React from "react";
import { mockDelCatalog } from "../../mockDelCatalog";
import CatalogItem from "../CatalogItem/CatalogItem";
import * as S from "./catalogList.style";
import Link from "next/link";

const CatalogList = () => {
  return (
    <S.CardList>
      <S.CardBox>
        <Link href="/accountSeller">
          <button>Перейти на аккаунт продавца</button>
        </Link>
        {mockDelCatalog?.map((item, index) => {
          return <CatalogItem item={item} key={index} />;
        })}
      </S.CardBox>
    </S.CardList>
  );
};

export default CatalogList;
