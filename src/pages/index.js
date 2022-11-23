import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import InfoContent from "@components/screens/main-content/info-content";
import GuidesCards from "@components/screens/main-content/guides-cards";
import Accordion from "@components/screens/accordion";
import Footer from "@components/screens/footer-content";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Layout>
      <Layout.PageHead></Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={true} currentLanguage={language} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InfoContent t={t} currentLanguage={language}/>
        <GuidesCards t={t} />
        <Accordion t={t} currentLanguage={language} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={language} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { in: [$language, "en"] } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
