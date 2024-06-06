import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-page-content";
import HeadSEO from "@components/screens/head-content";
import withErrorHandling from "@components/common/hoc/error-handling";

const articlePage = ({ data }) => {
  const { t } = useTranslation();
  if (!data) {
    return null;
  }
  const { articles, category, allCategories, locale } = data;
  const { seo_title, seo_description } = articles.data.length === 1 && articles.data[0]?.attributes;

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={seo_title}
          metaDescription={seo_description}
          metaDescriptionOg={seo_description}
          metaKeywords={seo_title}
          currentLanguage={locale}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={allCategories.data} pageCategory={category.data[0].attributes.slug_id} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SingleContent
          t={t}
          currentLanguage={locale}
          article={articles.data[0]}
          tags={articles.data[0].attributes.tags?.data}
          isCategory={false}
          videos={articles.data[0].attributes.videos?.data}
          category={category.data[0].attributes.slug_id}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale, params }) {
  const categorySlug = "integration";
  const [articles, category, allCategories] = await Promise.all([
    getAllArticles(locale, params.integration || ''), getAllCategories(locale, categorySlug), 
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
  };
}

export default withErrorHandling(articlePage);