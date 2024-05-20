import { IOrder } from "../orders/order";
import { IStore } from "../store/store";

export interface ISeller {
  id?: number;
  role?: { name: string };
  username?: string;
  phone?: string;
  email?: string;
  password?: string;
  store?: IStore;
  sity?: string;
  adress?: string;
  orders?: IOrder[];
}

export interface IRegisrerSeller {
  username?: string;
  phone: string;
  email: string;
  password: string;
  storeName: string;
  sity: string;
  adress: string;
  role?: string;
}

export interface ILoginSeller {
  username?: string;
  password: string;
}
