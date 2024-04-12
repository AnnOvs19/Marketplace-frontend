import AboutUs from "@/modules/AboutUs/AboutUs";
import NewsHome from "@/modules/News/NewsClient/NewsHome/NewsHome";
import PreviewClient from "@/modules/Preview/PreviewClient/PreviewClient";
import Questions from "@/modules/Questions/Questions/Questions";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <PreviewClient />
      <Questions />
      <AboutUs />
      <NewsHome />
    </>
  );
}
