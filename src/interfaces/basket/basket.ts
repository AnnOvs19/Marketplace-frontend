import { IProduct } from "../product/product";
import { IClient } from "../users/client";

export interface IOrderContacts {
  id?: number;
  name: string;
  phone: string;
  sity: string;
  adress: string;
  products?: IProduct[];
}
