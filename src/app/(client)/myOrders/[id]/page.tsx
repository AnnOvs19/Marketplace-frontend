import WaveHeader from "@/components/Backgrounds/WaveHeader/WaveHeader";
import { auth } from "@/configs/auth";
import OrderArticle from "@/modules/Orders/OrderArticle/OrderArticle";
import { redirect } from "next/navigation";

interface IParams {
  params: {
    id: number;
  };
}

export default async function Page({ params }: IParams) {
  const session = await auth();

  if (!session) {
    redirect("/loginClient");
  }
  return (
    <>
      <WaveHeader />
      <OrderArticle />
    </>
  );
}
