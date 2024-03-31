"use client";

import React, { FC } from "react";

import * as T from "@/styles/baseText.style";
import * as C from "../preview.style";
import * as B from "@/styles/baseButtons.style";
import Image from "next/image";
import { IPreviewClient } from "../preview.mock";

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
              <B.TransparentButton onClick={() => setIndex(0)}>
                Экономия
              </B.TransparentButton>
              <B.TransparentButton onClick={() => setIndex(1)}>
                Качество
              </B.TransparentButton>
              <B.TransparentButton onClick={() => setIndex(2)}>
                Большой выбор
              </B.TransparentButton>
            </C.TextBottom>
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
