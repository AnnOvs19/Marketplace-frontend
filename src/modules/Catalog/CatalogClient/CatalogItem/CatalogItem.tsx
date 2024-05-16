"use client";

import React, { FC, MouseEvent, useState } from "react";
import * as S from "./catalogItem.style";
import Image from "next/image";
import likeEmpty from "@/assets/icons/filterLike.svg";
import like from "@/assets/icons/likeProductIcon.svg";
import Link from "next/link";
import { IProduct } from "@/interfaces/product/product";
import { LoaderImage } from "@/helpers/loaderImage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CardButton } from "@/styles/baseButtons.style";
import { CardTitle } from "@/styles/baseTitle.style";
import { CardOtherText, CardPrice } from "@/styles/baseText.style";

interface IProps {
  item: IProduct;
}

const CatalogItem: FC<IProps> = ({ item }) => {
  const session = useSession();

  const router = useRouter();

  const [likeList, setLikelist] = useState<boolean>(false);

  function addLike(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    setLikelist(!likeList);
  }

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
          <CardTitle>{item.title.substring(0, 20)}...</CardTitle>
        </Link>
        <Link href={`/catalog/${item.id}`}>
          <CardPrice>{item.price} руб</CardPrice>
        </Link>

        <S.CardBottom>
          <CardOtherText>{item.category.title}</CardOtherText>
          <CardOtherText>{item.sumInStock} шт.</CardOtherText>
        </S.CardBottom>
        <CardButton type="button" onClick={buttonHandler}>
          В корзину
        </CardButton>
        <S.LikeCardIcon onClick={(event) => addLike(event)} type="button">
          <S.LikeWrap>
            <Image
              src={likeList ? like : likeEmpty}
              alt=""
              fill
              style={{
                objectFit: "contain"
              }}
            />
          </S.LikeWrap>
        </S.LikeCardIcon>
      </S.CardItemBox>
    </S.CardItem>
  );
};

export default CatalogItem;
