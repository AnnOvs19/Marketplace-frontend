"use client";

import React, { FC, MouseEvent, useState } from "react";
import * as S from "@/modules/Catalog/CatalogClient/CatalogItem/catalogItem.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";
import Image from "next/image";
import likeEmpty from "@/assets/icons/filterLike.svg";
import like from "@/assets/icons/likeProductIcon.svg";
import Link from "next/link";
import { IProduct } from "@/interfaces/product/product";
import { LoaderImage } from "@/helpers/loaderImage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface IProps {
  item: IProduct;
}

const SliderItem: FC<IProps> = ({ item }) => {
  const session = useSession();

  const router = useRouter();

  function buttonHandler() {
    if (!session.data) {
      router.push("/loginClient");
    }
  }

  return (
    <S.CardItem>
      <Link href={`/catalog/${item.id}`} style={{ width: `100%` }}>
        <S.CardItemImage>
          <Image
            loader={LoaderImage}
            src={item!.image[0]!.url}
            alt="Product card image"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </S.CardItemImage>
      </Link>
      <S.CardItemBox>
        <Link href={`/catalog/${item.id}`}>
          <T.CardTitle>{item.title.substring(0, 20)}...</T.CardTitle>
        </Link>
        <Link href={`/catalog/${item.id}`}>
          <T.CardPrice>{item.price} руб</T.CardPrice>
        </Link>

        <S.CardBottom>
          <T.CardOtherText>{item.category.title}</T.CardOtherText>
          <T.CardOtherText>{item.sumInStock} шт.</T.CardOtherText>
        </S.CardBottom>
        <B.CardButton type="button" onClick={buttonHandler}>
          В корзину
        </B.CardButton>
      </S.CardItemBox>
    </S.CardItem>
  );
};

export default SliderItem;