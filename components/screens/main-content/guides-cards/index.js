import React, { useState } from "react";
import GuidesCell from "../guides-cards/sub-components/guides-cell";
import StyledGuidesCards from "./styled-guides-cards";

const GuidesCards = ({ t, articles, categories, isCategory, className, mainCategory }) => {
  const getArtData = (category) => {
    return articles?.filter((item) => item.attributes.category.data?.attributes.slug_id === category);
  };

  return (
    <StyledGuidesCards className={className}>
      {categories.map((it, index) => {
        return (
          <GuidesCell
            t={t}
            key={index}
            headData={it.attributes}
            category={it.attributes.slug_id || it.attributes.category.data.attributes.slug_id}
            linkData={isCategory ? articles : getArtData(it.attributes.slug_id)}
            mainCategory={mainCategory}
          />
        );
      })}
    </StyledGuidesCards>
  );
};

export default GuidesCards;
