"use client";

import { ICatalogMock } from "@/modules/Catalog/mockDelCatalog";
import React, { FC } from "react";

interface IProps {
  item: ICatalogMock;
}

const BasketMobItem: FC<IProps> = ({ item }) => {
  return (
    <div>
      <h1>Hello World from MyComponent</h1>
    </div>
  );
};

export default BasketMobItem;
