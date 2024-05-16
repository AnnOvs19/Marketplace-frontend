"use client";

import React, { FC } from "react";
import * as S from "../ProductDeskList/productDeskList.style";
import * as C from "../../catalogSeller.style";
import Image from "next/image";
import * as I from "@/styles/baseIcons.style";
import editBasket from "@/assets/icons/editIcon.svg";
import deleteBasket from "@/assets/icons/deleteBasket.svg";
import { IProduct } from "@/interfaces/product/product";
import { LoaderImage } from "@/helpers/loaderImage";
import { BasketTitle } from "@/styles/baseTitle.style";
import { BasketPrice } from "@/styles/baseText.style";

interface IProps {
  item: IProduct;
}

const ProductDeskItem: FC<IProps> = ({ item }) => {
  console.log(item);
  return (
    <S.ProductString>
      <S.ProductElement>
        <C.ProductImage>
          <Image
            loader={LoaderImage}
            src={item.image[0]?.url}
            alt="the main photo of the product"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </C.ProductImage>
        <S.ElementBox>
          <BasketTitle>{item.title}</BasketTitle>
          <BasketPrice>№{item.id}</BasketPrice>
        </S.ElementBox>
      </S.ProductElement>
      <S.ProductElement>
        <BasketPrice>{item.price.toFixed(2)} руб</BasketPrice>
      </S.ProductElement>
      <S.ProductElement>
        <BasketTitle>{item.category.title}</BasketTitle>
      </S.ProductElement>
      <S.ProductElement>
        <I.TableIcon>
          <Image
            src={editBasket}
            alt="edit product"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </I.TableIcon>
      </S.ProductElement>
      <S.ProductElement>
        <I.TableIcon>
          <Image
            src={deleteBasket}
            alt="delete product"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </I.TableIcon>
      </S.ProductElement>
    </S.ProductString>
  );
};

export default ProductDeskItem;
