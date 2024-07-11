import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getCategoryLevel2 from "@lib/strapi/getCategoryLevel2";
import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import HeadSEO from "@components/screens/head-content";
import SingleContent from "@components/screens/single-page-content";
import CenterCategoryContent from "@components/screens/single-page-content/content/category-content";

const Level2CategoryPage = ({ locale, categoriesMenu, categoryData, categorySlug }) => {
  const { t } = useTranslation();
  const data = categoryData.data?.[0].attributes;
  const isArticle = categoryData.data[0].attributes.article;

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={t("titleIndexPage")}
          metaDescription={t("metaDescriptionOgIndexPage")}
          metaDescriptionOg={t("metaDescriptionOgIndexPage")}
          metaKeywords={t("titleIndexPage")}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent
          t={t}
          template={false}
          currentLanguage={locale}
          categories={categoriesMenu.data}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        {isArticle ? (
          <SingleContent
            t={t}
            currentLanguage={locale}
            isArticle={isArticle}
            categoryName={data.category.data.attributes.name}
            categoryUrl={data.category.data.attributes.url}
            pageName={data.title}
            pageDescription={data.content}
            tags={data.tags}
            videos={data.videos}
          />
        ) : (
          <CenterCategoryContent
            t={t}
            categorySlug={categorySlug}
            categoryName={data.general_category.data.attributes.name}
            categoryUrl={data.general_category.data.attributes.url}
            pageName={data.name}
            pageDescription={data.description}
            pageItems={data[`level_2_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data}
            pageItemsLevel={3}
          />
        )}
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
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