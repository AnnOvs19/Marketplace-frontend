import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import axios from "@/helpers/axios";
import { ICategory } from "@/interfaces/product/category";
import { IProduct } from "@/interfaces/product/product";
import CatalogList from "@/modules/Catalog/CatalogClient/CatalogList/CatalogList";
import Filters from "@/modules/Catalog/Filters/Filters";
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
  console.log(productsMain);

  return (
    <>
      <BgCircle />
      <Filters filters={filters} />
      <CatalogList productsMain={productsMain} />
    </>
  );
}
