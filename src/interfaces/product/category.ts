import { IProduct } from "./product";

export interface ICategory {
  id?: number;
  title?: string;
  products?: IProduct[];
}
