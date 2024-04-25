"use client";

import React, { FC, TextareaHTMLAttributes } from "react";
import { TextAreaFormWrap } from "./textAreaForm.style";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  children?: string;
  placeholder: string;
  value: string;
}

const TextAreaForm: FC<IProps> = ({
  name,
  placeholder,
  children,
  ...props
}) => {
  return (
    <TextAreaFormWrap
      name={name}
      placeholder={placeholder}
      {...props}
    ></TextAreaFormWrap>
  );
};

export default TextAreaForm;
