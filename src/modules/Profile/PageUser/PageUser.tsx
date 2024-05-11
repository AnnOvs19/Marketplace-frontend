"use client";

import React from "react";
import * as S from "../page.style";
import HeadUser from "../AccountHead/HeadUser/HeadUser";

const PageUser = () => {
  return (
    <S.PageWrap>
      <S.PageBox>
        <HeadUser />
      </S.PageBox>
    </S.PageWrap>
  );
};

export default PageUser;
