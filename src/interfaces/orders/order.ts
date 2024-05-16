import { IClient } from "../users/client";
import { IOrderStatus } from "./orderStatus";
import { IProduct } from "../product/product";
import { ISeller } from "../users/seller";
import { IStore } from "../store/store";
import { IOrderContacts } from "../basket/basket";

export interface IOrder {
  id: number;
  client: IClient;
  seller: ISeller;
  store: IStore;
  status: IOrderStatus;
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
