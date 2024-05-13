import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import EditPageSel from "@/modules/EditPage/EditPageSelLer/EditPageSel";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

export default async function EditAccountSel() {
  const session = await auth();

  if (!session) {
    redirect("/loginSeller");
  }
  return (
    <>
      <BgCircle />
      <EditPageSel />
    </>
  );
}
