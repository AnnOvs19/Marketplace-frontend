import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import Orders from "@/modules/Orders/Orders";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";
import { AxiosResponse } from "axios";
import axios from "@/helpers/axios";
import { IOrderInfo } from "@/interfaces/orders/order";
import { IOrderStatus } from "@/interfaces/orders/orderStatus";
import { IStore } from "@/interfaces/store/store";

async function getMyStore(token?: string) {
  if (token) {
    const res: AxiosResponse = await axios.get(`/api/users/me?populate=store`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const myStore: IStore = res.data.store;
    return myStore;
  }
}

async function getStatusOrders(token: string) {
  const res: AxiosResponse = await axios.get(`api/order-statuses`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const statusOrders: IOrderStatus[] = res.data.data;
  return statusOrders;
}

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
  const myStore = await getMyStore(session.user.token);
  const allOrders = await getAllOrders(myStore!.id, session.user.token);
  const statusOrders = await getStatusOrders(session.user.token);

  return (
    <>
      <BgCircle />
      <Orders
        orders={allOrders}
        statusOrders={statusOrders}
        flag={2}
        storeId={myStore!.id}
      />
    </>
  );
}
