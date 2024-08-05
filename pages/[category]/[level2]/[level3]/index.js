import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getCategoryLevel3 from "@lib/strapi/getCategoryLevel3";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import CategoryContent from "@components/screens/category-content";
import ArticleContent from "@components/screens/article-content";
import Footer from "@components/screens/footer";
import Cookies from 'universal-cookie';

const Level3CategoryPage = ({ locale, categoriesMenu, categoryData, categorySlug }) => {
  const { t } = useTranslation();
  const [leftMenuMobile, setLeftMenuMobile] = useState(false);

  const isArticle = categoryData.data[0].attributes.article;
  const data = categoryData.data?.[0].attributes;
  const categorySlugType = categorySlug === "docs" ? isArticle ? "docs" : "doc" : categorySlug;
  const categoryName = data[`category_${categorySlugType}`].data?.attributes.general_category?.data.attributes.name;
  const level2CategoryName = data[`category_${categorySlugType}`].data?.attributes.name;
  const seoTitle = data.seo_title ? data.seo_title : `${categoryName} - ${level2CategoryName} - ONLYOFFICE`;
  const seoDescription = data.seo_description ? data.seo_description : t("metaDescriptionOgIndexPage");

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={seoTitle}
          description={seoDescription}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <Header
          t={t}
          locale={locale}
          categories={categoriesMenu}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        {isArticle ? (
          <ArticleContent 
            t={t}
            locale={locale}
            isArticle={isArticle}
            categoryName={categoryName}
            categoryUrl={data[`category_${categorySlugType}`].data?.attributes.general_category?.data.attributes.url}
            level2CategoryName={level2CategoryName}
            level2CategoryUrl={data[`category_${categorySlugType}`].data?.attributes.url}
            pageName={data.title}
            pageDescription={data.content}
            tags={data.tags}
            leftMenuMobile={leftMenuMobile}
            setLeftMenuMobile={setLeftMenuMobile}
            backBtnName={categoryName}
            backBtnUrl={data[`category_${categorySlugType}`].data?.attributes.general_category?.data.attributes.url}
          />
        ) : (
          <CategoryContent
            t={t}
            categorySlug={categorySlug}
            categoryName={categoryName}
            categoryUrl={data[`category_${categorySlugType}`].data?.attributes.general_category?.data.attributes.url}
            level2CategoryName={level2CategoryName}
            level2CategoryUrl={data[`category_${categorySlugType}`].data?.attributes.url}
            pageName={data.name}
            pageItems={data[`level_3_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data}
            pageItemsLevel={4}
            leftMenuMobile={leftMenuMobile}
            backBtnName={level2CategoryName}
            backBtnUrl={data[`category_${categorySlugType}`].data?.attributes.url}
          />
        )}
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale, params, req }) => {
  const categoriesMenu = await getCategoriesMenu(locale);
  const categoryData = await getCategoryLevel3(locale, params.category, `/${params.category}/${params.level2}/${params.level3}`);
  const cookies = new Cookies(req.headers.cookie, { path: '/' });
  if (cookies.get("neverShowTranslators") == "never") {
    categoryData.data[0].attributes.content.replace(
      /<div class="bringattention translator" id="translatorAttention_block" style="display: block;>/,
     '<div class="bringattention translator" id="translatorAttention_block" style="display: none;">'
      );
      console.log(categoryData.data[0].attributes.content);
  }

  if (!categoryData.data || categoryData.data.length === 0) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      categoriesMenu,
      categoryData,
      categorySlug: params.category
    },
  };
};

export default Level3CategoryPage;