import { IProduct } from "../product/product";

export interface IStore {
  id: number;
  title: string;
  products: IProduct[];
}
