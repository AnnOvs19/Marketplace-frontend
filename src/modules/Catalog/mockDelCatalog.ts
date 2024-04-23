import cardImage from "@/assets/images/2.jpg";
import cardImage2 from "@/assets/images/3.jpg";
import cardImage3 from "@/assets/images/4.jpg";

export interface ICatalogMock {
  id: number;
  title: string;
  price: number;
  text: string;
  seller: string;
  image: any[];
  category: string;
  sumInStock: number;
  quantity: number;
  like?: number;
  reviews?: string[];
  color?: string;
  variant: boolean;
}

export const mockDelCatalog = [
  {
    id: 1234567890,
    title: "Barberton Daisy Barberton",
    price: 119.0,
    image: [
      cardImage3,
      cardImage2,
      cardImage,
      cardImage3,
      cardImage2,
      cardImage
    ],
    category: "phone",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 55,
    quantity: 1,
    like: 5,
    reviews: ["1", "2", "3", "4", "5"],
    color: "green",
    variant: true
  },
  {
    id: 2234567890,
    title: "Angel Wing Begonia",
    price: 169.0,
    image: [cardImage3, cardImage2, cardImage],
    category: "computer",
    seller: "Seller2",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 59,
    quantity: 1,
    like: 6,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  },
  {
    id: 3124567890,
    title: "African Violet",
    price: 199.0,
    image: [cardImage2, cardImage3],
    category: "watch",
    seller: "Seller3",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 95,
    quantity: 1,
    like: 7,
    reviews: ["1", "2", "3", "4", "5"],
    color: "red",
    variant: true
  },
  {
    id: 4123567890,
    title: "Beach Spider Lily",
    price: 129.0,
    image: [cardImage, cardImage2, cardImage],
    category: "computer",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 15,
    quantity: 1,
    like: 9,
    reviews: ["1", "2", "3", "4", "5"],
    color: "blue",
    variant: true
  },
  {
    id: 5098764321,
    title: "Blushing Bromeliad",
    price: 139.0,
    image: [cardImage2, cardImage3, cardImage, cardImage2],
    category: "watch",
    seller: "Seller2",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 5,
    quantity: 1,
    like: 17,
    reviews: ["1", "2", "3", "4", "5"],
    color: "white",
    variant: true
  },
  {
    id: 6123457890,
    title: "Aluminum Plant",
    price: 179.0,
    image: [cardImage3, cardImage, cardImage2],
    category: "phone",
    seller: "Seller3",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 105,
    quantity: 1,
    like: 44,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  },
  {
    id: 7098654321,
    title: "Bird's Nest Fern",
    price: 99.0,
    image: [
      cardImage,
      cardImage2,
      cardImage3,
      cardImage,
      cardImage2,
      cardImage3
    ],
    category: "watch",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 205,
    quantity: 1,
    like: 7,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  },
  {
    id: 8123456790,
    title: "Broadleaf Lady Palm",
    price: 59.0,
    image: [cardImage2, cardImage, cardImage3],
    category: "computer",
    seller: "Seller2",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 25,
    quantity: 1,
    like: 97,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  },
  {
    id: 9087654321,
    title: "Chinese Evergreen",
    price: 39.0,
    image: [
      cardImage3,
      cardImage,
      cardImage2,
      cardImage3,
      cardImage,
      cardImage2
    ],
    category: "phone",
    seller: "Seller3",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 75,
    quantity: 1,
    like: 2,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  },
  {
    id: 1023456789,
    title: "Broadleaf",
    price: 39.0,
    image: [cardImage3, cardImage, cardImage2],
    category: "computer",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 45,
    quantity: 1,
    like: 8,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  },
  {
    id: 1134567890,
    title: "Chinese Evergreen",
    price: 490.0,
    image: [cardImage, cardImage2, cardImage3, cardImage2, cardImage3],
    category: "phone",
    seller: "Seller2",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 40,
    quantity: 1,
    like: 123,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  },
  {
    id: 1209876543,
    title: "Chinese",
    price: 79.0,
    image: [cardImage3, cardImage2, cardImage],
    category: "headphones",
    seller: "Seller3",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 4,
    quantity: 1,
    like: 11,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  },
  {
    id: 1324567890,
    title: "Spider Lily",
    price: 790.0,
    image: [cardImage, cardImage3, cardImage2, cardImage, cardImage3],
    category: "headphones",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 2,
    quantity: 1,
    like: 198,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  },
  {
    id: 1409876532,
    title: "Chinese",
    price: 79.0,
    image: [
      cardImage2,
      cardImage3,
      cardImage,
      cardImage2,
      cardImage3,
      cardImage
    ],
    category: "phone",
    seller: "Seller2",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 1,
    quantity: 1,
    like: 66,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  },
  {
    id: 1523467890,
    title: "Beach Lily",
    price: 799.0,
    image: [cardImage3, cardImage, cardImage2],
    category: "headphones",
    seller: "Seller3",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 3,
    quantity: 1,
    like: 890,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  },
  {
    id: 1609875432,
    title: "Lily",
    price: 79.0,
    image: [
      cardImage2,
      cardImage3,
      cardImage,
      cardImage2,
      cardImage3,
      cardImage
    ],
    category: "headphones",
    seller: "Seller1",
    text: "На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пырпррчаптк р а прапр",
    sumInStock: 6,
    quantity: 1,
    like: 954,
    reviews: ["1", "2", "3", "4", "5"],
    variant: false
  }
];
