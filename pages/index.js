import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";
import getAllCategories from "@lib/strapi/getCategories";
import getAllDocsArticles from "@lib/strapi/getDocsArticles";
import getAllDesktopArticles from "@lib/strapi/getDesktopArticles";
import getAllMobileArticles from "@lib/strapi/getMobileArticles";
import getAllDocSpaceArticles from "@lib/strapi/getDocSpaceArticles";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import InfoContent from "@components/screens/main-content/info-content";
import GuidesCards from "@components/screens/main-content/guides-cards";
import Accordion from "@components/screens/common/accordion";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import createAllArticlesList from "@utils/helpers/Common/createAllArticlesList";

const Index = ({ locale, categories, integrationArticles, docsArticles, docspaceArticles, mobileArticles, desktopArticles }) => {
  const { t } = useTranslation();
  const result = createAllArticlesList(integrationArticles.data, docsArticles.data, docspaceArticles.data, mobileArticles.data, desktopArticles.data );
  const pageCategory = 'main';

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
        <GuidesCards t={t} categories={categories.data} articles={result} isCategory={false} className="mp" mainCategory={pageCategory} />
        <Accordion t={t} currentLanguage={locale} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const integrationArticles = await getAllArticles(locale);
  const docsArticles = await getAllDocsArticles(locale);
  const desktopArticles = await getAllDesktopArticles(locale);
  const mobileArticles = await getAllMobileArticles(locale);
  const docspaceArticles = await getAllDocSpaceArticles(locale);
  const categories = await getAllCategories(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      integrationArticles,
      docsArticles,
      desktopArticles,
      mobileArticles,
      docspaceArticles,
      categories
    },
  };
};

export default Index;