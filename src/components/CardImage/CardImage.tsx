"use client";

import React, { FC, useState } from "react";
import * as S from "./cardImage.style";
import TabList from "./ImageTab/TabList";
import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import ImageSlider from "./ImageSlider/ImageSlider";
import Swiper from "swiper";
import { IProduct } from "@/interfaces/product/product";

interface IProps {
  product: IProduct;
}

const CardImage: FC<IProps> = ({ product }) => {
  const [indexItem, setIndexItem] = useState<number>(0);
  const [swiper, setSwiper] = useState<Swiper>();

  return (
    <S.ImageBox>
      <TabList setIndexItem={setIndexItem} swiper={swiper!} product={product} />
      <ImageSlider
        item={product.image[indexItem]}
        setSwiper={setSwiper}
        product={product}
      />
    </S.ImageBox>
  );
};

export default CardImage;
