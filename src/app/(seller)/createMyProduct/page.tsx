import WaveHeader from "@/components/Backgrounds/WaveHeader/WaveHeader";
import CreateEditProduct from "@/modules/Catalog/CreateEditProduct/CreateEditProduct";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

export default async function CreateMyProduct() {
  const session = await auth();

  if (!session) {
    redirect("/loginSeller");
  }

  return (
    <>
      <WaveHeader />
      <CreateEditProduct />
    </>
  );
}
