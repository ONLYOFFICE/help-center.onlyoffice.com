import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import React, { useState, useEffect } from "react";
import StyledCategoryItem from "./styled-category-item";
import checkPlatformMatch from "@utils/helpers/Common/checkPlatforms";

const CategoryItem = ({
  data, t, currentLanguage
}) => {
  const categoryPic = data?.name.toLowerCase().replace(/ /g, "_");
  const level3 = data?.level_3;

  return (
    <StyledCategoryItem>
      <Heading level={4}>{checkPlatformMatch(data.name) && categoryPic && <img src={`https://static-helpcenter.onlyoffice.com/images/icons/${categoryPic}.react.svg`} alt={data.name} style={{ fontSize: "10px" }} />}<Link href={data.url}>{data.name}</Link></Heading>
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
