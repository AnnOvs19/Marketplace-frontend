"use client";

import React, { FC } from "react";
import * as S from "./sliderProducts.style";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderItem from "./SliderItem";
import { IProduct } from "@/interfaces/product/product";
import Link from "next/link";
import { SliderButton } from "@/styles/baseButtons.style";
import { TitleSection } from "@/styles/baseText.style";

interface IProps {
  popularProducts: IProduct[];
}

const SliderProducts: FC<IProps> = ({ popularProducts }) => {
  const sortProducts = popularProducts.sort(
    (a, b) => b.likes.length - a.likes.length
  );

  return (
    <S.SliderWrap>
      <TitleSection>Популярные новинки</TitleSection>
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
          {sortProducts?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <SliderItem item={item} key={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.SliderList>
      <S.ListBottom>
        <S.BottomLine />
        <Link href="/catalog">
          <SliderButton>Перейти в каталог</SliderButton>
        </Link>

        <S.BottomLine />
      </S.ListBottom>
    </S.SliderWrap>
  );
};

export default SliderProducts;
