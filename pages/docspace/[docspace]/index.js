import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import getAllArticles from "@lib/strapi/getArticles";
import getAllVideos from "@lib/strapi/getVideos";
import getAllTags from "@lib/strapi/getTags";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-content";
import HeadSEO from "@components/screens/head-content";
import DownloadArea from "@components/screens/single-content/download-area";

const articlePage = ({ locale, articles, videos, tags, categories }) => {
  const { t } = useTranslation();
  const query = useRouter();
  const pageLoc = query.locale !== "en" ? query.locale : "";
  const pagePath = (pageLoc + query.asPath).split('#')[0];
  const pageData = useMemo(
    () => articles?.data.find((it) => it.attributes.url === pagePath),
    [articles]
  );
  const data = pageData?.attributes;
  const { seo_title, seo_description } = data;
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
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categories.data} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SingleContent
          t={t}
          currentLanguage={locale}
          articles={pageData}
          tags={tags.data}
          isCategory={false} 
          videos={videos.data}
        >
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
  const categories = await getAllCategories(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      videos,
      tags,
      categories
    },
  };
}

export default articlePage;
