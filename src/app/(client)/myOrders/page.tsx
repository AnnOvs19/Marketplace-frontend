import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import Orders from "@/modules/Orders/Orders";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";
import { AxiosResponse } from "axios";
import axios from "@/helpers/axios";
import { IOrderInfo } from "@/interfaces/orders/order";
import { IOrderStatus } from "@/interfaces/orders/orderStatus";

async function getStatusOrders(token: string) {
  const res: AxiosResponse = await axios.get(`api/order-statuses`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const statusOrders: IOrderStatus[] = res.data.data;
  return statusOrders;
}

async function getMyOrders(id: number, token: string) {
  const res: AxiosResponse = await axios.get(
    `api/orders?populate=*&filters[user][id][$eq]=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const myOrders: IOrderInfo[] = res.data.data.map((item: any) => {
    return {
      id: item.id,
      client: item.user.username,
      storeName: item.store.storeName,
      status: item.orderStatus.status,
      sumOrder: item.sumOrder,
      productName: item.product.title
    };
  });

  return myOrders;
}

export default async function MyOrders() {
  const session = await auth();

  if (!session) {
    redirect("/loginClient");
  }

  const myOrders = await getMyOrders(session.user.id, session.user.token);
  const statusOrders = await getStatusOrders(session.user.token);

  return (
    <>
      <BgCircle />
      <Orders orders={myOrders} statusOrders={statusOrders} flag={1} />
    </>
  );
}
