import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getDesktopArticles";
import getAllCommonCategories from "@lib/strapi/getCategories";
import getAllCategories from "@lib/strapi/getDesktopCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-page-content";
import HeadSEO from "@components/screens/head-content";
import InfoContent from "@components/screens/main-content/info-content";
import GuidesCards from "@components/screens/main-content/guides-cards";

const CategoryPage = ({ locale, articles, categories, currentCategories }) => {
  const { t } = useTranslation();
  const pageCategory = "desktop";
  const curArticles = useMemo(
    () => articles?.data.filter((it) => it.attributes.category?.data?.attributes.slug_id === pageCategory),
    [articles]
  );
  const curCatInfo = useMemo(
    () => categories.data.find((it) => it.attributes.slug_id === pageCategory),
    [categories]
  );
  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={t("Desktop - ONLYOFFICE")}
          metaSiteNameOg={t("metaSiteNameOg")}
          metaDescription={t("titleIndexPage")}
          metaDescriptionOg={t("metaDescriptionOgIndexPage")}
          metaKeywords={t("Desktop - ONLYOFFICE")}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categories.data} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InfoContent t={t} categories={categories.data} currentLanguage={locale} isCategory={true} category={curCatInfo.attributes} />
        <GuidesCards t={t} categories={currentCategories.data} articles={articles.data} isCategory={true} mainCategory={pageCategory} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale }) {
  const articles = await getAllArticles(locale);
  const categories = await getAllCommonCategories(locale);
  const currentCategories = await getAllCategories(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      categories,
      currentCategories
    },
  }
}

export default CategoryPage;