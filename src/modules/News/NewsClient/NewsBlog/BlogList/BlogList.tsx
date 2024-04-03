"use client";

import React from "react";
import * as S from "./blogList.style";
import { mockDelNews } from "../../NewsHome/mockDelNews";
import BlogItem from "../BlogItem/BlogItem";

const BlogList = () => {
  return (
    <S.BlogListWrap>
      <S.BlogListBox>
        {mockDelNews?.map((item, index) => {
          return <BlogItem item={item} key={index} />;
        })}
      </S.BlogListBox>
    </S.BlogListWrap>
  );
};

export default BlogList;
