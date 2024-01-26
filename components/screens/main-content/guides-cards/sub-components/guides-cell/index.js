import React, { useState, useEffect } from "react";
import StyledGuidesCell from "./styled-guides-cell";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";
import Text from "@components/common/text";
import GuidesLinks from "../guides-links";
import ReactHtmlParser from "react-html-parser";
import Heading from "@components/common/heading";
import filterDocsAricles from "@utils/helpers/DocsCategory/filterForDocsCategory";

const GuidesCell = ({ headData, category, linkData, mainCategory, t }) => {
  return (
    <StyledGuidesCell>
      <Box className="cell_header">
        <Box className={`cell_icon ${(category == 'connectors' && mainCategory !== 'main') ? 'connectors' : ''}`}>
          {category !== 'connectors' && headData.card_field_img?.data?.attributes.url && (
            <img src={headData.card_field_img.data?.attributes.url} />
          )}
          {category == 'connectors' && linkData && headData.card_field_img?.data?.attributes.url && (
            <img src={headData.card_field_img.data?.attributes.url} />
          )}
          {headData.url != null ? (
            <InternalLink
              className="presearch_title_link"
              label={t(headData.name) || t(headData.title)}
              href={headData.url}
            />
          ) : (
            <Heading className="presearch_title_link heading" label={t(headData.name)} />
          )}
          {category === 'connectors' && !linkData && headData.connector_img?.data?.attributes.url && (
            <img src={headData.connector_img.data?.attributes.url} />
          )}
        </Box>
        <Box className="cell_header_links">
          <Text>{ReactHtmlParser(headData.description)}</Text>
        </Box>
      </Box>
      {linkData && <GuidesLinks t={t} mainArticles={linkData} mainCategory={mainCategory} category={category} />}
    </StyledGuidesCell>
  );
};

export default GuidesCell;
