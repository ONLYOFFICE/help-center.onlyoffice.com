import React, { useMemo } from "react";
import { isInternalLink } from 'is-internal-link';
import StyledGuidesCell from "./styled-guides-cell";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";
import ExternalLink from "@components/common/link";
import Text from "@components/common/text";

const GuidesCell = ({ headData, category, guides, linkData, t }) => {
  const firstLine = linkData.data.filter((item) => item.line === "1");
  const secondLine = linkData.data.filter((item) => item.line === "2");
  // const mainArticles = useMemo(
  //   () => linkData.filter((item) => item.attributes.is_main === true).sort(function (a, b) {
  //     return a.attributes.title.toLowerCase() <
  //       b.attributes.title.toLowerCase()
  //       ? -1
  //       : 1;
  //   }),
  //   [linkData]
  // );
  // const linksLength = Math.floor(mainArticles.length/2);

  //console.log(firstLine);
  //console.log(mainArticles);
  //console.log(instArticles);
  return (
    <StyledGuidesCell>
      <Box className="cell_header">
        <Box className="cell_icon" alignItems="center">
          <img
            src={headData.card_field_img.data.attributes.url}
          />
        </Box>
        <Box className="cell_header_links">
          {isInternalLink(headData.url) ?
            <ExternalLink className="presearch_title_link" label={t(headData.name)} href={headData.url} />
            :
            <InternalLink className="presearch_title_link" label={t(headData.name)} href={headData.url} />
          }
          <Text label={t(headData.description)} />
        </Box>
      </Box>
      <Box className="cell_links">
        <Box className="links_area">
          {category === "mobile" && <div className="cell_link cell_heading iOS not_bold">iOS</div>}
          {/* {mainArticles.slice(0, linksLength)?.map((it, index) => {
            return <div className={`cell_link ${ it.attributes.guide_type.data === null ? "not_bold" : "" }`} key={index}>
              <ExternalLink label={t(it.attributes.title)} href={it.attributes.url} />
            </div>
          })} */}
          {firstLine.map((it, index) => {
            if (it.isExternal) {
              return (
                <div className={`cell_link ${!it.isBold ? "not_bold" : ""}`} key={index}>
                  <ExternalLink label={t(it.title)} href={it.href} />
                </div>
              )
            } else if (it.heading) {
              return (
                <div className={`cell_link cell_heading ${it.title} ${!it.isBold ? "not_bold" : ""}`} key={index}>
                  {t(it.title)}
                </div>
              )
            } else {
              return (
                <div className={`cell_link ${!it.isBold ? "not_bold" : ""}`} key={index}>
                  <InternalLink label={t(it.title)} href={it.href} />
                </div>
              )
            }
          })}
        </Box>
        <Box className="links_area">
          {category === "mobile" && <div className="cell_link cell_heading Android not_bold">Android</div>}
          {/* {mainArticles.slice(linksLength, mainArticles.length)?.map((it, index) => {
            return <div className={`cell_link ${ it.attributes.guide_type.data === null ? "not_bold" : "" }`} key={index}>
              <ExternalLink label={t(it.attributes.title)} href={it.attributes.url} />
            </div>
          })} */}
          {secondLine.map((it, index) => {
            if (it.isExternal) {
              return (
                <div className={`cell_link ${!it.isBold ? "not_bold" : ""}`} key={index}>
                  <ExternalLink label={t(it.title)} href={it.href} />
                </div>
              )
            } else if (it.heading) {
              return (
                <div className={`cell_link cell_heading ${it.title} ${!it.isBold ? "not_bold" : ""}`} key={index}>
                  {t(it.title)}
                </div>
              )
            } else {
              return (
                <div className={`cell_link ${!it.isBold ? "not_bold" : ""}`} key={index}>
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
