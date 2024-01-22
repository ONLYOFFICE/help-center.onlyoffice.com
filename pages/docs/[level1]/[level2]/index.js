import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import getAllArticles from "@lib/strapi/getDocsArticles";
import getAllDocsCategories from "@lib/strapi/getDocsCategories";
import getAllCategories from "@lib/strapi/getCategories";
import getAllVideos from "@lib/strapi/getVideos";
import getAllTags from "@lib/strapi/getTags";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import CenterCategoryContent from "@components/screens/single-page-content/content/category-docs-content";
import filterDocsAricles from "@utils/helpers/filterForDocsCategory";
import createDocsCategoryStructure from "@utils/helpers/createDocsCategoryStructure";
import createDocsArticlesUrl from "@utils/helpers/createDocsArticlesUrl";
import SingleContent from "@components/screens/single-page-content";

const subcategoryPage = ({ locale, articles, docsCategories, categories, videos, tags }) => {
  const { t } = useTranslation();
  const query = useRouter();
  const pageLoc = query.locale !== "en" ? query.locale : "";
  const pagePath = (pageLoc + query.asPath).split('#')[0];
  const wordsArray = pagePath.split('/').filter(Boolean);
  const secondWord = wordsArray.length > 1 ? wordsArray[1] : null;
  const lastWord = wordsArray[wordsArray.length - 1];
  const pattern = /[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+\.aspx$/;
  const pageCategory = "Docs";

  const { attributes: pageSubCategory } = useMemo(
    () => docsCategories?.data.find((it) => it.attributes.slug_id === secondWord) || {},
    [docsCategories, secondWord, pagePath]
  );
  const data = filterDocsAricles(articles?.data, pageSubCategory?.slug_id);
  const pageData = data?.find((it) => it.url === pagePath);
  const allDocsCat = createDocsCategoryStructure(docsCategories?.data, data);

  const pageArticlesData = pattern.test(pagePath) && useMemo(
    () => articles?.data.find((it) => it.attributes.url === pagePath),
    [articles]
  );

  const link = createDocsArticlesUrl(pageArticlesData, lastWord);
  
  //console.log(pageArticlesData);
  //console.log(pageData?.name);

  //const { seo_title, seo_description } = data;
  return (
    <Layout>
      <Layout.PageHead>
        {/* <HeadSEO
          title={seo_title}
          metaDescription={seo_description}
          metaDescriptionOg={seo_description}
          metaKeywords={seo_title}
        /> */}
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categories.data} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        {pattern.test(pagePath)
          ? <SingleContent
            t={t}
            currentLanguage={locale}
            article={pageArticlesData}
            articles={articles.data}
            tags={tags.data}
            isCategory={false}
            videos={videos.data}
            category={pageCategory}
            categories={allDocsCat}
            pagepath={link}
          />
          : <CenterCategoryContent
            t={t}
            currentLanguage={locale}
            articles={pageData?.level_3}
            category={pageData}
            categories={allDocsCat}
            isCategory={false} />}

      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale }) {
  const articles = await getAllArticles(locale);
  const docsCategories = await getAllDocsCategories(locale);
  const categories = await getAllCategories(locale);
  const videos = await getAllVideos(locale);
  const tags = await getAllTags(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      categories,
      docsCategories,
      videos,
      tags
    },
  };
}

export default subcategoryPage;
