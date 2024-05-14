"use client";

import { ICategory } from "@/interfaces/product/category";
import { IProduct } from "@/interfaces/product/product";
import React, { FC, useEffect, useState } from "react";
import Filters from "./Filters/Filters";
import CatalogList from "./CatalogList/CatalogList";

interface IProps {
  filters: ICategory[];
  productsMain: IProduct[];
}

const CatalogClient: FC<IProps> = ({ filters, productsMain }) => {
  const [products, setProducts] = useState<IProduct[]>(
    productsMain.sort((a, b) => b.likes.length - a.likes.length)
  );

  return (
    <>
      <Filters
        filters={filters}
        popularProducts={products}
        setProducts={setProducts}
      />
      <CatalogList popularProducts={products} />
    </>
  );
};

export default CatalogClient;
