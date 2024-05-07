"use client";

import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import React, { FC } from "react";
import TabItem from "./TabItem";
import * as S from "./tabList.style";
import Swiper from "swiper";
import { IProduct } from "@/interfaces/product/product";

interface IProps {
  swiper: Swiper;
  setIndexItem: (state: number) => void;
  product: IProduct;
}

const TabList: FC<IProps> = ({ setIndexItem, swiper, product }) => {
  return (
    <S.TabListWrap>
      {product.image?.map((item, index) => {
        return (
          <TabItem
            image={item.url}
            click={setIndexItem}
            index={index}
            key={index}
            swiper={swiper}
          />
        );
      })}
    </S.TabListWrap>
  );
};

export default TabList;
