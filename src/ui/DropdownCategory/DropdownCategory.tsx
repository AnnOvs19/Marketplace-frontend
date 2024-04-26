"use client";

import React, { FC, MouseEvent, useEffect, useState } from "react";
import * as S from "./dropdownCategory.style";

interface IProps {
  errorDrop: boolean;
  setErrorDrop: (state: boolean) => void;
}

const categories = [
  "Телефоны",
  "Компьютеры",
  "Ноутбуки",
  "Планшеты",
  "Гарнитура",
  "Часы",
  "Прочее"
];

const DropdownCategory: FC<IProps> = ({ errorDrop, setErrorDrop }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  function toggleDropdown() {
    setOpen(!open);
    if (selectedCategory.length == 0) {
      setErrorDrop(true);
    }
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setOpen(false);
    setErrorDrop(false);
  };

  return (
    <S.DropdownContainer>
      <S.DropdownButton
        onClick={toggleDropdown}
        type="button"
        errorDrop={errorDrop}
      >
        {selectedCategory || "Выберете категорию товара"}
      </S.DropdownButton>
      <S.DropdownContent open={open}>
        {categories.map((category) => (
          <S.DropdownItem
            key={category}
            onClick={() => handleCategorySelect(category)}
          >
            <S.DropdownText>{category}</S.DropdownText>
          </S.DropdownItem>
        ))}
      </S.DropdownContent>
    </S.DropdownContainer>
  );
};

export default DropdownCategory;
