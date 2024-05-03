import { ISeller } from "../users/seller";

export interface INewsItem {
  id?: number;
  date: string;
  title: string;
  text: string;
  image: any[];
  seller: ISeller;
  // seller: {name:}
}
