import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import getAllArticles from "@lib/strapi/getArticles";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import InfoContent from "@components/screens/main-content/info-content";
import GuidesCards from "@components/screens/main-content/guides-cards";

const ConnectorsPage = ({ locale, articles, category, allCategories, categorySlug }) => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={t("Integration Guides - ONLYOFFICE")}
          metaSiteNameOg={t("ONLYOFFICE Help Center")}
          metaKeywords={t("Integration Guides - ONLYOFFICE")}
          currentLanguage={locale}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={allCategories.data} pageCategory={categorySlug} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InfoContent t={t} categories={allCategories.data} currentLanguage={locale} isCategory={true} category={category.data[0].attributes} />
        <GuidesCards t={t} categories={articles.data} articles={null} isCategory={true} mainCategory={categorySlug} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale, req }) {
  const categorySlug = req.url.substring(1);
  const [articles, category, allCategories] = await Promise.all([
    getAllArticles(locale, ''), getAllCategories(locale, categorySlug), 
    getAllCategories(locale)
  ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      category,
      allCategories,
      categorySlug
    },
  }
}

export default ConnectorsPage;