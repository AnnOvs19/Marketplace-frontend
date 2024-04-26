"use client";

import React, { ChangeEvent, FC, TextareaHTMLAttributes } from "react";
import { TextAreaFormWrap } from "./textAreaForm.style";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  children?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  errors?: boolean;
}

const TextAreaForm: FC<IProps> = ({
  name,
  placeholder,
  children,
  errors,
  onChange,
  value,
  ...props
}) => {
  return (
    <TextAreaFormWrap
      error={errors}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    ></TextAreaFormWrap>
  );
};

export default TextAreaForm;
