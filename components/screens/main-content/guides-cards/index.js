import React, { useMemo } from "react";
import GuidesCell from "../guides-cards/sub-components/guides-cell";
import StyledGuidesCards from "./styled-guides-cards";
import { LinksInfo } from "@public/data/main-page-links.js";

const GuidesCards = ({ t, articles, categories, guides }) => {
  // const getArtData = (category) => {
  //   return articles.filter((item) => item.attributes.category.data.attributes.slug_id === category);
  // };
  const getArtData = (category) => {
     return LinksInfo.find((item) => item.position === category);
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
