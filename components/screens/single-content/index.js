import React from "react";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./left-menu";
import CenterContent from "./content";

const SingleContent = ({ t, articles, children, ...rest }) => {
  return (
    <StyledSingleContent {...rest}>
      <LeftMenu t={t} />
      <CenterContent t={t} articles={articles} children={children} />
    </StyledSingleContent>
  );
};

export default SingleContent;
