import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import axios from "@/helpers/axios";
import { ICategory } from "@/interfaces/product/category";
import { IProduct } from "@/interfaces/product/product";
import CatalogClient from "@/modules/Catalog/CatalogClient/CatalogClient";
import { AxiosResponse } from "axios";

async function getCategories() {
  const res: AxiosResponse = await axios.get("/api/categories");
  const filters: ICategory[] = res.data.data;
  return filters;
}

async function getProduct() {
  const res: AxiosResponse = await axios.get("/api/products?populate=*");

  const productsMain: IProduct[] = res.data.data;
  return productsMain;
}

export default async function Catalog() {
  const filters = await getCategories();
  const productsMain = await getProduct();

  return (
    <>
      <BgCircle />
      <CatalogClient filters={filters} productsMain={productsMain} />
    </>
  );
}
