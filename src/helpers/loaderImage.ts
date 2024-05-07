import { ImageLoader } from "next/image";

export const LoaderImage: ImageLoader = ({ src }) => {
  return `http://127.0.0.1:1337${src}`;
};
