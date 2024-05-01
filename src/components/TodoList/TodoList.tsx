"use client";

import React, { FC, useState } from "react";
import * as S from "./TodoList.style";
import * as B from "@/styles/baseButtons.style";
import InputForm from "@/ui/Inputs/InputForm/InputForm";

interface IProps {
  list: string[];
  setList: (list: string[]) => void;
}

const TodoList: FC<IProps> = ({ list, setList }) => {
  const [inputValue, setInputValue] = useState<string>("");

  function addItem() {
    setList([...list, inputValue]);
    setInputValue("");
  }

  function deleteItem(index: number) {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  console.log(list);

  return (
    <>
      <S.TodoHead>
        <InputForm
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Добавьте комплектующие вашего продукта"
        ></InputForm>
        <B.ListButton type="button" onClick={addItem}>
          Добавить пункт
        </B.ListButton>
      </S.TodoHead>
      <S.TodoBody>
        {list.map((item, index) => {
          return (
            <S.TodoItem>
              <S.TodoText key={index}>- {item}</S.TodoText>
              <S.DeleteItem
                type="button"
                onClick={() => {
                  deleteItem(index);
                }}
              >
                x
              </S.DeleteItem>
            </S.TodoItem>
          );
        })}
      </S.TodoBody>
    </>
  );
};

export default TodoList;
