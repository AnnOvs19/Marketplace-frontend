"use client";

import React, { FC, InputHTMLAttributes } from "react";
import { InputSearcWrap } from "./inputSearch.style";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type: string;
  placeholder: string;
  value?: string;
}

const InputSearch: FC<IProps> = ({ name, type, placeholder, value }) => {
  return (
    <InputSearcWrap>
      <input type={type} name={name} placeholder={placeholder} value={value} />
    </InputSearcWrap>
  );
};

export default InputSearch;
