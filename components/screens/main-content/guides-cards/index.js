import React, { useState } from "react";
import GuidesCell from "../guides-cards/sub-components/guides-cell";
import StyledGuidesCards from "./styled-guides-cards";
import InternalLink from "@components/common/internal-link";
import Box from "@components/common/box";

const GuidesCards = ({ t, articles, categories, isCategory, className, mainCategory }) => {
  const getArtData = (category) => {
    return articles?.filter((item) => item.data.attributes.category?.data?.attributes.slug_id === category);
  };
  const changelogData = categories?.find((item) => item.attributes?.slug_id === "changelog");
  const roadmapData = categories?.find((item) => item.attributes?.slug_id === "roadmap");
  const troubleshootingData = categories?.find((item) => item.attributes?.slug_id === "troubleshooting");
  const topData = [changelogData ? changelogData : null, roadmapData ? roadmapData : null, troubleshootingData ? troubleshootingData : null].filter(item => item !== null);
  const mappedCategories = categories.filter(item => !topData.includes(item));

  return (
    <StyledGuidesCards className={className}>
      {topData.length != 0 && <Box className="top-blck">
        {topData?.map((item, idx) => {
          return (
            <div className="top-links" key={idx}>
              <img src={item?.attributes.card_field_img.data.attributes.url} />
              <InternalLink href={item?.attributes.url} label={item?.attributes.name} />
            </div>
          )
        })}
      </Box>}
      <Box className="squares">
        {mappedCategories?.sort((a, b) => {
          if (a.attributes.position !== undefined && b.attributes.position !== undefined) {
            return a.attributes.position - b.attributes.position;
          }
        })
          .map((it, index) => {
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
      </Box>
    </StyledGuidesCards>
  );
};

export default GuidesCards;
