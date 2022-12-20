import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import InfoContent from "@components/screens/main-content/info-content";
import GuidesCards from "@components/screens/main-content/guides-cards";
import Accordion from "@components/screens/common/accordion";
import Footer from "@components/screens/footer-content";

const IndexPage = ({ locale }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Layout.PageHead></Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={true} currentLanguage={locale} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InfoContent t={t} currentLanguage={locale}/>
        <GuidesCards t={t} />
        {/* <Accordion t={t} currentLanguage={language} /> */}
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const articles = await getAllArticles(locale);
 
  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles
      
    },
  };
};

export default IndexPage;