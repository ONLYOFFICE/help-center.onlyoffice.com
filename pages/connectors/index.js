import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";
import getAllCategories from "@lib/strapi/getCategories";
import getAllVideos from "@lib/strapi/getVideos";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-content";
import HeadSEO from "@components/screens/head-content";
import Video from "@components/screens/single-content/video";
import DownloadArea from "@components/screens/single-content/download-area";

const ConnectorsPage = ({ locale, articles, videos, categories }) => {
  const { t } = useTranslation();
  const curArticles = useMemo(
    () => articles.data.filter((it) => it.attributes.category.data.attributes.slug === "connectors"),
    [articles]
  );
  //const videoData = videos.filter((it) => it.attributes.category.data.attributes.slug === category && it.attributes.is_main);
  const curVideos = videos.data.filter((it) => {
  return curArticles.some((elem) => {
    return elem.id === it.attributes.article.data.id;
      });
    });
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
        <SingleContent t={t} currentLanguage={locale} articles={articles.data} categories={categories.data} category={"connectors"} isCategory={true}>
           <Video t={t} videos={curVideos} isMain={true} />
          <DownloadArea className="download-area" t={t} />
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
  const videos = await getAllVideos(locale);
  const categories = await getAllCategories(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      videos,
      categories
    },
  }
}

export default ConnectorsPage;