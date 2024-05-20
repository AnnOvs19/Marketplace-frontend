"use client";

import React, { FC } from "react";
import * as S from "../page.style";
import HeadUser from "../AccountHead/HeadUser/HeadUser";
import { IClient } from "@/interfaces/users/client";

interface IProps {
  clientMe: IClient;
}

const PageUser: FC<IProps> = ({ clientMe }) => {
  return (
    <S.PageWrap>
      <S.PageBox>
        <HeadUser clientMe={clientMe} />
      </S.PageBox>
    </S.PageWrap>
  );
};

export default PageUser;
