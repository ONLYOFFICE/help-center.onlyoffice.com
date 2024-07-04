import React from "react";
import StyledGuidesLinks from "./styled-guides-links";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";

const GuidesLinks = ({ data, isCategoryPage, categorySlug }) => {
  const slugId = data.attributes.slug_id === "docs" ? "docs" : `${data.attributes.slug_id}s`;
  const connectorsSlug = data.attributes.slug_id === "integration";
  const connectorsArticles = data.attributes.articles?.data;
  const mainArticles = data.attributes[`category_${slugId}`]?.data;
  const filteredData = mainArticles?.filter(item => !["changelog", "roadmap", "troubleshooting"].includes(item.attributes.slug_id)) || [];
  const items = isCategoryPage ? data.attributes[`level_2_${categorySlug}`]?.data : filteredData;

  return (
    <StyledGuidesLinks>
      <Box className="con-box">
        {connectorsSlug ? (
          connectorsArticles?.slice(0, Math.ceil(connectorsArticles.length / 2)).map((item, index) => (
            <InternalLink className="cell_link not_bold" label={item.attributes.title} href={item.attributes?.url ? item.attributes?.url : ""} key={index} />
          ))
        ) : (
          items?.slice(0, Math.ceil(items?.length / 2)).map((item, index) => (
            isCategoryPage ? (
              <InternalLink className="cell_link" label={item.attributes.name} href={item.attributes?.url ? item.attributes?.url : ""} key={index} />
            ) : (
              <React.Fragment key={index}>
                <InternalLink className="cell_link" label={item.attributes.name} href={item.attributes?.url ? item.attributes?.url : ""} />
                {item.attributes[`level_2_${slugId}`].data.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name)).map((itemLevel2, index) => (
                  <InternalLink
                    className="cell_link not_bold"
                    label={itemLevel2.attributes.name}
                    href={itemLevel2?.attributes.url ? itemLevel2?.attributes.url : ""}
                    key={index}
                  />
                ))}
              </React.Fragment>
            )
          ))
        )}
      </Box>
      <Box className="con-box">
        {connectorsSlug ? (
          connectorsArticles?.slice(Math.ceil(connectorsArticles.length / 2), connectorsArticles.length).map((item, index) => (
            <InternalLink className="cell_link not_bold" label={item.attributes.title} href={item.attributes?.url ? item.attributes?.url : ""} key={index} />
          ))
        ) : (
          items?.slice(Math.ceil(items.length / 2), mainArticles?.length).map((item, index) => (
            isCategoryPage ? (
              <InternalLink className="cell_link" label={item.attributes.name} href={item.attributes?.url ? item.attributes?.url : ""} key={index} />
            ) : (
              <React.Fragment key={index}>
                <InternalLink className="cell_link" label={item.attributes.name} href={item.attributes?.url ? item.attributes?.url : ""} />
                {item.attributes[`level_2_${slugId}`].data.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name)).map((itemLevel2, index) => (
                  <InternalLink
                    className="cell_link not_bold"
                    label={itemLevel2.attributes.name}
                    href={itemLevel2?.attributes.url ? itemLevel2?.attributes.url : ""}
                    key={index}
                  />
                ))}
              </React.Fragment>
            )
          ))
        )}
      </Box>
    </StyledGuidesLinks>
  );
};

export default GuidesLinks;
