import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllCommonCategories from "@lib/strapi/getCategories";
import { CATEGORIES } from "@utils/constants";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import InfoContent from "@components/screens/main-content/info-content";
import GuidesCards from "@components/screens/main-content/guides-cards";
import withErrorHandling from "@components/common/hoc/error-handling";

const CategoryPage = ({ data }) => {
  const { t } = useTranslation();
  if (!data) {
    return null;
  }
  const { articles, categories, category, currentCategories, locale } = data;
  const pageTitle = `${t(category.data[0].attributes.name)} - ONLYOFFICE`;
  
  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={pageTitle}
          metaSiteNameOg={t("metaSiteNameOg")}
          metaDescription={t("titleIndexPage")}
          metaDescriptionOg={t("metaDescriptionOgIndexPage")}
          metaKeywords={pageTitle}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categories.data} pageCategory={category.data[0].attributes} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InfoContent t={t} categories={categories.data} currentLanguage={locale} isCategory={true} category={category.data[0].attributes} />
        <GuidesCards t={t} categories={currentCategories.data} articles={articles.data} isCategory={true} mainCategory={category.data[0].attributes.slug_id} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale, params, res }) => {
  const categorySlug = params.category;
  const capitalizeCategorySlug = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  if (CATEGORIES.includes(capitalizeCategorySlug)) {
    const getAllArticles = require(`@lib/strapi/get${capitalizeCategorySlug}Articles`).default;
    const getAllCategories = require(`@lib/strapi/get${capitalizeCategorySlug}Categories`).default;

    const [articles, currentCategories, category, categories] = await Promise.all([
      getAllArticles(locale), getAllCategories(locale),
      getAllCommonCategories(locale, categorySlug || ''), getAllCommonCategories(locale)
    ]);

    return {
      props: {
        ...(await serverSideTranslations(locale, 'common')),
        data: {
          locale,
          articles,
          categories,
          category,
          currentCategories,
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
};


export default withErrorHandling(CategoryPage);