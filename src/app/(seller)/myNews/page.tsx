import { redirect } from "next/navigation";
import { auth } from "@/configs/auth";
import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import NewsSelList from "@/modules/News/NewsSeller/NewsSelList/NewsSelList";

export default async function MyNews() {
  const session = await auth();

  if (!session) {
    redirect("/loginSeller");
  }

  return (
    <>
      <BgCircle />
      <NewsSelList />
    </>
  );
}
