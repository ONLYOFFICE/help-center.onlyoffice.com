import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import StyledContent from "../styled-content";
import StyledSingleContent from "../../styled-single-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import LeftMenu from "../../sub-components/left-menu";

const CenterSubCategoryContent = ({
  t,
  articles,
  categories,
  category,
  children,
  currentLanguage,
  isCategory
}) => {

    const article = null;
    // left menu highlight
    const [activeItem, setActiveItem] = useState(null);
    const handleActiveItemChange = (item) => {
        setActiveItem(item);
    };
    
    const menuProps = {
        article,
        articles,
        categories,
        isCategory,
        category,
        handleActiveItemChange,
        currentLanguage,
        children,
        t,
        activeItem,
    };

    //console.log(articles);
    console.log(categories);

  return (
    <StyledSingleContent>
    <LeftMenu {...menuProps} />
    <StyledContent className="wrapper">
      <Breadcrumbs t={t} category={category} isCategory={false} categories={categories} mainCategory="Docs" />
      <Heading level={3}>{category?.name}</Heading>
      {articles?.map((it, index) => {
          return (
            <li key={index}>
             <a href={it.url}>{it.name}</a>
            </li>
           );
      })}
      {children}
    </StyledContent>
    </StyledSingleContent>
  );
};

export default CenterSubCategoryContent;
