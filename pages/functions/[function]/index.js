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
import withErrorHandling from "@components/common/hoc/error-handling";

const articlePage = ({ data }) => {
const { t } = useTranslation();
const { articles, allCategories, locale } = data;
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

export async function getServerSideProps({ locale, req }) {
  const [articles, allCategories] = await Promise.all([
    getAllArticles(locale, req.url.slice(1) || ''),
    getAllCategories(locale)
  ]);

  if (!articles || !allCategories) {
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
        allCategories
      },
    },
  };
}

export default withErrorHandling(articlePage);
