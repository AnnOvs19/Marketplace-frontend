import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import CatalogSeller from "@/modules/Catalog/CatalogSeller/CatalogSeller";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

export default async function MyProducts() {
  const session = await auth();

  if (!session) {
    redirect("/loginSeller");
  }
  return (
    <>
      <BgCircle />
      <CatalogSeller />
    </>
  );
}
