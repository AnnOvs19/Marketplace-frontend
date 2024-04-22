"use client";

import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import React, { FC } from "react";
import TabItem from "./TabItem";
import * as S from "./tabList.style";
import Swiper from "swiper";

interface IProps {
  swiper: Swiper;
  setIndexItem: (state: number) => void;
}

const TabList: FC<IProps> = ({ setIndexItem, swiper }) => {
  return (
    <S.TabListWrap>
      {mockDelCatalog[0].image?.map((item, index) => {
        return (
          <TabItem
            image={item}
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
