import AboutUs from "@/modules/Home/AboutUs/AboutUs";
import NewsHome from "@/modules/Home/NewsHome/NewsHome";
import PreviewClient from "@/modules/Home/Preview/PreviewClient/PreviewClient";
import Questions from "@/modules/Home/Questions/Questions/Questions";
import SliderProducts from "@/modules/Home/SliderProducts/SliderProducts";

export default function Home() {
  return (
    <>
      <PreviewClient />
      <SliderProducts />
      <NewsHome />
      <Questions />
      <AboutUs />
    </>
  );
}
