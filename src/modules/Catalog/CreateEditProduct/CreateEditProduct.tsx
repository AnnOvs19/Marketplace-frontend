"use client";

import React, { useState } from "react";
import * as S from "./createEditProduct.style";
import * as T from "@/styles/baseText.style";
import StepOneProduct from "./StepOneProduct/StepOneProduct";
import StepTwoProduct from "./StepTwoProduct/StepTwoProduct";
import StepThreeProduct from "./StepThreeProduct/StepThreeProduct";
import { useForm } from "react-hook-form";

export interface ICreateEditeProduct {
  title: string;
  text: string;
  price: string;
  model: string;
  article: string;
  weight: string;
  size: string;
  country: string;
  brand: string;
  sumInStock: number;
  image?: FileList;
  category?: string;
  сomplements?: string[];
}

const defaultValues: ICreateEditeProduct = {
  title: "",
  text: "",
  price: "",
  model: "",
  article: "",
  weight: "",
  size: "",
  country: "",
  brand: "",
  sumInStock: 1
};

const CreateEditProduct = () => {
  const [indexTab, setIndexTab] = useState<number>(1);

  const [photo, setPhoto] = useState<string[]>([]);
  const [imageData, setImageData] = useState<FileList>();
  const [validPhoto, setValidPhoto] = useState<boolean>(false);

  const [list, setList] = useState<string[]>([]);

  const [errorDrop, setErrorDrop] = useState<boolean>(true);

  const [textButton, setTextButton] = useState<string>("Создать товар");
  const [statusLoad, setStatusLoad] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const loadedImage = e.target.files;
    setImageData(loadedImage!);
    const arrayPhoto = [];
    if (loadedImage!.length < 7) {
      for (let key in loadedImage!) {
        if (loadedImage[key] instanceof File) {
          const element = loadedImage[key];
          const imageBlob = URL.createObjectURL(element);
          arrayPhoto.push(imageBlob);
          setPhoto(arrayPhoto);
        }
      }
    }
  }

  const productControl = useForm<ICreateEditeProduct>({
    defaultValues,
    mode: "onChange"
  });

  function submit(data: ICreateEditeProduct) {
    console.log(data);
    data.сomplements = list;
    data.image = imageData!;
    if (photo.length !== 0) {
      setTextButton("Создание товара...");
      setStatusLoad(true);
      setValidPhoto(true);
      productControl.reset();
      fetch("twst", {
        method: "POST",
        body: JSON.stringify(data)
      });
    } else {
      setValidPhoto(false);
    }
  }

  return (
    <S.CreateProduct onSubmit={productControl.handleSubmit(submit)}>
      <S.ProductBox>
        <T.TitleForm>Создание нового товара</T.TitleForm>
        <StepOneProduct
          indexTab={indexTab}
          setIndexTab={setIndexTab}
          productControl={productControl}
          errorDrop={errorDrop}
          setErrorDrop={setErrorDrop}
        />
        <StepTwoProduct
          indexTab={indexTab}
          setIndexTab={setIndexTab}
          productControl={productControl}
          errorDrop={errorDrop}
          setErrorDrop={setErrorDrop}
          list={list}
          setList={setList}
        />
        <StepThreeProduct
          indexTab={indexTab}
          setIndexTab={setIndexTab}
          handleChange={handleChange}
          photo={photo}
          validPhoto={validPhoto}
          textButton={textButton}
          statusLoad={statusLoad}
        />
      </S.ProductBox>
    </S.CreateProduct>
  );
};

export default CreateEditProduct;
