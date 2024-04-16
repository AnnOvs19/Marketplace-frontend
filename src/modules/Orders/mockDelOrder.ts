export interface IOrderMock {
  id: number;
  client: string;
  price: number;
  seller: string;
  status: string;
}

export const mockDelOrder = [
  {
    id: 1234567890,
    client: "Иванов Иван",
    price: 200,
    seller: "My Phones",
    status: "В доставке"
  },

  {
    id: 987654321,
    client: "Петров Пётр",
    price: 500,
    seller: "My Phones1",
    status: "Отменён"
  },

  {
    id: 1212121212,
    client: "Васильев Василий",
    price: 100,
    seller: "My Phones2",
    status: "Доставлен"
  },

  {
    id: 9090909090,
    client: "Иванов Иван",
    price: 50,
    seller: "My Phones3",
    status: "Возврат"
  },

  {
    id: 6666666666,
    client: "Егоров Егор",
    price: 750,
    seller: "My Phones4",
    status: "На сборке"
  }
];
