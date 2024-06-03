import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getFunctions";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-page-content";
import HeadSEO from "@components/screens/head-content";

const articlePage = ({ locale, articles, allCategories }) => {
const { t } = useTranslation();
const pageTitle = `${t(articles.data[0].attributes.title)} - ONLYOFFICE`;

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={pageTitle}
          metaKeywords={pageTitle}
          currentLanguage={locale}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={allCategories.data} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SingleContent
          t={t}
          currentLanguage={locale}
          article={articles.data[0]}
          tags={articles.data[0]?.attributes.tags?.data}
          isCategory={false}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale, params }) {
  const [articles, allCategories] = await Promise.all([
    getAllArticles(locale, params.function || ''),
    getAllCategories(locale)
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      allCategories
    },
  };
}

export default articlePage;
