"use client";

import React from "react";
import * as S from "./aboutUs.style";
import Image from "next/image";

import about1 from "@/assets/images/about1.jpg";
import about2 from "@/assets/images/about2.png";
import { TextMedium } from "@/styles/baseText.style";
import { TitleSection } from "@/styles/baseTitle.style";

const AboutUs = () => {
  return (
    <>
      <S.AboutUsBgBox>
        <S.AboutUsBg>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </S.AboutUsBg>
      </S.AboutUsBgBox>

      <S.AboutUsWrapper>
        <S.AboutUsContainer>
          <TitleSection>Немного о нас</TitleSection>
          <S.AboutUsBox>
            <S.AboutUsBlock>
              <TextMedium>
                Мы предлагаем ноутбуки, телефоны, часы и многое другое от
                ведущих производителей. <br />
                Мы гордимся тем, что предлагаем только качественную продукцию,
                отвечающую всем стандартам. Наша команда постоянно работает над
                тем, чтобы обеспечить вас последними новинками.
              </TextMedium>
              <S.AboutUsImage>
                <Image
                  src={about1}
                  alt="The image of technology, the history of the brand"
                  fill
                  style={{
                    objectFit: "cover"
                  }}
                />
              </S.AboutUsImage>
            </S.AboutUsBlock>
            <S.AboutUsBlock>
              <S.AboutUsImage>
                <Image
                  src={about2}
                  alt="The image of technology, the history of the brand"
                  fill
                  style={{
                    objectFit: "cover"
                  }}
                />
              </S.AboutUsImage>
              <TextMedium>
                Благодаря удобной системе доставки, вы можете легко и быстро
                приобрести нужные товары, не выходя из дома.
                <br /> Наши консультанты всегда готовы помочь и ответить на
                любые вопросы. Доверьтесь нам и наслаждайтесь качественной
                техникой, которая сделают вашу жизнь проще и удобнее.
              </TextMedium>
            </S.AboutUsBlock>
          </S.AboutUsBox>
        </S.AboutUsContainer>
      </S.AboutUsWrapper>
    </>
  );
};

export default AboutUs;
