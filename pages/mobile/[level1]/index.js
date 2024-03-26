import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import getAllArticles from "@lib/strapi/getMobileArticles";
import getAllCategories from "@lib/strapi/getMobileCategories";
import getAllCommonCategories from "@lib/strapi/getCategories";

import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import CenterCategoryContent from "@components/screens/single-page-content/content/category-content";
import filterArticles from "@utils/helpers/MobileCategory/filterForMobileCategory";

const subcategoryPage = ({ locale, articles, currentCategories, categories }) => {
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
    () => currentCategories?.data.find((it) => it.attributes.url === pagePath) || {},
    [currentCategories, pagePath]
  );
  const pageData = useMemo(
    () => articles?.data.filter((it) => it.attributes.category_mobile.data.attributes.url === pagePath),
    [articles]
  );

  const data = filterArticles(pageData, pageSubCategory.slug_id);
  //console.log(data);
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
        <HeadingContent t={t} template={false} currentLanguage={locale} categories={categories.data} pageCategory={pageCategory} />
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
  const currentCategories = await getAllCategories(locale);
  const categories = await getAllCommonCategories(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles,
      categories,
      currentCategories
    },
  };
}

export default subcategoryPage;
