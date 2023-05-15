import React from "react";
import GuidesCell from "../guides-cards/sub-components/guides-cell";
import StyledGuidesCards from "./styled-guides-cards";

const GuidesCards = ({ t, articles, categories }) => {
  const getArtData = (category) => {
    return articles.filter((item) => item.attributes.category.data?.attributes.slug_id === category);
  };
  return (
    <StyledGuidesCards>
      {categories.map((it, index) => {
        return <GuidesCell t={t} key={index} headData={it.attributes} category={it.attributes.slug_id} linkData={getArtData(it.attributes.slug_id)} />;
      })}
    </StyledGuidesCards>
  );
};

export default GuidesCards;
