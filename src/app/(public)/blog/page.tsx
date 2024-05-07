import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import axios from "@/helpers/axios";
import { INewsItem } from "@/interfaces/news/newsItem";
import BlogList from "@/modules/News/NewsBlog/BlogList/BlogList";
import { AxiosResponse } from "axios";

async function getNewsItem() {
  const res: AxiosResponse = await axios.get("api/news-items?populate=*");
  const newsMain: INewsItem[] = res.data.data;
  return newsMain;
}

export default async function Blog() {
  const newsMain = await getNewsItem();
  return (
    <>
      <BgCircle />
      <BlogList newsMain={newsMain} />
    </>
  );
}
