import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import CatalogList from "@/modules/Catalog/CatalogClient/CatalogList/CatalogList";
import Filters from "@/modules/Catalog/Filters/Filters";

export default function Catalog() {
  return (
    <>
      <BgCircle />
      {/* <Filters /> */}
      <CatalogList />
    </>
  );
}
