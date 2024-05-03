import { IClient } from "../users/client";

export interface IReview {
  id: number;
  text: string;
  client: IClient;
}
