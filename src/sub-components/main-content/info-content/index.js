import React from "react";

import StyledInfoContent from "./styled-info-content";

import SearchContent from "./sub-components/search";
import Category from "./sub-components/category";
import { useStaticQuery, graphql } from "gatsby";

const InfoContent = ({ t, template, currentLanguage }) => {
  const { allStrapiArticle, strapiGlobal, allStrapiText } = useStaticQuery(graphql`
    query {
      strapiGlobal {
        siteName
        siteDescription
      }
      allStrapiText {
        nodes {
          ...TextCard
        }
      }
    }
  `)
  return (
    <StyledInfoContent template={template}>
      <SearchContent t={t} article={allStrapiText.nodes} />
      <Category t={t} currentLanguage={currentLanguage}/>
    </StyledInfoContent>
  );
};

export default InfoContent;
