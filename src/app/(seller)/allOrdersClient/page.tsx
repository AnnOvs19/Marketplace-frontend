import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import Orders from "@/modules/Orders/Orders";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";
import { AxiosResponse } from "axios";
import axios from "@/helpers/axios";
import { IOrderInfo } from "@/interfaces/orders/order";

async function getAllOrders(id: number, token: string) {
  const res: AxiosResponse = await axios.get(
    `api/orders?populate=*&filters[store][id][$eq]=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const allOrders: IOrderInfo[] = res.data.data.map((item: any) => {
    return {
      id: item.id,
      client: item.user.username,
      storeName: item.store.storeName,
      status: item.orderStatus.status,
      sumOrder: item.sumOrder,
      productName: item.product.title
    };
  });

  return allOrders;
}

export default async function AllOrdersClient() {
  const session = await auth();

  if (!session) {
    redirect("/loginSeller");
  }

  const allOrders = await getAllOrders(session.user.id, session.user.token);

  return (
    <>
      <BgCircle />
      <Orders orders={allOrders} />
    </>
  );
}
