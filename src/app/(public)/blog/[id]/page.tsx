import WaveHeader from "@/components/Backgrounds/WaveHeader/WaveHeader";
import axios from "@/helpers/axios";
import { INewsItem } from "@/interfaces/news/newsItem";
import NewsArticle from "@/modules/News/NewsArticle/NewsArticle";
import { mockDelNews } from "@/modules/News/mockDelNews";
import { AxiosResponse } from "axios";
import React from "react";

interface IParams {
  params: {
    id: number;
  };
}

async function getNewsPage(id: number) {
  const res: AxiosResponse = await axios.get(`api/news-items/${id}?populate=*`);
  const newsPage: INewsItem = res.data.data;
  return newsPage;
}

export default async function Page({ params }: IParams) {
  const newsPage = await getNewsPage(params.id);
  return (
    <>
      <WaveHeader />
      <NewsArticle newsPage={newsPage} />
    </>
  );
}
