import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState } from "react";
import StyledContent from "../styled-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import CategoryItem from "../sub-components/category-item";

const CenterCategoryContent = ({
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
  const artData = articles
    .filter(
      (it) =>
        it.attributes.category.data.attributes.slug_id === category
    )
    .sort(function (a, b) {
      return a.attributes.title.toLowerCase() < b.attributes.title.toLowerCase()
        ? -1
        : 1;
    });
  return (
    <StyledContent className="wrapper">
      <Breadcrumbs t={t} category={catData} isCategory={true} />
      <Heading level={3}>{catData?.name}</Heading>
      <Text>{catData?.description}</Text>
      {artData.map((it, index) => {
        return (
          <CategoryItem data={it} key={index} t={t} currentLanguage={currentLanguage} />
        );
      })}
      {children}
    </StyledContent>
  );
};

export default CenterCategoryContent;
