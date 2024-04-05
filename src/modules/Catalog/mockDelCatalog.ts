import cardImage from "@/assets/images/2.jpg";
import cardImage2 from "@/assets/images/3.jpg";
import cardImage3 from "@/assets/images/4.jpg";

export interface ICatalogMock {
  id: number;
  title: string;
  price: number;
  text: string;
  seller: string;
  image: any;
  category: string;
  sumInStock: number;
  quantity: number;
}

export const mockDelCatalog = [
  {
    id: 1,
    title: "Barberton Daisy",
    price: 119.0,
    image: cardImage,
    category: "phone",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 55,
    quantity: 1
  },
  {
    id: 2,
    title: "Angel Wing Begonia",
    price: 169.0,
    image: cardImage2,
    category: "computer",
    seller: "Seller2",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 59,
    quantity: 1
  },
  {
    id: 3,
    title: "African Violet",
    price: 199.0,
    image: cardImage3,
    category: "watch",
    seller: "Seller3",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 95,
    quantity: 1
  },
  {
    id: 4,
    title: "Beach Spider Lily",
    price: 129.0,
    image: cardImage2,
    category: "computer",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 15,
    quantity: 1
  },
  {
    id: 5,
    title: "Blushing Bromeliad",
    price: 139.0,
    image: cardImage,
    category: "watch",
    seller: "Seller2",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 5,
    quantity: 1
  },
  {
    id: 6,
    title: "Aluminum Plant",
    price: 179.0,
    image: cardImage3,
    category: "phone",
    seller: "Seller3",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 105,
    quantity: 1
  },
  {
    id: 7,
    title: "Bird's Nest Fern",
    price: 99.0,
    image: cardImage,
    category: "watch",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 205,
    quantity: 1
  },
  {
    id: 8,
    title: "Broadleaf Lady Palm",
    price: 59.0,
    image: cardImage2,
    category: "computer",
    seller: "Seller2",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 25,
    quantity: 1
  },
  {
    id: 9,
    title: "Chinese Evergreen",
    price: 39.0,
    image: cardImage3,
    category: "phone",
    seller: "Seller3",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 75,
    quantity: 1
  },
  {
    id: 10,
    title: "Broadleaf",
    price: 39.0,
    image: cardImage2,
    category: "computer",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 45,
    quantity: 1
  },
  {
    id: 11,
    title: "Chinese Evergreen",
    price: 490.0,
    image: cardImage,
    category: "phone",
    seller: "Seller2",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 40,
    quantity: 1
  },
  {
    id: 12,
    title: "Chinese",
    price: 79.0,
    image: cardImage3,
    category: "headphones",
    seller: "Seller3",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 4,
    quantity: 1
  },
  {
    id: 13,
    title: "Spider Lily",
    price: 790.0,
    image: cardImage,
    category: "headphones",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 2,
    quantity: 1
  },
  {
    id: 14,
    title: "Chinese",
    price: 79.0,
    image: cardImage2,
    category: "phone",
    seller: "Seller2",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 1,
    quantity: 1
  },
  {
    id: 15,
    title: "Beach Lily",
    price: 799.0,
    image: cardImage3,
    category: "headphones",
    seller: "Seller3",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 3,
    quantity: 1
  },
  {
    id: 16,
    title: "Lily",
    price: 79.0,
    image: cardImage2,
    category: "headphones",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 6,
    quantity: 1
  }
];
