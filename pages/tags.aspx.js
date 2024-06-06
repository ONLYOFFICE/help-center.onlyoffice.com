import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllTags from "@lib/strapi/getTags";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import SingleContent from "@components/screens/single-page-content";

const Index = ({ locale, categories, tags }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={`${t("Tags")} - ONLYOFFICE`}
          metaSiteNameOg={t("metaSiteNameOg")}
          metaDescription={t("titleIndexPage")}
          metaDescriptionOg={t("metaDescriptionOgIndexPage")}
          metaKeywords={t("metaKeywordsIndexPage")}
          currentLanguage={locale}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={true} currentLanguage={locale} categories={categories.data} isMain={true} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SingleContent
          t={t}
          currentLanguage={locale}
          isTagPage={true}
          content={tags.data}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const [tags, categories] = await Promise.all([
    getAllTags(locale),
    getAllCategories(locale)
  ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      tags,
      categories
    },
  };
};

export default Index;