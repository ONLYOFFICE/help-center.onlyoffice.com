import React from "react";
import { isInternalLink } from 'is-internal-link';
import StyledGuidesCell from "./styled-guides-cell";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";
import ExternalLink from "@components/common/link";
import Text from "@components/common/text";
import GuidesLinks from "../guides-links";

const GuidesCell = ({ headData, category, linkData, t }) => {
  const linksLength = Math.floor(linkData.length/2);
  return (
    <StyledGuidesCell>
      <Box className="cell_header">
        <Box className="cell_icon" alignItems="center">
          <img
            src={headData.card_field_img.data?.attributes.url}
          />
        </Box>
        <Box className="cell_header_links">
          {isInternalLink(headData.url) ?
            <InternalLink className="presearch_title_link" label={t(headData.name)} href={headData.url} />
            :
            <ExternalLink className="presearch_title_link" label={t(headData.name)} href={headData.url} />
          }
          <Text label={t(headData.description)} />
        </Box>
      </Box>
      <GuidesLinks t={t} linksLength={linksLength} mainArticles={linkData} category={category} />
    </StyledGuidesCell>
  );
};

export default GuidesCell;
