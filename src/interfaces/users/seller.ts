import { IOrder } from "../orders/order";
import { IStore } from "../store/store";

export interface ISeller {
  id?: number;
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  store?: IStore;
  sity?: string;
  adress?: string;
  orders?: IOrder[];
}

export interface IRegisrerSeller {
  name: string;
  phone: string;
  email: string;
  password: string;
  storeName: string;
  sity: string;
  adress: string;
}

export interface ILoginSeller {
  name: string;
  storeName: string;
  password: string;
}
