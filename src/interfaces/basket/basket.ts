import { IProduct } from "../product/product";

export interface IOrderContacts {
  id?: number;
  name?: string;
  phone?: string;
  sity?: string;
  adress?: string;
  products?: IProduct[];
}
