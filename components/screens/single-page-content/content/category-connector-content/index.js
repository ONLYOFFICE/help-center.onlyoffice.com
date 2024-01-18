import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import StyledContent from "../styled-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import ConnectorCategoryItem from "../sub-components/connector-category-item";
import filterAricles from "@utils/helpers/filterArticles";
import StyledSingleContent from "../../styled-single-content";
import LeftMenu from "../../sub-components/left-menu";

const CenterCategoryConnectorContent = ({
  t,
  articles,
  categories,
  category,
  children,
  currentLanguage
}) => {
  const catData = categories?.find(
    (it) => it.attributes.slug_id === category
  )?.attributes;
  //const data = filterAricles(articles, catData.slug_id);
  const data = articles;
  
  const isCategory = true;
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
        <Breadcrumbs t={t} category={catData} isCategory={true} categories={categories} />
        <Heading level={3}>{catData?.name}</Heading>
        <Text>{ReactHtmlParser(catData?.description)}</Text>
        {data.map((it, index) => {
          return (
            <React.Fragment key={index}>
              <ConnectorCategoryItem data={it} key={index} t={t} currentLanguage={currentLanguage} />
            </React.Fragment>
          );
        })}
        {children}
      </StyledContent>
    </StyledSingleContent>

  );
};

export default CenterCategoryConnectorContent;
