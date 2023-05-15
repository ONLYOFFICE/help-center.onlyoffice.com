import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-content";

const SinglePage = ({ locale, articles, categories }) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Layout.PageHead></Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categories.data} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SingleContent t={t} currentLanguage={locale} articles={articles.data} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
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

export default SinglePage;