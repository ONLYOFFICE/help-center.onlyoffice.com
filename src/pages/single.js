import React from "react";
import { useTranslation } from "next-i18next";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-content";

const SinglePage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Layout>
      <Layout.PageHead></Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={language} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SingleContent t={t} currentLanguage={language} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={language} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default SinglePage;