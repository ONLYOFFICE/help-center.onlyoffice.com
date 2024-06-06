import React from 'react';
import { isInternalLink } from 'is-internal-link';
import StyledGuidesLinks from "./styled-guides-links";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";
import Link from "@components/common/link";

const GuidesLinks = ({ mainArticles, category, t }) => {

  return (
    <StyledGuidesLinks>
      <Box className="con-box">
        {mainArticles.slice(0, Math.ceil(mainArticles.length / 2)).map((item, idx) => (
          <React.Fragment key={idx}>
            {(item.attributes?.url || item?.url) && isInternalLink(item.attributes?.url || item?.url) ? 
            (<InternalLink className={`cell_link ${category === "integration" ? 'not_bold' : ''}`} label={t(item.attributes?.title) || t(item?.name)} href={item.attributes?.url || item?.url} />) : 
            (<Link classname="cell_link" label={t(item?.name)} href={item?.url} />)}
            {item.level_2_values && <>
              {item.level_2_values.map((item_lvl2, indx) => (
                <InternalLink className="cell_link not_bold" label={t(item_lvl2.name)} href={item_lvl2.url} key={indx} />
              ))}
            </>}
          </React.Fragment>
        ))}
      </Box>
      <Box className="con-box">
        {mainArticles.slice(Math.ceil(mainArticles.length / 2), mainArticles.length).map((item, idx) => (
          <React.Fragment key={idx}>
            {(item.attributes?.url || item?.url) && isInternalLink(item.attributes?.url || item?.url) && <InternalLink key={idx} className={`cell_link ${category === "integration" ? 'not_bold' : ''}`} label={t(item.attributes?.title) || t(item?.name)} href={item.attributes?.url || item?.url} />}
            {item.level_2_values && <>
              {item.level_2_values.map((item_lvl2, indx) => (
                <InternalLink className="cell_link not_bold" label={t(item_lvl2.name)} href={item_lvl2.url} key={indx} />
              ))}
            </>}
          </React.Fragment>
        ))}
      </Box>
    </StyledGuidesLinks>
  );
};

export default GuidesLinks;
