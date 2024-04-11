"use client";

import React from "react";
import * as S from "./cardImage.style";
import TabList from "./ImageTab/TabList";
import TabItem from "./ImageTab/TabItem";

const CardImage = () => {
  return (
    <S.ImageBox>
      <TabList />
      <TabItem />
    </S.ImageBox>
  );
};

export default CardImage;
