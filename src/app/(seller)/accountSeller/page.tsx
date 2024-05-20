import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import { auth } from "@/configs/auth";
import axios from "@/helpers/axios";
import { ISeller } from "@/interfaces/users/seller";
import PageSeller from "@/modules/Profile/PageSeller/PageSeller";
import { AxiosResponse } from "axios";
import { redirect } from "next/navigation";

async function getSellerMe(token: string) {
  const res: AxiosResponse = await axios.get(`api/users/me?populate=store`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const sellerMe: ISeller = res.data;
  return sellerMe;
}

export default async function AccountSeller() {
  const session = await auth();

  if (!session) {
    redirect("/loginSeller");
  }

  const sellerMe = await getSellerMe(session.user.token);

  return (
    <>
      <BgCircle />
      <PageSeller userMe={sellerMe} />
    </>
  );
}
