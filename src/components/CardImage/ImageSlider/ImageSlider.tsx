"use client";

import React, { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import * as S from "./imageSlider.style";
import Image from "next/image";
import { IProduct } from "@/interfaces/product/product";
import { LoaderImage } from "@/helpers/loaderImage";

interface IProps {
  item: any;
  setSwiper: any;
  product: IProduct;
}

const ImageSlider: FC<IProps> = ({ item, setSwiper, product }) => {
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
          {product.image?.map((elem) => {
            return (
              <SwiperSlide>
                <S.ImageBox>
                  <Image
                    loader={LoaderImage}
                    src={elem.url}
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
    </>
  );
};

export default ImageSlider;
