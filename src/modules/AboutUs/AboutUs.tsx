"use client";

import React from "react";
import * as S from "./aboutUs.style";
import * as T from "@/styles/baseText.style";
import Image from "next/image";

import clava from "@/assets/images/clavs.jpg";

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
          <T.TitleSection>О нас</T.TitleSection>
          <S.AboutUsBox>
            <S.AboutUsBlock>
              <T.TextMedium>
                Мы предлагаем ноутбуки, телефоны, часы и многое другое от
                ведущих производителей. <br />
                Мы гордимся тем, что предлагаем только качественную продукцию,
                отвечающую всем стандартам. <br />
                Наша команда постоянно работает над тем, чтобы обеспечить вас
                последними новинками и помочь выбрать то, что подойдет вам.
              </T.TextMedium>
              <S.AboutUsImage>
                <Image
                  src={clava}
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
                  src={clava}
                  alt="The image of technology, the history of the brand"
                  fill
                  style={{
                    objectFit: "cover"
                  }}
                />
              </S.AboutUsImage>
              <T.TextMedium>
                Благодаря удобной системе заказа и доставки, вы можете легко и
                быстро приобрести нужные товары, не выходя из дома.
                <br /> Наши консультанты всегда готовы помочь с выбором и
                ответить на все ваши вопросы. Доверьтесь нам и наслаждайтесь
                качественными техническими устройствами, которые сделают вашу
                жизнь проще и удобнее.
              </T.TextMedium>
            </S.AboutUsBlock>
          </S.AboutUsBox>
        </S.AboutUsContainer>
      </S.AboutUsWrapper>
    </>
  );
};

export default AboutUs;
