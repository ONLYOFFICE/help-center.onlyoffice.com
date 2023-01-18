import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";
import getAllTags from "@lib/strapi/getTags";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-content";
import DownloadArea from "@components/screens/single-content/download-area";
import QuestionArea from "@components/screens/single-content/question-area";
import HeadSEO from "@components/screens/head-content";

const GettingStartedAlfrescoPage = ({ locale, articles, tags }) => {
  const { t } = useTranslation();
  const alfrescoData = articles.data.find((it) => it.attributes.slug === "gettingstarted-alfresco");
  return (
    <Layout>
      <Layout.PageHead>
      <HeadSEO
          title={t("titleIndexPage")}
          metaSiteNameOg={t("metaSiteNameOg")}
          metaDescription={t("titleIndexPage")}
          metaDescriptionOg={t("metaDescriptionOgIndexPage")}
          metaKeywords={t("metaKeywordsIndexPage")}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SingleContent t={t} currentLanguage={locale} articles={alfrescoData} tags={tags.data} isCategory={false}>
          <DownloadArea className="download-area" t={t} />
          <QuestionArea t={t} />
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
  const tags = await getAllTags(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      tags
    },
  }
}

export default GettingStartedAlfrescoPage;