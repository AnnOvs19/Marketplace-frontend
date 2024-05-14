"use client";

import React from "react";
import * as S from "../productReviews.style";
import TextAreaForm from "@/ui/TextArea/TextAreaForm/TextAreaForm";

const CreateReviews = () => {
  return (
    <S.ReviewHead>
      <TextAreaForm />
      <B.ListButton>Отправить отзыв</B.ListButton>
    </S.ReviewHead>
  );
};

export default CreateReviews;
