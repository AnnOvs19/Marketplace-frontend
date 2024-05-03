import { IClient } from "../users/client";
import { IProduct } from "./product";

export interface ILike {
  id: number;
  product: IProduct;
  client: IClient;
}
