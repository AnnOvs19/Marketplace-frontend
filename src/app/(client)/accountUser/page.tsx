import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";
import PageUser from "@/modules/Profile/PageUser/PageUser";
import { AxiosResponse } from "axios";
import axios from "@/helpers/axios";
import { IClient } from "@/interfaces/users/client";

async function getClientMe(token: string) {
  const res: AxiosResponse = await axios.get(`api/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const clientMe: IClient = res.data;
  return clientMe;
}

export default async function AccountUser() {
  const session = await auth();

  if (!session) {
    redirect("/loginClient");
  }

  const clientMe: IClient = await getClientMe(session.user.token);

  return (
    <>
      <BgCircle />
      <PageUser clientMe={clientMe} />
    </>
  );
}
