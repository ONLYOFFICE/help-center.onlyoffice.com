import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllVideos from "@lib/strapi/getVideos";
import getAllTags from "@lib/strapi/getTags";
import getAllCommonCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import SingleContent from "@components/screens/single-page-content";

const subcategoryPage = ({ locale, articles, videos, tags, categories, currentCategory, category, params }) => {
  const { t } = useTranslation();
  const createArticlesUrl = require(`@utils/helpers/${params.capitalizeCategorySlug}Category/createArticlesUrl`).default;
  const link = articles.data.length === 1 && createArticlesUrl(articles.data[0], params.level5, params.level1);

  //console.log(link);

  const { seo_title, seo_description } = articles.data[0].attributes;
  return (
    <Layout>
      <Layout.PageHead>
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
            tags={tags.data}
            isCategory={false}
            videos={videos.data}
            category={category.data[0].attributes}
            categories={currentCategory.data[0].attributes}
            pagePath={link}
          />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale, params }) {
  const pattern = /[a-zA-Z0-9\-]+\.aspx$/;
  const pageUrl = pattern.test(params.level5) ? params.level5 : '';
  const categorySlug = params.category;
  params.capitalizeCategorySlug = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  const getAllArticles = require(`@lib/strapi/get${params.capitalizeCategorySlug}Articles`).default;
  const getAllCategories = require(`@lib/strapi/get${params.capitalizeCategorySlug}Categories`).default;

  const [articles, currentCategory, category, categories, videos, tags] = await Promise.all([
    getAllArticles(locale, params.level1 || '', pageUrl), getAllCategories(locale, params.level1 || ''),
    getAllCommonCategories(locale, categorySlug || ''), getAllCommonCategories(locale),
    getAllVideos(locale), getAllTags(locale)
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      category,
      categories,
      currentCategory,
      videos,
      tags,
      params
    },
  };
}

export default subcategoryPage;
