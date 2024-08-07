import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getCategoryLevel2 from "@lib/strapi/getCategoryLevel2";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import CategoryContent from "@components/screens/category-content";
import SubCategoryContent from "@components/screens/subcategory-content";
import ArticleContent from "@components/screens/article-content";
import Footer from "@components/screens/footer";

const Level2CategoryPage = ({ locale, categoriesMenu, categoryData, categorySlug }) => {
  const { t } = useTranslation();
  const [leftMenuMobile, setLeftMenuMobile] = useState(false);

  const categorySlugMany = categorySlug === "docs" ? "docs" : `${categorySlug}s`;
  const { 
    seo_title, 
    seo_description, 
    article,
    category,
    title,
    content,
    tags,
    videos,
    general_category,
    name,
    description,
    [`level_2_${categorySlugMany}`]: level2Data
  } = categoryData.data?.[0]?.attributes;

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
            categoryName={categorySlug === "integration" ? category.data.attributes.name : category?.data?.attributes.name}
            categoryUrl={categorySlug === "integration" ? category.data.attributes.url : category?.data?.attributes.url}
            pageName={title}
            pageDescription={content}
            tags={tags}
            videos={videos}
            leftMenuMobile={leftMenuMobile}
            setLeftMenuMobile={setLeftMenuMobile}
            backBtnName={categorySlug === "integration" ? category.data.attributes.name : category?.data?.attributes.name}
            backBtnUrl={categorySlug === "integration" ? category.data.attributes.url : category?.data?.attributes.url}
          />
        ) : (
          level2Data?.data?.some(item => item.attributes?.[`level_3_${categorySlugMany}`]?.data?.length > 0) ? (
            <CategoryContent
              t={t}
              categorySlug={categorySlug}
              categoryName={general_category.data.attributes.name}
              categoryUrl={general_category.data.attributes.url}
              pageName={name}
              pageDescription={description}
              pageItems={level2Data?.data}
              pageItemsLevel={3}
              leftMenuMobile={leftMenuMobile}
              backBtnName={general_category.data.attributes.name}
              backBtnUrl={general_category.data.attributes.url}
            />
          ) : (
            <SubCategoryContent 
              t={t}
              categorySlug={categorySlug}
              categoryName={general_category.data.attributes.name}
              categoryUrl={general_category.data.attributes.url}
              pageName={name}
              pageItems={level2Data?.data}
              leftMenuMobile={leftMenuMobile}
              setLeftMenuMobile={setLeftMenuMobile}
              backBtnName={general_category.data.attributes.name}
              backBtnUrl={general_category.data.attributes.url}
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

export async function getServerSideProps({ locale, params }) {
  const categoriesMenu = await getCategoriesMenu(locale);
  const categoryData = await getCategoryLevel2(locale, params.category, `/${params.category}/${params.level2}`);

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
}

export default Level2CategoryPage;