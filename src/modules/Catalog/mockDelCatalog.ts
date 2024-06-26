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
  reviews?: IReviewsMock[];
}

export interface IReviewsMock {
  id: number;
  user: string;
  text: string;
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
    reviews: [
      {
        id: 1,
        user: "anya",
        text: "blabla1 blabla1 blabla1 На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пы"
      },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      {
        id: 1,
        user: "anya",
        text: "blabla1 blabla1 blabla1 На нашем маркетплейсе предоставляется официальная гарантия от производителя на все товары. Арпрьаал оал дешщдег пы"
      },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
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
    reviews: [
      { id: 1, user: "anya", text: "blabla1" },
      { id: 2, user: "anya", text: "blabla2" },
      { id: 3, user: "anya", text: "blabla3" },
      { id: 4, user: "anya", text: "blabla4" },
      { id: 5, user: "anya", text: "blabla5" }
    ]
  }
];
