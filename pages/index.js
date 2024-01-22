import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import InfoContent from "@components/screens/main-content/info-content";
import GuidesCards from "@components/screens/main-content/guides-cards";
import Accordion from "@components/screens/common/accordion";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";

const Index = ({ locale, categories, articles }) => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <Layout.PageHead>
      <HeadSEO
          title={t("titleIndexPage")}
          metaSiteNameOg={t("metaSiteNameOg")}
          metaDescription={t("titleIndexPage")}
          metaDescriptionOg={t("metaDescriptionOgIndexPage")}
          metaKeywords={t("metaKeywordsIndexPage")}
          currentLanguage={locale}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={true} currentLanguage={locale} categories={categories.data} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InfoContent t={t} categories={categories.data} currentLanguage={locale} isCategory={false} />
        <GuidesCards t={t} categories={categories.data} articles={articles.data} links={articles.data} isCategory={false} className="mp" />
        <Accordion t={t} currentLanguage={locale} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const articles = await getAllArticles(locale);
  const categories = await getAllCategories(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      categories
    },
  };
};

export default Index;