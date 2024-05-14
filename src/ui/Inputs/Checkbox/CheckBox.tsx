"use client";

import React, { FC, useEffect, useState } from "react";
import * as S from "./checkbox.style";

interface IProps {
  idArray: number[];
  setIdArray: (arr: number[]) => void;
  id: number;
}

const CheckBox: FC<IProps> = ({ idArray, setIdArray, id }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function toggleCheckbox() {
    setIsChecked(!isChecked);
  }

  useEffect(() => {
    if (isChecked) {
      setIdArray([...idArray, id]);
    } else {
      setIdArray(idArray.filter((i) => i !== id));
    }
  }, [isChecked]);

  return (
    <S.CheckboxContainer>
      <S.CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        placeholder="Edit the text"
      />
      <S.CheckboxCheckmark>
        {isChecked && <S.CheckmarkIcon />}
      </S.CheckboxCheckmark>
    </S.CheckboxContainer>
  );
};

export default CheckBox;
