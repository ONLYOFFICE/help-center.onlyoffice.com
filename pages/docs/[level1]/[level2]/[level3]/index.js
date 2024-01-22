import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import getAllDocsCategories from "@lib/strapi/getDocsCategories";
import getAllArticles from "@lib/strapi/getDocsArticles";
import getAllVideos from "@lib/strapi/getVideos";
import getAllTags from "@lib/strapi/getTags";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import filterDocsAricles from "@utils/helpers/filterForDocsCategory";
import createDocsCategoryStructure from "@utils/helpers/createDocsCategoryStructure";
import CenterSubCategoryContent from "@components/screens/single-page-content/content/subcategory-content";

const subcategoryPage = ({ locale, articles, videos, tags, categories, docsCategories }) => {
  const { t } = useTranslation();
  const query = useRouter();
  const pageLoc = query.locale !== "en" ? query.locale : "";
  const pagePath = (pageLoc + query.asPath).split('#')[0];

  const { secondWord, urlBeforeLastSlashSlice } = (() => {
    const lastSlashIndex = pagePath.lastIndexOf('/');
    const urlBeforeLastSlashSlice = lastSlashIndex > 0 ? pagePath.slice(0, lastSlashIndex) : null;
    const wordsArray = urlBeforeLastSlashSlice?.split('/').filter(Boolean) || [];
    const secondWord = wordsArray[1] || null;

    return { secondWord, urlBeforeLastSlashSlice };
  })();

  const { attributes: pageSubCategory } = useMemo(
    () => {
      const foundCategory = docsCategories?.data.find((it) => it.attributes.slug_id === secondWord);
      return foundCategory || {};
    },
    [docsCategories, secondWord]
  );

  const datalvl1 = filterDocsAricles(articles?.data, pageSubCategory?.slug_id);
  const datalvl2 = useMemo(
    () => datalvl1?.find((it) => it.url === urlBeforeLastSlashSlice),
    [datalvl1, urlBeforeLastSlashSlice]
  );
  const pageData = useMemo(
    () => datalvl2?.level_3.find((it) => it.url === pagePath),
    [datalvl2, pagePath]
  );
  const allDocsCat = createDocsCategoryStructure(docsCategories?.data, datalvl1);

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
        <CenterSubCategoryContent
          t={t}
          currentLanguage={locale}
          articles={pageData?.level_4}
          category={pageData}
          categories={allDocsCat}
          isCategory={false}
        />
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
  const docsCategories = await getAllDocsCategories(locale);


  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      videos,
      tags,
      categories,
      docsCategories
    },
  };
}

export default subcategoryPage;