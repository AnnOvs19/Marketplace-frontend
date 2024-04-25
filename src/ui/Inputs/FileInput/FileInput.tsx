"use client";

import React from "react";
import * as S from "./fileInput.style";

interface IProps {
  children?: React.ReactNode;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  accept?: string;
  name?: string;
}

const FileInput: React.FC<IProps> = ({
  children,
  value,
  onChange,
  disabled,
  accept,
  name,
  ...props
}) => {
  return (
    <S.InputFile>
      <S.Label htmlFor="containedButton-file">
        <input
          name={name}
          type="file"
          multiple
          value={value}
          accept={accept}
          disabled={disabled}
          onChange={disabled ? () => {} : onChange}
        />
        {children}
      </S.Label>
    </S.InputFile>
  );
};

export default FileInput;
