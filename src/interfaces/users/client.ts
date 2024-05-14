import { IOrder } from "../orders/order";

export interface IClient {
  id: number;
  role?: { name: string };
  username: string;
  phone: string;
  email: string;
  password: string;
  sity: string;
  adress: string;
  orders?: IOrder[];
  // store?: any;
}

export interface IRegisrerClient {
  name: string;
  phone: string;
  email: string;
  password: string;
  sity: string;
  adress: string;
}

export interface ILoginClient {
  name: string;
  password: string;
}
