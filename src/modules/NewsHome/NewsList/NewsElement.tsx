import React, { FC } from "react";
import { INewsMock } from "../mockDelNews";

interface IProps {
  item: INewsMock;
}

const NewsElement: FC<IProps> = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <h1>{item.text}</h1>
      <h1>{item.autor}</h1>
      <h1>{item.date}</h1>
    </div>
  );
};

export default NewsElement;
