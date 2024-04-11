import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import NewsArticle from "@/modules/News/NewsClient/NewsArticle/NewsArticle";
import { mockDelNews } from "@/modules/News/NewsClient/NewsHome/mockDelNews";
import React from "react";

export default function Page() {
  return (
    <>
      <BgCircle />
      <NewsArticle item={mockDelNews[0]} />
    </>
  );
}
