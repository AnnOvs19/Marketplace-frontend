import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import axios from "@/helpers/axios";
import Baskets from "@/modules/Baskets/Baskets";
import { AxiosResponse } from "axios";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";
import { IOrderContacts } from "@/interfaces/basket/basket";

// http://localhost:1337/api/baskets?populate=*&filters[client][id][$eq]=1

async function getMyBasket(id: number, token: string) {
  const res: AxiosResponse = await axios.get(
    `api/baskets?populate=products,products.image&filters[client][id][$eq]=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  const myBasket: IOrderContacts = res.data.data[0];
  return myBasket;
}

export default async function Basket() {
  const session = await auth();

  if (!session) {
    redirect("/loginClient");
  }

  const myBasket = await getMyBasket(session.user.id, session.user.token);

  return (
    <>
      <BgCircle />
      <Baskets myBasket={myBasket} />
    </>
  );
}
