import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import { auth } from "@/configs/auth";
import PageSeller from "@/modules/Profile/PageSeller/PageSeller";
import { redirect } from "next/navigation";

export default async function AccountSeller() {
  const session = await auth();

  if (!session) {
    redirect("/loginSeller");
  }

  return (
    <>
      <BgCircle />
      <PageSeller />
    </>
  );
}
