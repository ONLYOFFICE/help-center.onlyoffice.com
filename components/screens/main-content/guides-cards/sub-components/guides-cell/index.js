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
    <StyledGuidesCell pic={pic.src} headData={headData}>
      <Box className="cell_header">
        <Box className="cell_icon" alignItems="center">
          <IconButton
            isClickable={false}
            iconName={pic.src}
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
              <div className={`cell_link ${ !it.isBold ? "not_bold" : "" }`} key={index}>
                <ExternalLink label={t(it.title)} href={it.href} />
              </div>
            )
          } else if (it.heading) {
            return (
              <div className={`cell_link cell_heading ${it.title} ${ !it.isBold ? "not_bold" : "" }`} key={index}>
                {t(it.title)}
              </div>
            )
          } else {
            return (
              <div className={`cell_link ${ !it.isBold ? "not_bold" : "" }`} key={index}>
                <InternalLink label={t(it.title)} href={it.href} />
              </div>
            )
          }
          })}
        </Box>
        <Box className="links_area">
        {secondLine.map((it, index) => {
          if (it.isExternal) {
            return (
              <div className={`cell_link ${ !it.isBold ? "not_bold" : "" }`} key={index}>
                <ExternalLink label={t(it.title)} href={it.href} />
              </div>
            )
          } else if (it.heading) {
            return (
              <div className={`cell_link cell_heading ${it.title} ${ !it.isBold ? "not_bold" : "" }`} key={index}>
                {t(it.title)}
              </div>
            )
          } else {
            return (
              <div className={`cell_link ${ !it.isBold ? "not_bold" : "" }`} key={index}>
                <InternalLink label={t(it.title)} href={it.href} />
              </div>
            )
          }
          })}
        </Box>
      </Box>
    </StyledGuidesCell>
  );
};

export default GuidesCell;
