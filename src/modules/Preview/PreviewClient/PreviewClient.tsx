"use client";

import React, { useState } from "react";
import * as S from "./previewClient.style";
import * as C from "../preview.style";

import { previewClient } from "../preview.mock";
import PreviewItemsClient from "./PreviewItemsClient";

const PreviewClient = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <C.PreviewWraper>
      <C.PreviewBoxBG>
        <C.PreviewBacground>
          <S.Circle1 />
          <S.Circle2 />
          <S.Circle3 />
          <S.Circle4 />
          <S.Circle5 />
          <S.Circle6 />
          <S.Circle7 />
          <S.Circle8 />
        </C.PreviewBacground>
      </C.PreviewBoxBG>

      <C.PreviewContainer>
        {previewClient?.map((item, indexSlide) => {
          return (
            <PreviewItemsClient
              item={item}
              index={index}
              setIndex={setIndex}
              indexSlide={indexSlide}
            />
          );
        })}
      </C.PreviewContainer>
    </C.PreviewWraper>
  );
};

export default PreviewClient;
