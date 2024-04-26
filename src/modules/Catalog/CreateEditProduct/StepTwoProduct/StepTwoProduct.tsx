"use client";

import React, { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { ICreateEditeProduct } from "../CreateEditProduct";
import { StepProduct2 } from "../createEditProduct.style";
import * as B from "@/styles/baseButtons.style";
import * as U from "@/ui/Inputs/InputForm/inputForm.style";
import * as T from "@/styles/baseText.style";
import * as S from "../createEditProduct.style";

interface IProps {
  indexTab: number;
  setIndexTab: (step: number) => void;
  productControl: UseFormReturn<ICreateEditeProduct>;
}

const StepTwoProduct: FC<IProps> = ({
  indexTab,
  setIndexTab,
  productControl
}) => {
  return (
    <S.StepProduct2 step={indexTab}>
      <S.BottomProduct>
        <B.FormButton type="button" onClick={() => setIndexTab(1)}>
          Назад
        </B.FormButton>
        <B.FormButton type="button" onClick={() => setIndexTab(3)}>
          Продолжить
        </B.FormButton>
      </S.BottomProduct>
    </S.StepProduct2>
  );
};

export default StepTwoProduct;
