import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import InfoContent from "@components/screens/main-content/info-content";
import GuidesCards from "@components/screens/main-content/guides-cards";
import withErrorHandling from "@components/common/hoc/error-handling";

const ConnectorsPage = ({ data }) => {
  const { t } = useTranslation();
  if (!data) {
    return null;
  }
  const { articles, category, allCategories, locale } = data;
  
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
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={allCategories.data} pageCategory={category.data[0].attributes} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InfoContent t={t} categories={allCategories.data} currentLanguage={locale} isCategory={true} category={category.data[0].attributes} />
        <GuidesCards t={t} categories={articles.data} articles={null} isCategory={true} mainCategory={category.data[0].attributes.slug_id} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale, req }) {
  const isDataFetch = req.url.startsWith('/_next/data');
  const categorySlug = isDataFetch
    ? req.url.split('/').pop().replace('.json', '')
    : req.url.slice(1);

  const [articles, category, allCategories] = await Promise.all([
    getAllArticles(locale, ''), getAllCategories(locale, categorySlug), 
    getAllCategories(locale)
  ]);

  if (!articles || !category || !allCategories) {
    res.statusCode = 404;
    return {
      props: {
        ...(await serverSideTranslations(locale, 'common')),
        data: null,
      },
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      data: {
        locale,
        articles,
        category,
        allCategories
      },
    },
  }
}

export default withErrorHandling(ConnectorsPage);