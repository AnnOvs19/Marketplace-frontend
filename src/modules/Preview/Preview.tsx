"use client";

import React from "react";
import * as S from "./preview.style";
import * as T from "@/styles/baseText.style";
import * as B from "@/styles/baseButtons.style";

import Image from "next/image";
import phones from "@/assets/images/Group 47194.svg";

const Preview = () => {
  return (
    <S.PreviewWraper>
      <S.PreviewBoxBG>
        <S.PreviewBacground>
          <S.Circle1 />
          <S.Circle2 />
          <S.Circle3 />
          <S.Circle4 />
          <S.Circle5 />
        </S.PreviewBacground>
      </S.PreviewBoxBG>

      <S.PreviewContainer>
        <S.TextBox>
          <T.MainTitle>Lorem ipcum Lorem ipcum</T.MainTitle>
          <T.SubTitle>Lorem ipcum Lorem ipcum ipcumipcum</T.SubTitle>
          <T.TextMedium>
            Lorem ipcum Lorem ipcum ipcumipcum. Lorem ipcum Lorem ipcum
            ipcumipcum Lorem ipcum Lorem ipcum ipcumipcum
          </T.TextMedium>
          <S.TextBottom>
            <B.TransparentButton>Lorem</B.TransparentButton>
            <B.TransparentButton>Lorem ipsum</B.TransparentButton>
            <B.TransparentButton>Lorem ipsumLorem</B.TransparentButton>
          </S.TextBottom>
        </S.TextBox>
        <S.PreviewImage>
          <Image
            src={phones}
            alt="The logo of the entire site"
            fill
            style={{
              objectFit: "contain"
            }}
          />
        </S.PreviewImage>
      </S.PreviewContainer>
    </S.PreviewWraper>
  );
};

export default Preview;
