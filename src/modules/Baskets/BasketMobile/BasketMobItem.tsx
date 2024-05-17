"use client";

import React, { FC, useState } from "react";
import * as S from "./basketMob.style";
import * as C from "../baskets.style";
import Image from "next/image";
import { DeleteButton, QuantityButton } from "@/styles/baseButtons.style";
import { BasketTitle } from "@/styles/baseTitle.style";
import { BasketPrice, BasketQuantity } from "@/styles/baseText.style";
import { IProduct } from "@/interfaces/product/product";
import { LoaderImage } from "@/helpers/loaderImage";

interface IProps {
  item: IProduct;
  products: IProduct[];
  setProducts: (arr: IProduct[]) => void;
}

const BasketMobItem: FC<IProps> = ({ item, setProducts, products }) => {
  const [quantity, setQuantity] = useState<number>(1);

  function addQuantity() {
    setQuantity(quantity + 1);
    const copyProducts = [...products];
    copyProducts.map((product) => {
      if (product.id == item.id) {
        return (product.quantity! += 1);
      } else {
        return;
      }
    });
    setProducts(copyProducts);
  }

  function removeQuantity() {
    if (quantity == 1) {
      return;
    } else {
      setQuantity(quantity - 1);
      const copyProducts = [...products];
      copyProducts.map((product) => {
        if (product.id == item.id) {
          return (product.quantity! -= 1);
        } else {
          return;
        }
      });
      setProducts(copyProducts);
    }
  }
  return (
    <S.ItemBox>
      <S.MobItem>
        <C.BasketImage>
          <Image
            loader={LoaderImage}
            src={item.image[0].url}
            alt="the main photo of the product"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </C.BasketImage>
        <S.ItemInfo>
          <BasketTitle>{item.title}</BasketTitle>
          <S.Quantity>
            <QuantityButton onClick={removeQuantity}>-</QuantityButton>
            <BasketQuantity>{quantity}</BasketQuantity>
            <QuantityButton onClick={addQuantity}>+</QuantityButton>
          </S.Quantity>
          <BasketPrice>Итого: {item.price * item.quantity!} руб</BasketPrice>
        </S.ItemInfo>
      </S.MobItem>
      <DeleteButton>Удалить</DeleteButton>
    </S.ItemBox>
  );
};

export default BasketMobItem;
