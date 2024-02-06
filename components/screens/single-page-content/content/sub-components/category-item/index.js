import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import Text from "@components/common/text";
import React, { useState, useEffect } from "react";
import StyledCategoryItem from "./styled-category-item";
import ReactHtmlParser from "react-html-parser";
import RawHtmlStyle from "@components/utils/rawHtmlStyles";
import leftMenuGenerating from '@utils/helpers/Menu/leftMenuGenerating';
import { Route } from "react-router-dom";

const CategoryItem = ({
  data, t, currentLanguage
}) => {
  const categoryPic = data?.name.toLowerCase().replace(/ /g, "_");
  const level3 = data?.level_3;

  return (
    <StyledCategoryItem>
      <Heading level={4}><img src={`https://static-helpcenter.onlyoffice.com/images/icons/${categoryPic}.react.svg`} alt={data.name} style={{ fontSize: "10px" }} /><Link href={data.url}>{data.name}</Link></Heading>
      <ul className="subcategory">
        {level3?.map((it, index) => {
          const level3pic = it?.name.toLowerCase();
          return (
            <React.Fragment key={index}>
              {
                it.name === "docker" ? <li className="sublink" key={index}>
                  <a href={it.url}>
                    <img src={`https://static-helpcenter.onlyoffice.com/images/icons/16px_${level3pic}.react.svg`} alt={it.name} style={{ fontSize: "10px" }} />
                    {it.name}</a>
                </li> : <li className="sublink" key={index}>
                  <a href={it.url}>
                    <img src={`https://static-helpcenter.onlyoffice.com/images/icons/16px_${level3pic}.react.svg`} alt={it.name} style={{ fontSize: "10px" }} />
                    {it.name}</a>
                </li>
              }
            </React.Fragment>
          )
        })}
      </ul>
    </StyledCategoryItem>
  );
};

export default CategoryItem;
