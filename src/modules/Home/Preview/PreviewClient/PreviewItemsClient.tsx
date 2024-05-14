"use client";

import React, { FC } from "react";

import * as T from "@/styles/baseText.style";
import * as C from "../preview.style";
import Image from "next/image";
import { IPreviewClient } from "../preview.mock";
import Link from "next/link";
import { TransparentButton } from "@/styles/baseButtons.style";

interface IProps {
  item: IPreviewClient;
  index: number;
  indexSlide: number;
  setIndex: (i: number) => void;
}

const PreviewItemsClient: FC<IProps> = ({
  item,
  index,
  indexSlide,
  setIndex
}) => {
  return (
    <>
      {index === indexSlide && (
        <>
          <C.TextBox>
            <T.MainTitle>{item.title}</T.MainTitle>
            <T.SubTitle>{item.subTitle}</T.SubTitle>
            <T.TextMedium>{item.text}</T.TextMedium>

            <C.TextBottom>
              <TransparentButton onClick={() => setIndex(0)}>
                Экономия
              </TransparentButton>
              <TransparentButton onClick={() => setIndex(1)}>
                Качество
              </TransparentButton>
              <TransparentButton onClick={() => setIndex(2)}>
                Большой выбор
              </TransparentButton>
            </C.TextBottom>
            <Link href="/loginClient">
              <C.LoginPrewiewButton>Аккаунт покупателя</C.LoginPrewiewButton>
            </Link>
          </C.TextBox>
          <C.PreviewImage>
            <Image
              src={item.img}
              alt="The preview of the entire site"
              fill
              style={{
                objectFit: "contain"
              }}
            />
          </C.PreviewImage>
        </>
      )}
    </>
  );
};

export default PreviewItemsClient;
