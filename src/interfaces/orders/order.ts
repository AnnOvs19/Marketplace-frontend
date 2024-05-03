import { IClient } from "../users/client";
import { IOrderStatus } from "./orderStatus";
import { IProduct } from "../product/product";
import { ISeller } from "../users/seller";
import { IStore } from "../store/store";

export interface IOrder {
  id: number;
  client: IClient;
  seller: ISeller;
  store: IStore;
  status: IOrderStatus;
  sumOrder: number;
  product: IProduct[];
}
