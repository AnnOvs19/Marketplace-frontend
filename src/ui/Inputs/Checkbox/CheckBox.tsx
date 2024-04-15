"use client";

import React, { useState } from "react";
import * as S from "./checkbox.style";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function toggleCheckbox() {
    setIsChecked(!isChecked);
  }

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
