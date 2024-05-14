"use client";

import React from "react";
import * as S from "./footer.style";
import * as I from "@/styles/baseIcons.style";
import * as T from "@/styles/baseText.style";

import Image from "next/image";
import logo from "@/assets/icons/mainLogo.svg";

const Footer = () => {
  return (
    <S.FooterWrap>
      <S.FooterBox>
        <I.LogoBox>
          <I.LogoIcon>
            <Image
              src={logo}
              alt="The logo of the entire site"
              fill
              style={{
                objectFit: "cover"
              }}
            />
          </I.LogoIcon>
          <T.LogoText>Marketech</T.LogoText>
        </I.LogoBox>
      </S.FooterBox>
    </S.FooterWrap>
  );
};

export default Footer;
