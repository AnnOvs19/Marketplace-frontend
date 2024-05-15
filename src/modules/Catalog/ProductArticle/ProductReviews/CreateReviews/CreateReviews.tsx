"use client";

import React from "react";
import * as S from "../productReviews.style";
import TextAreaForm from "@/ui/TextArea/TextAreaForm/TextAreaForm";
import { ListButton } from "@/styles/baseButtons.style";

const CreateReviews = () => {
  return (
    <S.ReviewHead>
      <TextAreaForm />
      <ListButton>Отправить отзыв</ListButton>
    </S.ReviewHead>
  );
};

export default CreateReviews;
