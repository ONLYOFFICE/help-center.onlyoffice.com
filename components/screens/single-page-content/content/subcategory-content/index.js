import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import StyledContent from "../styled-content";
import StyledSingleContent from "../../styled-single-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import LeftMenu from "../../sub-components/left-menu";
import checkPlatformMatch from "@utils/helpers/Common/checkPlatforms";

const CenterSubCategoryContent = ({
  t,
  articles,
  categories,
  category,
  children,
  currentLanguage,
  isCategory,
  pageMainCategory
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

  return (
    <StyledSingleContent>
      <LeftMenu {...menuProps} />
      <StyledContent className="wrapper">
        <Breadcrumbs t={t} category={category} isCategory={false} categories={categories} mainCategory={pageMainCategory} />
        <Heading level={3} className={`subcat-heading ${checkPlatformMatch(category?.name) && `dlw`}`}>{checkPlatformMatch(category?.name) && <img src={`/images/icons/24px_${category?.name.toLowerCase()}.react.svg`} alt={category?.name} style={{ width: "32px" }} />}{category?.name}</Heading>
        {articles?.map((it, index) => {
          const l5Length = it.level_5.length;
          return (
            <div className="subcat-divs" key={index} id={it.name.toLowerCase()}>
              <Heading level={5}>{it.name}</Heading>
              {l5Length > 0 && <ul className="classic-ul">
                {it.level_5?.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <a href={item.url}>{item.name}</a>
                    </li>)
                })}
              </ul>}
            </div>
          );
        })}
        {children}
      </StyledContent>
    </StyledSingleContent>
  );
};

export default CenterSubCategoryContent;
