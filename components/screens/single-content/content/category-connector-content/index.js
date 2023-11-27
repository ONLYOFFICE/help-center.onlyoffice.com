import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import StyledContent from "../styled-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import CategoryConnectorItem from "../sub-components/connector-category-item";
import filterAricles from "@utils/helpers/filterArticles";

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
   const data = filterAricles(articles, catData.slug_id);

  return (
    <StyledContent className="wrapper">
      <Breadcrumbs t={t} category={catData} isCategory={true} />
      <Heading level={3}>{catData?.name}</Heading>
      <Text>{ReactHtmlParser(catData?.description)}</Text>
      {data.map((it, index) => {
          return (
            <React.Fragment key={index}>
              <CategoryConnectorItem data={it} key={index} t={t} currentLanguage={currentLanguage} />
            </React.Fragment>
           );
      })}
      {children}
    </StyledContent>
  );
};

export default CenterCategoryConnectorContent;
