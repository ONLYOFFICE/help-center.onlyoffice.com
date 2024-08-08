import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getCategoryLevel3 from "@lib/strapi/getCategoryLevel3";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import SubCategoryContent from "@components/screens/subcategory-content";
import CategoryContent from "@components/screens/category-content";
import ArticleContent from "@components/screens/article-content";
import Footer from "@components/screens/footer";
import Cookies from 'universal-cookie';

const Level3CategoryPage = ({ locale, categoriesMenu, categoryData, categorySlug }) => {
  const { t } = useTranslation();
  const [leftMenuMobile, setLeftMenuMobile] = useState(false);
  const categorySlugOne = categorySlug === "docs" ? "doc" : categorySlug;
  const categorySlugMany = categorySlug === "docs" ? "docs" : `${categorySlug}s`;

  const {
    seo_title,
    seo_description,
    article,
    title,
    content,
    tags,
    name,
    icon,
    [`category_${categorySlugOne}`]: level1Data,
    [`level_3_${categorySlugMany}`]: level3Data,
    [`level_2_${categorySlugOne}`]: level2DataArticle,
    [`level_3_${categorySlugOne}`]: level3DataArticle,
    [`level_4_${categorySlugOne}`]: level4DataArticle,
    [`category_${categorySlugMany}`]: categoryDataArticle
  } = categoryData.data?.[0]?.attributes;

  const categoryName = categoryDataArticle?.data?.attributes.general_category.data.attributes.name || level2DataArticle?.data?.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.name || level3DataArticle?.data?.attributes[`level_2_${categorySlugOne}`]?.data.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.name || level4DataArticle?.data?.attributes[`level_3_${categorySlugOne}`]?.data.attributes[`level_2_${categorySlugOne}`]?.data.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.name;
  const categoryUrl = categoryDataArticle?.data?.attributes.general_category.data.attributes.url || level2DataArticle?.data?.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.url || level3DataArticle?.data?.attributes[`level_2_${categorySlugOne}`]?.data.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.url || level4DataArticle?.data?.attributes[`level_3_${categorySlugOne}`]?.data.attributes[`level_2_${categorySlugOne}`]?.data.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.url;
  const level2CategoryName = categoryDataArticle?.data?.attributes.name || level2DataArticle?.data?.attributes[`category_${categorySlugOne}`].data.attributes.name || level3DataArticle?.data?.attributes[`level_2_${categorySlugOne}`]?.data.attributes.name || level4DataArticle?.data?.attributes[`level_3_${categorySlugOne}`]?.data.attributes[`level_2_${categorySlugOne}`]?.data.attributes.name;
  const level2CategoryUrl = categoryDataArticle?.data?.attributes.url || level2DataArticle?.data?.attributes[`category_${categorySlugOne}`].data.attributes.url || level3DataArticle?.data?.attributes[`level_2_${categorySlugOne}`]?.data.attributes.url || level4DataArticle?.data?.attributes[`level_3_${categorySlugOne}`]?.data.attributes[`level_2_${categorySlugOne}`]?.data.attributes.url;
  const level3CategoryName = level2DataArticle?.data?.attributes.name || level3DataArticle?.data?.attributes.name || level4DataArticle?.data?.attributes[`level_3_${categorySlugOne}`]?.data.attributes.name;
  const level3Categoryurl = level2DataArticle?.data?.attributes.url || level3DataArticle?.data?.attributes.url || level4DataArticle?.data?.attributes[`level_3_${categorySlugOne}`]?.data.attributes.url;

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={seo_title}
          description={seo_description}
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
        {article ? (
          <ArticleContent
            t={t}
            locale={locale}
            isArticle={article}
            categoryName={categoryName}
            categoryUrl={categoryUrl}
            level2CategoryName={level2CategoryName}
            level2CategoryUrl={level2CategoryUrl}
            level3CategoryName={level3CategoryName}
            level3CategoryUrl={level3Categoryurl}
            level4CategoryName={level4DataArticle?.data?.attributes.name}
            level4CategoryUrl={level4DataArticle?.data?.attributes.url}
            pageName={title}
            pageDescription={content}
            tags={tags}
            leftMenuMobile={leftMenuMobile}
            setLeftMenuMobile={setLeftMenuMobile}
            backBtnName={level1Data?.data?.attributes.name}
            backBtnUrl={level1Data?.data?.attributes.url}
          />
        ) : (
          level3Data?.data[0]?.attributes[`${categorySlug === "docs" ? "article" : "articles"}_${categorySlugMany}`]?.data.length > 0 ? (
            <SubCategoryContent
              t={t}
              categorySlug={categorySlug}
              categoryName={level1Data?.data?.attributes.general_category?.data.attributes.name}
              categoryUrl={level1Data?.data?.attributes.general_category?.data.attributes.url}
              level2CategoryName={level1Data?.data?.attributes.name}
              level2CategoryUrl={level1Data?.data?.attributes.url}
              pageName={name}
              pageIcon={icon}
              pageItems={level3Data.data}
              leftMenuMobile={leftMenuMobile}
              setLeftMenuMobile={setLeftMenuMobile}
              backBtnName={level1Data?.data?.attributes.name}
              backBtnUrl={level1Data?.data?.attributes.url}
            />
          ) : (
            <CategoryContent
              t={t}
              categorySlug={categorySlug}
              categoryName={level1Data?.data?.attributes.general_category?.data.attributes.name}
              categoryUrl={level1Data?.data?.attributes.general_category?.data.attributes.url}
              level2CategoryName={level1Data?.data?.attributes.name}
              level2CategoryUrl={level1Data?.data?.attributes.url}
              pageName={name}
              pageItems={level3Data.data}
              pageItemsLevel={4}
              leftMenuMobile={leftMenuMobile}
              backBtnName={level1Data?.data?.attributes.name}
              backBtnUrl={level1Data?.data?.attributes.url}
            />
          )
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
  if (cookies.get("neverShowTranslators") === "never") {
    categoryData.data[0].attributes.content = categoryData.data[0].attributes.content.replace(
      /<div class="bringattention translator" id="translatorAttention_block" style="display: block;">/g,
      '<div class="bringattention translator" id="translatorAttention_block" style="display: none;">'
    );
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