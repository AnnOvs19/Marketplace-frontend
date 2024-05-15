import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import CatalogSeller from "@/modules/Catalog/CatalogSeller/CatalogSeller";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";
import { AxiosResponse } from "axios";
import axios from "@/helpers/axios";
import { IProduct } from "@/interfaces/product/product";
import { ICategory } from "@/interfaces/product/category";

async function getCategories() {
  const res: AxiosResponse = await axios.get("/api/categories");
  const filters: ICategory[] = res.data.data;
  return filters;
}

async function getMyProduct(token?: string) {
  if (token) {
    const res: AxiosResponse = await axios.get(
      `/api/users/me?populate=store.products.image,store.products.category`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const myProduct: IProduct[] = res.data.store.products;
    const storeId = res.data.store.id;
    return { myProduct, storeId };
  }
}

export default async function MyProducts() {
  const session = await auth();
  if (!session) {
    redirect("/loginSeller");
  }

  const myProduct = await getMyProduct(session?.user.token);
  const filters = await getCategories();

  return (
    <>
      <BgCircle />
      <CatalogSeller
        myProduct={myProduct?.myProduct!}
        filters={filters}
        storeId={myProduct?.storeId}
      />
    </>
  );
}
