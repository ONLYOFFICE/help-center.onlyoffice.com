import React from "react";
import StyledGuidesCell from "./styled-guides-cell";
import Box from "../../../../../../components/box";
import InternalLink from "../../../../../../components/internal-link";
import Text from "../../../../../../components/text";
import IconButton from "../../../../../../components/icon-button";

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
          <InternalLink className="presearch_title_link" label={t(headData.header)} href={headData.header_href} />
          <Text label={t(headData.text)} />
        </Box>
      </Box>
      <Box className="cell_links">
        <Box className="links_area">
       {firstLine.map((it, index) => {
            return <InternalLink key={index} label={t(it.title)} className={!it.isBold && "not_bold"} href={it.href} />;
          })}
        </Box>
        <Box className="links_area">
        {secondLine.map((it, index) => {
            return <InternalLink key={index} label={t(it.title)} className={!it.isBold && "not_bold"} href={it.href} />;
          })}
        </Box>
      </Box>
    </StyledGuidesCell>
  );
};

export default GuidesCell;
