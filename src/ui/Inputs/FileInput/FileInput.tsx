"use client";

import React from "react";
import * as S from "./fileInput.style";

interface FileInputProps {
  onChange: (file: File) => void;
  accept?: string;
}

const FileInput: React.FC<FileInputProps> = ({ onChange, accept }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div>
      <S.InputFile type="file" accept={accept} onChange={handleChange} />
      <S.Label htmlFor="fileInput">Добавить фото</S.Label>
    </div>
  );
};

export default FileInput;
