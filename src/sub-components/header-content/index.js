import React from "react";

import StyledHeadingContent from "./styled-heading";

import Menu from "./menu";
import SearchContent from "./search";

const HeadingContent = ({ t, template, currentLanguage }) => {
  return (
    <StyledHeadingContent template={template}>
      <Menu t={t} template={template} currentLanguage={currentLanguage} />
      <SearchContent t={t} />
    </StyledHeadingContent>
  );
};

export default HeadingContent;
