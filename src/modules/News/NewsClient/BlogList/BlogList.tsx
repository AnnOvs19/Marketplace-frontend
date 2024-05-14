"use client";

import React, { FC } from "react";
import * as S from "../../blogList.style";
import BlogItem from "../BlogItem/BlogItem";
import Link from "next/link";
import { INewsItem } from "@/interfaces/news/newsItem";

interface IProps {
  newsMain: INewsItem[];
}

const BlogList: FC<IProps> = ({ newsMain }) => {
  return (
    <S.BlogListWrap>
      <S.BlogListBox>
        {newsMain?.map((item, index) => {
          return (
            <Link href={`/blog/${index + 1}`}>
              <BlogItem item={item} key={index} />
            </Link>
          );
        })}
      </S.BlogListBox>
    </S.BlogListWrap>
  );
};

export default BlogList;
