"use client";

import React, { FC } from "react";
import { mockDelCatalog } from "../../mockDelCatalog";
import CatalogItem from "../CatalogItem/CatalogItem";
import * as S from "./catalogList.style";
import Link from "next/link";
import { IProduct } from "@/interfaces/product/product";

interface IProps {
  productsMain: IProduct[];
}

const CatalogList: FC<IProps> = ({ productsMain }) => {
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
        {productsMain?.map((item, index) => {
          return (
            // <Link href={`/catalog/${item.title}`}>
            <CatalogItem item={item} key={index} />
            // </Link>
          );
        })}
      </S.CardBox>
    </S.CardList>
  );
};

export default CatalogList;
