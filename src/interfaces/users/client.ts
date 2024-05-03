import { IOrder } from "../orders/order";

export interface IClient {
  id: number;
  name: string;
  phone: string;
  email: string;
  password: string;
  sity: string;
  adress: string;
  orders?: IOrder[];
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
