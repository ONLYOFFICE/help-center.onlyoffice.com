import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import Text from "@components/common/text";
import React, { useState, useEffect } from "react";
import StyledCategoryItem from "../category-item/styled-category-item";
import ReactHtmlParser from "react-html-parser";
import RawHtmlStyle from "@components/utils/rawHtmlStyles";
import leftMenuGenerating from '@utils/helpers/leftMenuGenerating';
import { Route } from "react-router-dom";

const CategoryItem = ({
  data, t, currentLanguage
}) => {
  const catPic = data?.attributes.pictures?.data;

  // for release bottom menu from all headings
  const categoryPic = catPic?.find((it) => it.attributes.name === "category_img.png");
  return (
    <StyledCategoryItem>
      <Heading level={4}><img src={categoryPic?.attributes.url} /><Link href={data.attributes.url}>{data.attributes.title}</Link></Heading>
      <h1>Articles in category</h1>
      <ul>
        {filteredArticles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            {/* Остальная информация о статье */}
          </li>
        ))}
      </ul>
    </StyledCategoryItem>
  );
};

export default CategoryItem;
