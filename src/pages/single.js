import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../components/layout";
import HeadingContent from "../sub-components/header-content";
import Accordion from "../sub-components/accordion";
import Footer from "../sub-components/footer-content";
import SingleContent from "../sub-components/single-content";

const SinglePage = () => {
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
        <SingleContent t={t}/>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={language} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default SinglePage;

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
