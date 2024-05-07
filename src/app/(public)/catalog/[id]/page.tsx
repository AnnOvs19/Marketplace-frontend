import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import axios from "@/helpers/axios";
import { IProduct } from "@/interfaces/product/product";
import { IReview } from "@/interfaces/product/review";
import ProductArticle from "@/modules/Catalog/ProductArticle/ProductArticle";
import { AxiosResponse } from "axios";

interface IParams {
  params: {
    id: number;
  };
}

async function getProductPage(id: number) {
  const res: AxiosResponse = await axios.get(`api/products/${id}?populate=*`);
  const productPage: IProduct = res.data.data;
  return productPage;
}

async function getReviewsProduct(id: number) {
  const res: AxiosResponse = await axios.get(
    `api/reviews?populate=*&filters[product][id][$eq]=${id}`
  );
  const reviews: IReview[] = res.data.data;
  return reviews;
}

export default async function Card({ params }: IParams) {
  const productPage = await getProductPage(params.id);
  const reviews = await getReviewsProduct(params.id);

  console.log(productPage);

  return (
    <>
      <BgCircle />
      <ProductArticle product={productPage} reviews={reviews} />
    </>
  );
}
