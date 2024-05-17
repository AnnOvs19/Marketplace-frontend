"use client";

import React, { FC, useState } from "react";
import * as S from "./basketDesk.style";
import * as I from "@/styles/baseIcons.style";
import * as C from "../baskets.style";
import Image from "next/image";
import deleteBasket from "@/assets/icons/deleteBasket.svg";
import { QuantityButton } from "@/styles/baseButtons.style";
import { BasketTitle } from "@/styles/baseTitle.style";
import { BasketPrice, TextMedium } from "@/styles/baseText.style";
import { IProduct } from "@/interfaces/product/product";
import { LoaderImage } from "@/helpers/loaderImage";

interface IProps {
  item: IProduct;
  products: IProduct[];
  setProducts: (arr: IProduct[]) => void;
}

const BasketDeskItem: FC<IProps> = ({ item, products, setProducts }) => {
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
    <S.TableString>
      <S.BodyElement>
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
        <BasketTitle>{item.title}</BasketTitle>
      </S.BodyElement>
      <S.BodyElement>
        <BasketPrice>{item.price} руб</BasketPrice>
      </S.BodyElement>
      <S.BodyElement>
        <QuantityButton onClick={removeQuantity}>-</QuantityButton>
        <TextMedium>{quantity}</TextMedium>
        <QuantityButton onClick={addQuantity}>+</QuantityButton>
      </S.BodyElement>
      <S.BodyElement>
        <BasketPrice>{item.price * item.quantity!} руб</BasketPrice>
      </S.BodyElement>

      <S.BodyElement>
        <I.TableIcon>
          <Image
            src={deleteBasket}
            alt="The page with the shopping cart"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </I.TableIcon>
      </S.BodyElement>
    </S.TableString>
  );
};

export default BasketDeskItem;
