import React from "react";
import StyledHeadingContent from "./styled-heading";
import Menu from "./menu";

const HeadingContent = ({ t, template, currentLanguage, categories }) => {
  return (
    <StyledHeadingContent template={template}>
      <Menu t={t} template={template} currentLanguage={currentLanguage} categories={categories} />
    </StyledHeadingContent>
  );
};

export default HeadingContent;
