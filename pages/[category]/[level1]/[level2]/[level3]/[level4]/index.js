import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllCommonCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import SingleContent from "@components/screens/single-page-content";
import { CATEGORIES, PATTERN } from "@utils/constants";
import withErrorHandling from "@components/common/hoc/error-handling";

const subcategoryPage = ({ data }) => {
  const { t } = useTranslation();
  if (!data) {
    return null;
  }
  const { articles, currentCategory, category, categories, locale, params } = data;

  // const createArticlesUrl = require(`@utils/helpers/${params.capitalizeCategorySlug}Category/createArticlesUrl`).default;
  // const link = articles.data.length === 1 && createArticlesUrl(articles.data[0], params.level4, params.level1);

  // const { seo_title, seo_description } = articles.data[0].attributes;
  return (
    <Layout>
      {/* <Layout.PageHead>
        <HeadSEO
          title={seo_title}
          metaDescription={seo_description}
          metaDescriptionOg={seo_description}
          metaKeywords={seo_title}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categories.data} pageCategory={category.data[0].attributes.slug_id} />
      </Layout.PageHeader>
      <Layout.SectionMain>
      <SingleContent
            t={t}
            currentLanguage={locale}
            article={articles.data[0]}
            tags={articles.data[0]?.attributes.tags?.data}
            isCategory={false}
            videos={articles.data[0]?.attributes.videos?.data}
            category={category.data[0].attributes}
            categories={currentCategory.data[0].attributes}
            pagePath={link}
          />
      </Layout.SectionMain> */}
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale, params, res }) {
  const pageUrl = PATTERN.test(params.level4) ? params.level4 : '';
  const categorySlug = params.category;
  params.capitalizeCategorySlug = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  if (CATEGORIES.includes(params.capitalizeCategorySlug)) {
    const getAllArticles = require(`@lib/strapi/get${params.capitalizeCategorySlug}Articles`).default;
    const getAllCategories = require(`@lib/strapi/get${params.capitalizeCategorySlug}Categories`).default;

    const [articles, currentCategory, category, categories] = await Promise.all([
      getAllArticles(locale, params.level1 || '', pageUrl, false, params.level2, params.level3, params.level4 || ''), getAllCategories(locale, params.level1 || ''),
      getAllCommonCategories(locale, categorySlug || ''), getAllCommonCategories(locale)
    ]);

    if (!articles || !category || !categories || !currentCategory) {
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
          categories,
          currentCategory,
          params
        },
      },
    };
  } else {
    res.statusCode = 404;
    return {
      props: {
        ...(await serverSideTranslations(locale, 'common')),
      },
    };
  }
}

export default withErrorHandling(subcategoryPage);