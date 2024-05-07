import { IStore } from "../store/store";
import { ISeller } from "../users/seller";

export interface INewsItem {
  id?: number;
  title: string;
  text: string;
  image: any[];
  store: { storeName: string; id?: number };
  createdAt: string;
}
