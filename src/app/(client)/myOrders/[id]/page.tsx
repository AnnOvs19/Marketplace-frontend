import WaveHeader from "@/components/Backgrounds/WaveHeader/WaveHeader";
import { auth } from "@/configs/auth";
import axios from "@/helpers/axios";
import { IOrder } from "@/interfaces/orders/order";
import OrderArticle from "@/modules/Orders/OrderArticle/OrderArticle";
import { AxiosResponse } from "axios";
import { redirect } from "next/navigation";

interface IParams {
  params: {
    id: number;
  };
}

async function getOrderPage(id: number, token: string) {
  const res: AxiosResponse = await axios.get(
    `api/orders/${id}?populate=product.image,user,store.user,orderStatus
    `,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  const orderPage: IOrder = res.data.data;
  return orderPage;
}

export default async function Page({ params }: IParams) {
  const session = await auth();

  if (!session) {
    redirect("/loginClient");
  }

  const orderPage = await getOrderPage(params.id, session.user.token);
  return (
    <>
      <WaveHeader />
      <OrderArticle orderPage={orderPage} />
    </>
  );
}
