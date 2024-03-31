"use client";

import React from "react";
import * as S from "./questions.style";
import * as T from "@/styles/baseText.style";
import Accordion from "../Accordion/Accordion/Accordion";
import FormQue from "../FormQue/FormQue";

const Questions = () => {
  return (
    <S.QuestionsWraper>
      <T.TitleSection>Вопрос-ответ</T.TitleSection>
      <S.QuestionsBox>
        <Accordion />
        <FormQue />
      </S.QuestionsBox>
    </S.QuestionsWraper>
  );
};

export default Questions;
