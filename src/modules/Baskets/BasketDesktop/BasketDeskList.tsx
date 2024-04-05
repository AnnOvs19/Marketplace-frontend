"use client";

import { mockDelCatalog } from "@/modules/Catalog/mockDelCatalog";
import React from "react";
import BasketDeskItem from "./BasketDeskItem";
import { BasketDesktop } from "../baskets.style";
import * as T from "@/styles/baseText.style";
import * as S from "./basketDesk.style";

const BasketDeskList = () => {
  return (
    <BasketDesktop>
      <S.BasketTable>
        <S.TableHead>
          <S.TableString>
            <S.TableCell>
              <T.TextMedium>Название</T.TextMedium>
            </S.TableCell>
            <S.TableCell>
              <T.TextMedium>Цена</T.TextMedium>
            </S.TableCell>
            <S.TableCell>
              <T.TextMedium>Количество</T.TextMedium>
            </S.TableCell>
            <S.TableCell>
              <T.TextMedium>Итого</T.TextMedium>
            </S.TableCell>
          </S.TableString>
        </S.TableHead>
        <S.TableBody>
          {mockDelCatalog?.map((item, index) => {
            return <BasketDeskItem item={item} key={index} />;
          })}
        </S.TableBody>
      </S.BasketTable>
    </BasketDesktop>
  );
};

export default BasketDeskList;
