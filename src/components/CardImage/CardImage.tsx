"use client";

import React, { useState } from "react";
import * as S from "./cardImage.style";
import TabList from "./ImageTab/TabList";
import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import ImageSlider from "./ImageSlider/ImageSlider";
import Swiper from "swiper";

const CardImage = () => {
  const [indexItem, setIndexItem] = useState<number>(0);
  const [swiper, setSwiper] = useState<Swiper>();

  return (
    <S.ImageBox>
      <TabList setIndexItem={setIndexItem} swiper={swiper!} />
      <ImageSlider
        item={mockDelCatalog[0].image[indexItem]}
        setSwiper={setSwiper}
      />
    </S.ImageBox>
  );
};

export default CardImage;
