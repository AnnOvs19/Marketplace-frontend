"use client";

import React, { FC } from "react";
import * as S from "../page.style";
import HeadSeller from "../AccountHead/HeadSeller/HeadSeller";
import { ISeller } from "@/interfaces/users/seller";

interface IProps {
  sellerMe: ISeller;
}

const PageSeller: FC<IProps> = ({ sellerMe }) => {
  return (
    <S.PageWrap>
      <S.PageBox>
        <HeadSeller sellerMe={sellerMe} />
      </S.PageBox>
    </S.PageWrap>
  );
};

export default PageSeller;
