import React from "react";
import StyledGuidesCell from "./styled-guides-cell";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";
import ExternalLink from "@components/common/link";
import Text from "@components/common/text";
import IconButton from "@components/common/icon-button";

const GuidesCell = ({ pic, headData, t }) => {
  const firstLine = headData.data.filter((item) => item.line === "1");
  const secondLine = headData.data.filter((item) => item.line === "2");
  return (
    <StyledGuidesCell pic={pic} headData={headData}>
      <Box className="cell_header">
        <Box className="cell_icon" alignItems="center">
          <IconButton
            isClickable={false}
            iconName={pic}
            size={80}
          />
        </Box>
        <Box className="cell_header_links">
          {headData.isExternal ? 
          <ExternalLink className="presearch_title_link" label={t(headData.header)} href={headData.header_href} />
          : 
          <InternalLink className="presearch_title_link" label={t(headData.header)} href={headData.header_href} />
          }
          <Text label={t(headData.text)} />
        </Box>
      </Box>
      <Box className="cell_links">
        <Box className="links_area">
        {firstLine.map((it, index) => {
          if (it.isExternal) {
            return (
              <ExternalLink key={index} label={t(it.title)} className={`${ !it.isBold && "not_bold" }`} href={it.href} />
            )
          } else {
            return (
              <InternalLink key={index} label={t(it.title)} className={`${ !it.isBold && "not_bold" }`} href={it.href} />
            )
          }
          })}
        </Box>
        <Box className="links_area">
        {secondLine.map((it, index) => {
          if (it.isExternal) {
            return (
              <ExternalLink key={index} label={t(it.title)} className={`${ !it.isBold && "not_bold" }`} href={it.href} />
            )
          } else {
            return (
              <InternalLink key={index} label={t(it.title)} className={`${ !it.isBold && "not_bold" }`} href={it.href} />
            )
          }
          })}
        </Box>
      </Box>
    </StyledGuidesCell>
  );
};

export default GuidesCell;
