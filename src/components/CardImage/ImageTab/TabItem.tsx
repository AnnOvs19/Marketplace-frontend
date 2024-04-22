"use client";

import React, { FC } from "react";
import * as S from "./tabList.style";
import Image from "next/image";
import Swiper from "swiper";

interface IProps {
  image: any;
  index: number;
  swiper: Swiper;
  click: (index: number) => void;
}

const TabItem: FC<IProps> = ({ image, click, index, swiper }) => {
  return (
    <S.TabItemWrap
      onClick={() => {
        click(index);
        swiper.slideTo(index);
      }}
    >
      <Image
        src={image}
        alt="Product card image"
        fill
        style={{
          objectFit: "cover"
        }}
      />
    </S.TabItemWrap>
  );
};

export default TabItem;
