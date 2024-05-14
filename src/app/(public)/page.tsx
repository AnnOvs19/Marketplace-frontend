import axios from "@/helpers/axios";
import { INewsItem } from "@/interfaces/news/newsItem";
import { IProduct } from "@/interfaces/product/product";
import AboutUs from "@/modules/Home/AboutUs/AboutUs";
import NewsHome from "@/modules/Home/NewsHome/NewsHome";
import PreviewClient from "@/modules/Home/Preview/PreviewClient/PreviewClient";
import Questions from "@/modules/Home/Questions/Questions/Questions";
import SliderProducts from "@/modules/Home/SliderProducts/SliderProducts";
import { AxiosResponse } from "axios";

async function getProduct() {
  const res: AxiosResponse = await axios.get(
    "/api/products?populate=*&pagination[start]=0&pagination[limit]=15"
  );
  const popularProducts: IProduct[] = res.data.data;
  return popularProducts;
}

async function getNews() {
  const res: AxiosResponse = await axios.get(
    "/api/news-items?populate=*&pagination[start]=0&pagination[limit]=4"
  );
  const newsHome: INewsItem[] = res.data.data;
  return newsHome;
}

export default async function Home() {
  const popularProducts = await getProduct();
  const newsHome = await getNews();
  return (
    <>
      <PreviewClient />
      <SliderProducts popularProducts={popularProducts} />
      <NewsHome newsHome={newsHome} />
      <Questions />
      <AboutUs />
    </>
  );
}
