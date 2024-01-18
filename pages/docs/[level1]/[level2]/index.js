import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import getAllArticles from "@lib/strapi/getDocsArticles";
import getAllDocsCategories from "@lib/strapi/getDocsCategories";
import getAllCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import CenterCategoryContent from "@components/screens/single-page-content/content/category-docs-content";
import filterDocsAricles from "@utils/helpers/filterForDocsCategory";

const subcategoryPage = ({ locale, articles, docsCategories, categories }) => {
  const { t } = useTranslation();
  const query = useRouter();
  const pageLoc = query.locale !== "en" ? query.locale : "";
  const pagePath = (pageLoc + query.asPath).split('#')[0];
  const wordsArray = pagePath.split('/').filter(Boolean);
  const secondWord = wordsArray.length > 1 ? wordsArray[1] : null;

  const { attributes: pageSubCategory } = useMemo(
    () => docsCategories?.data.find((it) => it.attributes.slug_id === secondWord) || {},
    [docsCategories, secondWord, pagePath]
  );
  const data = filterDocsAricles(articles?.data, pageSubCategory?.slug_id);
  const pageData = data?.find((it) => it.url === pagePath);
  
  //console.log(pageData);
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
        <CenterCategoryContent 
        t={t} 
        currentLanguage={locale} 
        articles={pageData?.level_3} 
        category={pageData} 
        categories={docsCategories.data}
        isCategory={false} />
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

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      categories,
      docsCategories
    },
  };
}

export default subcategoryPage;
