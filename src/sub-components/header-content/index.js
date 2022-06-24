import React from "react";

import StyledHeadingContent from "./styled-heading";

import Menu from "./menu";

const HeadingContent = ({ t, template, currentLanguage }) => {
  return (
    <StyledHeadingContent template={template}>
      <Menu t={t} template={template} currentLanguage={currentLanguage} />
    </StyledHeadingContent>
  );
};

export default HeadingContent;
