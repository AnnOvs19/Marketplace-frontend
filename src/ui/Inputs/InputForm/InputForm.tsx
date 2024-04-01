"use client";

import React, { FC, InputHTMLAttributes } from "react";
import * as S from "./inputForm.style";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  value: string;
}

const InputForm: FC<IProps> = ({ name, type, placeholder, value }) => {
  return (
    <S.InputFormWrapper>
      <input type={type} name={name} placeholder={placeholder} value={value} />
    </S.InputFormWrapper>
  );
};

export default InputForm;
