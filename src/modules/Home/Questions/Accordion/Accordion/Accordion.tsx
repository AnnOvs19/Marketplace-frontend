"use client";

import React from "react";
import { accordionMock } from "../accordion.mock";
import AccordionItems from "../AccordionItems/AccordionItems";
import * as S from "../accordion.style";

const Accordion = () => {
  return (
    <S.AccordionWraper>
      {accordionMock?.map((item, index) => {
        return <AccordionItems item={item} key={index} />;
      })}
    </S.AccordionWraper>
  );
};

export default Accordion;
