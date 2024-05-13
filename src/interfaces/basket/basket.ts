import { IProduct } from "../product/product";
import { IClient } from "../users/client";

export interface IBasket {
  id?: number;
  name: string;
  phone: string;
  sity: string;
  adress: string;
  products?: IProduct[];
}
