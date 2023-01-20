import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import getAllArticles from "@lib/strapi/getArticles";
import getAllVideos from "@lib/strapi/getVideos";
import getAllTags from "@lib/strapi/getTags";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-content";
import HeadSEO from "@components/screens/head-content";
import Video from "@components/screens/single-content/video";
import DownloadArea from "@components/screens/single-content/download-area";

const articlePage = ({ locale, articles, videos, tags }) => {
  const { t } = useTranslation();
  const query = useRouter();
  const url = query.asPath;
  const pageData = articles.data.find((it) => it.attributes.url === query.asPath);
  //const alfrescoData = articles.data.find((it) => it.attributes.slug === "alfresco");
  console.log(query.query);
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
        <SingleContent
          t={t}
          currentLanguage={locale}
          articles={pageData}
          tags={tags.data}
          isCategory={false}
        >
          <Video t={t} items={pageData} videos={videos.data} isMain={false} />
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
  const tags = await getAllTags(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      videos,
      tags
    },
  };
}

export default articlePage;
