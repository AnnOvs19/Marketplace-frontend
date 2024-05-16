"use client";

import React from "react";
import * as S from "./questions.style";
import Accordion from "../Accordion/Accordion/Accordion";
import FormQue from "../FormQue/FormQue";
import { TitleSection } from "@/styles/baseTitle.style";

const Questions = () => {
  return (
    <S.QuestionsWraper>
      <TitleSection>Вопрос-ответ</TitleSection>
      <S.QuestionsBox>
        <Accordion />
        <FormQue />
      </S.QuestionsBox>
    </S.QuestionsWraper>
  );
};

export default Questions;
