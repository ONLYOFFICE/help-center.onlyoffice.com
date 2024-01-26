import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import Text from "@components/common/text";
import React, { useState, useEffect } from "react";
import StyledCategoryItem from "../category-item/styled-category-item";
import ReactHtmlParser from "react-html-parser";
import RawHtmlStyle from "@components/utils/rawHtmlStyles";
import leftMenuGenerating from '@utils/helpers/Menu/leftMenuGenerating';
import { Route } from "react-router-dom";
import checkPlatformMatch from "@utils/helpers/Common/checkPlatforms";

const CategoryDocsItem = ({
  data, t, currentLanguage
}) => {
  const categoryPic = data?.name.toLowerCase().replace(/ /g, "_");
  const level = data?.level_3 || data?.level_4;
  const path = checkPlatformMatch(data.name) ? `24px_${categoryPic}` : `${categoryPic}`;
  
  return (
    <StyledCategoryItem>
      <Heading level={4}><img src={`/images/icons/${path}.react.svg`} alt={data.name} style={{ fontSize: "10px" }} /><Link href={data.url}>{data.name} {checkPlatformMatch(data.name) && t("Version")}</Link></Heading>
      <ul className="subcategory">
        {level?.map((it, index) => {
          const levelpic = it?.name.toLowerCase();
          return (
            <React.Fragment key={index}>
              {
                checkPlatformMatch(it.name) ? <li className="sublink dlw" key={index}>
                  <a href={it.url}>
                    <img src={`/images/icons/16px_${levelpic}.react.svg`} alt={it.name} style={{ fontSize: "10px" }} />
                    {it.name} {t("Version")}</a>
                </li> : <li className="sublink" key={index}>
                  <a href={it.url}>{it.name}</a>
                </li>

              }
            </React.Fragment>
          )
        })}
      </ul>
    </StyledCategoryItem>
  );
};

export default CategoryDocsItem;