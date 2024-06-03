import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllCommonCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import CenterCategoryContent from "@components/screens/single-page-content/content/category-content";
import filterArticles from "@utils/helpers/Common/filterForAllCategories";

const subcategoryPage = ({ locale, articles, currentCategory, category, categories }) => {
  const { t } = useTranslation();
  const data = articles && filterArticles(articles.data, currentCategory?.data[0].attributes.slug_id, category.data[0].attributes.slug_id);

  const seo_title = data?.seo_title || t("titleIndexPage");
  const seo_description = data?.seo_description || t("metaDescriptionOgIndexPage");
  
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
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categories.data} pageCategory={category} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        {articles ? <CenterCategoryContent
          t={t}
          currentLanguage={locale}
          articles={data}
          category={currentCategory.data[0].attributes}
          categories={categories.data}
          isCategory={true}
          mainCategory={category.data[0].attributes} /> 
          :
          <SingleContent
            t={t}
            currentLanguage={locale}
            article={currentCategory.data[0]}
            isCategory={false}
            category={category.data[0].attributes}
          />}
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale, params }) {
  const pattern = /[a-zA-Z0-9\-]+\.aspx$/;
  const { level1 } = params;
  const pageUrl = pattern.test(level1) ? level1 : '';
  console.log(pageUrl);
  const pageCatSlug = level1;
  const categorySlug = params.category;

  const capitalizeCategorySlug = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  const getAllArticles = require(`@lib/strapi/get${capitalizeCategorySlug}Articles`).default;
  const getAllCategories = require(`@lib/strapi/get${capitalizeCategorySlug}Categories`).default;

  const [articles, currentCategory, category, categories] = await Promise.all([
    getAllArticles(locale, pageCatSlug || ''), 
    getAllCategories(locale, pageUrl ? '' : pageCatSlug || '', pageUrl ? pageUrl : ''),
    getAllCommonCategories(locale, categorySlug || ''), getAllCommonCategories(locale)
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      category,
      categories,
      currentCategory,
      pageCatSlug: pageCatSlug || null,
      categorySlug: categorySlug || null,
    },
  };
}


export default subcategoryPage;