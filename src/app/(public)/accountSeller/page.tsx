import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import CatalogList from "@/modules/Catalog/CatalogClient/CatalogList/CatalogList";
import PageSeller from "@/modules/PageSeller/PageSeller";

export default function AccountSeller() {
  return (
    <>
      <BgCircle />
      <PageSeller />
      <CatalogList />
    </>
  );
}
