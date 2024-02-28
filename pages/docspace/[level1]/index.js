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
import CenterCategoryContent from "@components/screens/single-page-content/content/category-content";
import filterDocsArticles from "@utils/helpers/DocsCategory/filterForDocsCategory";

const subcategoryPage = ({ locale, articles, docsCategories, categories }) => {
  const { t } = useTranslation();
  const query = useRouter();
  const pageLoc = query.locale !== "en" ? query.locale : "";
  const pagePath = (pageLoc + query.asPath).split('#')[0];
  const pageCatSlug = (pageLoc + query.asPath).split('/')[1];

  const { attributes: pageCategory } = useMemo(
    () => categories?.data.find((it) => it.attributes.slug_id === pageCatSlug),
    [categories]
  );
  const { attributes: pageSubCategory } = useMemo(
    () => docsCategories?.data.find((it) => it.attributes.url === pagePath) || {},
    [docsCategories, pagePath]
  );
  const pageData = useMemo(
    () => articles?.data.filter((it) => it.attributes.category_doc.data.attributes.url === pagePath),
    [articles]
  );

  const data = filterDocsArticles(pageData, pageSubCategory.slug_id);
  //console.log(data);
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
          articles={data}
          category={pageSubCategory}
          categories={categories.data}
          isCategory={true}
          mainCategory={pageCategory} />
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
