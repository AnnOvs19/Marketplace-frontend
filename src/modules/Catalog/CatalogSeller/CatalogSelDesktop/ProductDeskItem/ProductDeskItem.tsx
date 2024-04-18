"use client";

import { ICatalogMock } from "@/modules/Catalog/mockDelCatalog";
import React, { FC } from "react";
import * as S from "../ProductDeskList/productDeskList.style";
import * as T from "@/styles/baseText.style";
import * as C from "../../catalogSeller.style";
import Image from "next/image";
import * as I from "@/styles/baseIcons.style";
import editBasket from "@/assets/icons/editIcon.svg";
import deleteBasket from "@/assets/icons/deleteBasket.svg";

interface IProps {
  item: ICatalogMock;
}

const ProductDeskItem: FC<IProps> = ({ item }) => {
  return (
    <S.ProductString>
      <S.ProductElement>
        <C.ProductImage>
          <Image
            src={item.image}
            alt="the main photo of the product"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </C.ProductImage>
        <S.ElementBox>
          <T.BasketTitle>{item.title}</T.BasketTitle>
          <T.BasketPrice>№{item.id}</T.BasketPrice>
        </S.ElementBox>
      </S.ProductElement>
      <S.ProductElement>
        <T.BasketPrice>{item.price.toFixed(2)} руб</T.BasketPrice>
      </S.ProductElement>
      <S.ProductElement>
        <T.BasketTitle>{item.category}</T.BasketTitle>
      </S.ProductElement>
      <S.ProductElement>
        <I.TableIcon>
          <Image
            src={editBasket}
            alt="The page with the shopping cart"
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
            alt="The page with the shopping cart"
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
