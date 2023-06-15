import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";
import Text from "@components/common/text";
import React, { useState } from "react";
import StyledContent from "../content/styled-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import CategoryItem from "../content/sub-components/category-item";

const CenterCategoryContent = ({
  t,
  articles,
  categories,
  category,
  children,
}) => {
  const catData = categories.find(
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
    <StyledContent>
      <Breadcrumbs t={t} category={catData} isCategory={true} />
      <div className="wrapper">
        <Heading level={3}>{catData?.name}</Heading>
        <Text>{catData?.description}</Text>
        {artData.map((it, index) => {
          return (
            <CategoryItem data={it} key={index} />
          );
        })}
      </div>
      {children}
    </StyledContent>
  );
};

export default CenterCategoryContent;
