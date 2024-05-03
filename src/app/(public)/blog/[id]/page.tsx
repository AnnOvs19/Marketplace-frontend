import WaveHeader from "@/components/Backgrounds/WaveHeader/WaveHeader";
import NewsArticle from "@/modules/News/NewsArticle/NewsArticle";
import { mockDelNews } from "@/modules/News/mockDelNews";
import React from "react";

export default function Page() {
  return (
    <>
      <WaveHeader />
      <NewsArticle item={mockDelNews[0]} />
    </>
  );
}
