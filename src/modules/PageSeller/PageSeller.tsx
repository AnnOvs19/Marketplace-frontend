"use client";

import React from "react";
import AccountHead from "./AccountHead/AccountHead";
import AccountBody from "./AccountBody/AccountBody";
import * as S from "./pageSeller.style";
import * as T from "@/styles/baseText.style";

const PageSeller = () => {
  return (
    <S.PageSellerWrap>
      <S.PageSellerBox>
        <AccountHead />
        <AccountBody />
      </S.PageSellerBox>
    </S.PageSellerWrap>
  );
};

export default PageSeller;
