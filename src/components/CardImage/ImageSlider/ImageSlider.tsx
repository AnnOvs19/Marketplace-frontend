"use client";

import React, { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import * as S from "./imageSlider.style";
import { ICatalogMock, mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import Image from "next/image";

interface IProps {
  item: any;
  setSwiper: any;
}

const ImageSlider: FC<IProps> = ({ item, setSwiper }) => {
  return (
    <>
      <S.SliderImage>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={"auto"}
          speed={500}
          onSwiper={(swiper) => setSwiper(swiper)}
          breakpoints={{
            250: {
              spaceBetween: 0
            },
            550: {
              spaceBetween: 10
            }
          }}
        >
          {mockDelCatalog[0].image?.map((elem, index) => {
            return (
              <SwiperSlide>
                <S.ImageBox>
                  <Image
                    src={elem}
                    alt="Main image article"
                    fill
                    style={{
                      objectFit: "contain"
                    }}
                  />
                </S.ImageBox>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.SliderImage>

      {/* <S.ImageBox>
        <Image
          src={item}
          alt="Main image article"
          fill
          style={{
            objectFit: "contain"
          }}
        />
      </S.ImageBox> */}
    </>
  );
};

export default ImageSlider;
