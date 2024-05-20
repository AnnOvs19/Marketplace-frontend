"use client";

import React, { FC } from "react";
import * as S from "../page.style";
import HeadSeller from "../AccountHead/HeadSeller/HeadSeller";
import { ISeller } from "@/interfaces/users/seller";

interface IProps {
  userMe: ISeller;
}

const PageSeller: FC<IProps> = ({ userMe }) => {
  console.log(userMe);

  return (
    <S.PageWrap>
      <S.PageBox>
        <HeadSeller />
      </S.PageBox>
    </S.PageWrap>
  );
};

export default PageSeller;
