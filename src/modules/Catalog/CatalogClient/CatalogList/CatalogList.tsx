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
        {/* <Link href="/accountSeller">
          <button>Перейти на аккаунт продавца</button>
        </Link>
        <Link href="/editAccountSel">
          <button>Редактировать аккаунт</button>
        </Link>
        <Link href="/myProducts">
          <button>Мои товары</button>
        </Link> */}
        {mockDelCatalog?.map((item, index) => {
          return (
            <Link href={`/catalog/${item.title}`}>
              <CatalogItem item={item} key={index} />
            </Link>
          );
        })}
      </S.CardBox>
    </S.CardList>
  );
};

export default CatalogList;
