import StyledGuidesCell from "./styled-guides-cell";
import React from "react";
import topSlugIdData from "../../data/top-slugid.json";
import InternalLink from "@components/common/internal-link";
import ReactHtmlParser from "react-html-parser";
import Heading from "@components/common/heading";

const GuidesCell = ({ data }) => {
  const slugId = data.attributes.slug_id === "docs" ? "docs" : `${data.attributes.slug_id}s`;
  const connectorsSlug = data.attributes.slug_id === "integration";
  const connectorsArticles = data.attributes.articles?.data.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title));
  const items = data.attributes[`category_${slugId}`]?.data.sort((a, b) => a.attributes.position - b.attributes?.position)?.filter(item => !topSlugIdData.includes(item.attributes.slug_id)) || [];

  return (
    <StyledGuidesCell>
      <div className="guides-cell-header">
        <div className="guides-cell-top">
          <img className="guides-cell-icon" src={data.attributes.card_field_img?.data?.attributes.url} alt={data.attributes.name} />

          {data.attributes.url === null ? (
            <Heading className="guides-cell-title" label={data.attributes.name} />
          ) : (
            <InternalLink className="guides-cell-title" label={data.attributes.name} href={data.attributes.url} />
          )}
        </div>
        {data.attributes.description &&
          <div className="guides-cell-description">{ReactHtmlParser(data.attributes.description)}</div>
        }
      </div>
      <div className="guides-cell-columns">
        <div className="guides-cell-column">
          {connectorsSlug ? (
            connectorsArticles?.slice(0, Math.ceil(connectorsArticles.length / 2)).map((item, index) => (
              <InternalLink className="guides-cell-link" label={item.attributes.title} href={item.attributes?.url} key={index} />
            ))
          ) : (
            items?.slice(0, Math.ceil(items?.length / 2)).map((item, index) => (
              <React.Fragment key={index}>
                {item.attributes?.url ? (
                  <InternalLink className="guides-cell-link guides-cell-header-link" label={item.attributes.name} href={item.attributes?.url} />
                ) : (
                  <div className="guides-cell-link guides-cell-header-link">{item.attributes.name}</div>
                )}
                {item.attributes[`level_2_${slugId}`]?.data.sort((a, b) => a.attributes.position - b.attributes?.position).map((itemLevel2, index) => (
                  <InternalLink
                    className="guides-cell-link"
                    label={itemLevel2.attributes.name}
                    href={itemLevel2?.attributes.url}
                    key={index}
                  />
                ))}
                {item.attributes[`article_${slugId}`]?.data.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title)).map((itemLevel2, index) => (
                  <InternalLink
                    className="guides-cell-link"
                    label={itemLevel2.attributes.name || itemLevel2.attributes.title}
                    href={itemLevel2?.attributes.url}
                    key={index}
                  />
                ))}
              </React.Fragment>
            )))}
        </div>
        <div className="guides-cell-column">
          {connectorsSlug ? (
            connectorsArticles?.slice(Math.ceil(connectorsArticles.length / 2), connectorsArticles.length).map((item, index) => (
              <InternalLink className="guides-cell-link" label={item.attributes.title} href={item.attributes?.url} key={index} />
            ))
          ) : (
            items?.slice(Math.ceil(items.length / 2), items?.length).map((item, index) => (
              <React.Fragment key={index}>
                {item.attributes?.url ? (
                  <InternalLink className="guides-cell-link guides-cell-header-link" label={item.attributes.name} href={item.attributes?.url} />
                ) : (
                  <div className="guides-cell-link guides-cell-header-link">{item.attributes.name}</div>
                )}
                {item.attributes[`level_2_${slugId}`]?.data.sort((a, b) => a.attributes.position - b.attributes?.position).map((itemLevel2, index) => (
                  <InternalLink
                    className="guides-cell-link"
                    label={itemLevel2.attributes.name}
                    href={itemLevel2?.attributes.url}
                    key={index}
                  />
                ))}
                {item.attributes[`article_${slugId}`]?.data.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title)).map((itemLevel2, index) => (
                  <InternalLink
                    className="guides-cell-link"
                    label={itemLevel2.attributes.name || itemLevel2.attributes.title}
                    href={itemLevel2?.attributes.url}
                    key={index}
                  />
                ))}
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    </StyledGuidesCell>
  );
};

export default GuidesCell;
