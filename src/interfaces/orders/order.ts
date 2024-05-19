import { IClient } from "../users/client";
import { IOrderStatus } from "./orderStatus";
import { IProduct } from "../product/product";
import { ISeller } from "../users/seller";
import { IStore } from "../store/store";
import { IOrderContacts } from "../basket/basket";

export interface IOrder {
  id: number;
  user: IClient;
  seller: ISeller;
  store: IStore;
  orderStatus: IOrderStatus;
  quantity: number;
  sumOrder: number;
  product: IProduct;
  contacts: IOrderContacts;
}

export interface IOrderInfo {
  id: number;
  client: string;
  storeName: string;
  status: string;
  sumOrder: number;
  productName: string;
}
