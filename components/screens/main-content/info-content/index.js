import React from "react";

import StyledInfoContent from "./styled-info-content";

import SearchContent from "./sub-components/search";
import Category from "./sub-components/category";

const InfoContent = ({ t, template, categories, currentLanguage }) => {
  return (
    <StyledInfoContent template={template}>
      <SearchContent t={t} />
      <Category t={t} category={categories} currentLanguage={currentLanguage}/>
    </StyledInfoContent>
  );
};

export default InfoContent;
