import { IProduct } from "../product/product";
import { ISeller } from "../users/seller";

export interface IStore {
  id: number;
  storeName: string;
  products: IProduct[];
  user?: ISeller;
}
