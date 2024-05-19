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
  username: string;
  phone: string;
  email: string;
  password: string;
  sity: string;
  adress: string;
  role?: string;
}

export interface ILoginClient {
  username: string;
  password: string;
}
