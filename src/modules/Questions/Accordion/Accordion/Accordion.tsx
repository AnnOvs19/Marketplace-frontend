"use client";

import React from "react";
import { accordionMock } from "../accordion.mock";
import AccordionItems from "../AccordionItems/AccordionItems";
import * as S from "../accordion.style";

const Accordion = () => {
  return (
    <S.AccordionWraper>
      {accordionMock?.map((item) => {
        return <AccordionItems item={item} />;
      })}
    </S.AccordionWraper>
  );
};

export default Accordion;
