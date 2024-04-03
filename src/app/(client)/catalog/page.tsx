import BgCircle from "@/components/Backgrounds/BgCircle/BgCircle";
import WaveHeader from "@/components/Backgrounds/WaveHeader/WaveHeader";
import CatalogList from "@/modules/Catalog/CatalogClient/CatalogList/CatalogList";
import Filters from "@/modules/Catalog/Filters/Filters";

export default function Catalog() {
  return (
    <>
      <WaveHeader />
      <BgCircle />
      <Filters />
      <CatalogList />
    </>
  );
}
