import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import Orders from "@/modules/Orders/Orders";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

export default async function MyOrders() {
  const session = await auth();

  if (!session) {
    redirect("/loginClient");
  }

  return (
    <>
      <BgCircle />
      <Orders />
    </>
  );
}
