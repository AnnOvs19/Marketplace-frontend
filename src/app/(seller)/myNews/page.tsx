import { redirect } from "next/navigation";
import { auth } from "@/configs/auth";
import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import NewsSelList from "@/modules/News/NewsSeller/NewsSelList/NewsSelList";
import { AxiosResponse } from "axios";
import axios from "@/helpers/axios";
import { INewsItem } from "@/interfaces/news/newsItem";

async function getMyNews(token?: string) {
  if (token) {
    const res: AxiosResponse = await axios.get(
      `/api/users/me?populate=store.news_items.image`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const myNews: INewsItem[] = res.data.store.news_items;
    return myNews;
  }
}

export default async function MyNews() {
  const session = await auth();

  if (!session) {
    redirect("/loginSeller");
  }

  const myNews = await getMyNews(session?.user.token);

  return (
    <>
      <BgCircle />
      <NewsSelList myNews={myNews!} />
    </>
  );
}
