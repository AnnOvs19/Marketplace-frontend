import img1 from "@/assets/images/preview1.jpg";
import img2 from "@/assets/images/preview2.jpg";
import img3 from "@/assets/images/preview3.jpg";

export interface IPreviewClient {
  title: string;
  subTitle: string;
  text: string;
  img: any;
}

export const previewClient: IPreviewClient[] = [
  {
    title: "Технологии для всех",
    subTitle: "Удобно, выгодно, качественно",
    text: "От компьютеров до часов - у нас вы найдете все для комфортной работы и развлечений. Покупайте с умом и экономьте с нами!",
    img: img1
  },

  {
    title: "Новейшие гаджеты у вас под рукой",
    subTitle: "Будь в тренде с нашим маркетплейсом",
    text: "Обновите свою технику с нами и оставайтесь на шаг впереди. Качество, надежность, доступная цена - только у нас!",
    img: img2
  },

  {
    title: "Техника мечты станет реальностью",
    subTitle: "Магазин, где осуществляются ваши желания",
    text: "Невероятный выбор техники для всех нужд и желаний. Приходите и выбирайте лучшее уже сегодня!",
    img: img3
  }
];
