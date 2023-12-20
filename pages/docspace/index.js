import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";
import getAllCategories from "@lib/strapi/getCategories";
import getAllVideos from "@lib/strapi/getVideos";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-page-content";
import HeadSEO from "@components/screens/head-content";

const DocspacePage = ({ locale, articles, videos, categories }) => {
  const { t } = useTranslation();
  const curArticles = useMemo(
    () => articles.data.filter((it) => it.attributes.category.data?.attributes.slug_id === "docspace"),
    [articles]
  );
  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={t("Docspace - ONLYOFFICE")}
          metaSiteNameOg={t("metaSiteNameOg")}
          metaDescription={t("titleIndexPage")}
          metaDescriptionOg={t("metaDescriptionOgIndexPage")}
          metaKeywords={t("Docspace - ONLYOFFICE")}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} articles={articles.data} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SingleContent t={t} currentLanguage={locale} articles={articles.data} categories={categories.data} category={"docspace"} isCategory={true}>
        </SingleContent>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale }) {
  const articles = await getAllArticles(locale);
  const categories = await getAllCategories(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      categories
    },
  }
}

export default DocspacePage;