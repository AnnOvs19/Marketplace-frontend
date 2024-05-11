"use client";

import React from "react";
import * as S from "../page.style";
import HeadSeller from "../AccountHead/HeadSeller/HeadSeller";

const PageSeller = () => {
  return (
    <S.PageWrap>
      <S.PageBox>
        <HeadSeller />
      </S.PageBox>
    </S.PageWrap>
  );
};

export default PageSeller;
