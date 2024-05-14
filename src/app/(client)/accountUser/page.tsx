import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";
import PageUser from "@/modules/Profile/PageUser/PageUser";

export default async function AccountUser() {
  const session = await auth();

  if (!session) {
    redirect("/loginClient");
  }

  return (
    <>
      <BgCircle />
      <PageUser />
    </>
  );
}
