import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import WaveHeader from "@/components/Backgrounds/WaveHeader/WaveHeader";
import BlogList from "@/modules/News/NewsClient/NewsBlog/BlogList/BlogList";

export default function Blog() {
  return (
    <>
      <WaveHeader />
      <BgCircle />
      <BlogList />
    </>
  );
}
