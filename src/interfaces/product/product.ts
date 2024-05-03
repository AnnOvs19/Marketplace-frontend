import { ICategory } from "./category";
import { ILike } from "./like";
import { IOrder } from "../orders/order";
import { IReview } from "./review";
import { ISeller } from "../users/seller";

export interface IProduct {
  id: number;
  title: string;
  text: string;
  image: any[];
  price: number;
  article: string;
  model: string;
  country: string;
  brand: string;
  weight: number;
  size: string;
  category: ICategory;
  сomplements?: string[];
  materials?: string[];
  sumInStock: number;
  quantity?: number;
  orders?: IOrder[];
  like?: ILike[];
  reviews?: IReview[];
  seller: ISeller;
}
