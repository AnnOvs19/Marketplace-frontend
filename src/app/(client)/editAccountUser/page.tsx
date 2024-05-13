import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import EditPageUser from "@/modules/EditPage/EditPageUser/EditPageUser";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

export default async function EditAccountUser() {
  const session = await auth();

  if (!session) {
    redirect("/loginClient");
  }

  return (
    <>
      <BgCircle />
      <EditPageUser />
    </>
  );
}
