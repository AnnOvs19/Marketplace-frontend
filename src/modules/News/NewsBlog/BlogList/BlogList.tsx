"use client";

import React from "react";
import * as S from "./blogList.style";
import { mockDelNews } from "../../mockDelNews";
import BlogItem from "../BlogItem/BlogItem";
import Link from "next/link";

const BlogList = () => {
  return (
    <S.BlogListWrap>
      <S.BlogListBox>
        {mockDelNews?.map((item, index) => {
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
