"use client";

import React, { FC, useState } from "react";
import { IAccordionMock } from "../accordion.mock";
import * as T from "@/styles/baseText.style";
import * as S from "../accordion.style";

interface IProps {
  item: IAccordionMock;
}

const AccordionItems: FC<IProps> = ({ item }) => {
  const [openTab, setOpenTab] = useState<boolean>(false);

  function toggle() {
    setOpenTab(!openTab);
  }

  return (
    <S.AccordionItem onClick={toggle}>
      <S.AccordionTitle openTab={openTab}>{item.title}</S.AccordionTitle>
      {openTab && <T.TextMedium>{item.text}</T.TextMedium>}
    </S.AccordionItem>
  );
};

export default AccordionItems;
