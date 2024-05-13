import WaveHeader from "@/components/Backgrounds/WaveHeader/WaveHeader";
import CreateEditNews from "@/modules/News/CreateEditNews/CreateEditNews";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

export default async function CreateNewsArticle() {
  const session = await auth();

  if (!session) {
    redirect("/loginSeller");
  }

  return (
    <>
      <WaveHeader />
      <CreateEditNews />
    </>
  );
}
