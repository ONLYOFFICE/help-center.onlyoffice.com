import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";
import Text from "@components/common/text";
import React, { useState } from "react";
import StyledContent from "../content/styled-content";
import ReactHtmlParser from "react-html-parser";

const CenterCategoryContent = ({
  t,
  articles,
  categories,
  category,
  children,
}) => {
  const catData = categories.find(
    (it) => it.attributes.slug === category
  ).attributes;
  const artData = articles
    .filter(
      (it) =>
        it.attributes.category.data.attributes.slug === category &&
        it.attributes.is_main
    )
    .sort(function (a, b) {
      return a.attributes.title.toLowerCase() < b.attributes.title.toLowerCase()
        ? -1
        : 1;
    });
  return (
    <StyledContent>
      <div className="wrapper">
        <Heading level={2}>{catData.name}</Heading>
        <Text>{catData.description}</Text>
          {artData.map((it, index) => {
            return (
              <div className="items" key={index}>
                <InternalLink href={it.attributes.url}>
                  <Heading level={3}>{it.attributes.title}</Heading>
                </InternalLink>
                <>{ReactHtmlParser(it.attributes.description)}</>
              </div>
            );
          })}
      </div>
      {children}
    </StyledContent>
  );
};

export default CenterCategoryContent;
