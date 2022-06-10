import React from "react";

import StyledInfoContent from "./styled-info-content";

import SearchContent from "./sub-components/search";

const InfoContent = ({ t, template, currentLanguage }) => {
  return (
    <StyledInfoContent template={template}>
      <SearchContent t={t} />
    </StyledInfoContent>
  );
};

export default InfoContent;
