import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getCategoryLevel2 from "@lib/strapi/getCategoryLevel2";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import CategoryContent from "@components/screens/category-content";
import ArticleContent from "@components/screens/article-content";
import Footer from "@components/screens/footer";

const Level2CategoryPage = ({ locale, categoriesMenu, categoryData, categorySlug }) => {
  const { t } = useTranslation();
  const [leftMenuMobile, setLeftMenuMobile] = useState(false);

  const data = categoryData.data?.[0].attributes;
  const isArticle = categoryData.data[0].attributes.article;

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={""}
          description={""}
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
            categoryName={data.category.data.attributes.name}
            categoryUrl={data.category.data.attributes.url}
            pageName={data.title}
            pageDescription={data.content}
            tags={data.tags}
            videos={data.videos}
            leftMenuMobile={leftMenuMobile}
            setLeftMenuMobile={setLeftMenuMobile}
            backBtnName={data.category.data.attributes.name}
            backBtnUrl={data.category.data.attributes.url}
          />
        ) : (
          <CategoryContent
            t={t}
            categorySlug={categorySlug}
            categoryName={data.general_category.data.attributes.name}
            categoryUrl={data.general_category.data.attributes.url}
            pageName={data.name}
            pageDescription={data.description}
            pageItems={data[`level_2_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data}
            pageItemsLevel={3}
            leftMenuMobile={leftMenuMobile}
            backBtnName={data.general_category.data.attributes.name}
            backBtnUrl={data.general_category.data.attributes.url}
          />
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