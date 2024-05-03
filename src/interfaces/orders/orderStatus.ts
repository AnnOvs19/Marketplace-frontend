import { IOrder } from "./order";

export interface IOrderStatus {
  id: number;
  status: string;
  orders: IOrder[];
}
