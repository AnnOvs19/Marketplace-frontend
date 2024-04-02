"use client";

import React from "react";
import { mockDelCatalog } from "../../mockDelCatalog";
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogList = () => {
  return (
    <div>
      {mockDelCatalog?.map((item, index) => {
        return <CatalogItem item={item} key={index} />;
      })}
    </div>
  );
};

export default CatalogList;
