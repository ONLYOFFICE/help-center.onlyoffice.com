import React from "react";
import StyledHeadingContent from "./styled-heading";
import Menu from "./menu";

const HeadingContent = ({ t, template, currentLanguage, articles }) => {
  return (
    <StyledHeadingContent template={template}>
      {/* <Menu t={t} template={template} currentLanguage={currentLanguage} categories={categories} /> */}
      <Menu t={t} template={template} currentLanguage={currentLanguage} articles={articles} />
    </StyledHeadingContent>
  );
};

export default HeadingContent;
