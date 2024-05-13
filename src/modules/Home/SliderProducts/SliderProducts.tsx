"use client";

import React from "react";
import * as S from "./sliderProducts.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import CatalogItem from "@/modules/Catalog/CatalogClient/CatalogItem/CatalogItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SliderProducts = () => {
  return (
    <S.SliderWrap>
      <T.TitleSection>Популярные новинки</T.TitleSection>
      <S.SliderList>
        <Swiper
          spaceBetween={18}
          slidesPerView={"auto"}
          speed={500}
          breakpoints={{
            250: {
              spaceBetween: 1
            },
            425: {
              spaceBetween: 10
            },
            600: {
              spaceBetween: 14
            },

            1000: {
              spaceBetween: 18
            }
          }}
        >
          {mockDelCatalog?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CatalogItem item={item} key={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.SliderList>
      <S.ListBottom>
        <S.BottomLine />
        <B.SliderButton>Перейти в каталог</B.SliderButton>
        <S.BottomLine />
      </S.ListBottom>
    </S.SliderWrap>
  );
};

export default SliderProducts;
