import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import HeadUser from "@/modules/Profile/AccountHead/HeadUser/HeadUser";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

export default async function AccountUser() {
  const session = await auth();

  if (!session) {
    redirect("/loginClient");
  }

  return (
    <>
      <BgCircle />
      <HeadUser />
    </>
  );
}
