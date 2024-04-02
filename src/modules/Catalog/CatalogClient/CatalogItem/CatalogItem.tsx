"use client";

import React, { FC } from "react";
import { ICatalogMock } from "../../mockDelCatalog";

interface IProps {
  item: ICatalogMock;
}

const CatalogItem: FC<IProps> = ({ item }) => {
  return (
    <div>
      <h1>Hello World from MyComponent</h1>
    </div>
  );
};

export default CatalogItem;
