"use client";

import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import * as S from "./inputForm.style";
import { FieldErrors } from "react-hook-form";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  errors?: boolean;
}

const InputForm: FC<IProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  errors
}) => {
  return (
    <S.InputFormWrapper error={errors}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </S.InputFormWrapper>
  );
};

export default InputForm;
