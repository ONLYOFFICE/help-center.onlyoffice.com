import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import getLevel2Data from "@lib/strapi/getLevel2Data";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import CategoryContent from "@components/screens/category-content";
import SubCategoryContent from "@components/screens/subcategory-content";
import ArticleContent from "@components/screens/article-content";
import Footer from "@components/screens/footer";

const Level2Page = ({ locale, data, categoriesMenuData, categorySlug, currentCategoryData }) => {
  const { t } = useTranslation();
  const [leftMenuIsOpen, setLeftMenuIsOpen] = useState(false);
  const categorySlugMany = categorySlug === "docs" ? "docs" : `${categorySlug}s`;
  const articleData = data.data?.[0]?.attributes;
  const categoryData = data.data.filter(item => item.attributes.slug_id === categorySlug)[0]?.attributes;

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={articleData.seo_title || categoryData.seo_title || (categoryData.name ? `${categoryData.name} - ONLYOFFICE` : articleData.title ? `${articleData.title} - ONLYOFFICE` : `Help Center - ONLYOFFICE`)}
          description={articleData.seo_description || categoryData.seo_description}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <Header
          t={t}
          locale={locale}
          data={categoriesMenuData ? categoriesMenuData : data}
          leftMenuIsOpen={leftMenuIsOpen}
          setLeftMenuIsOpen={setLeftMenuIsOpen}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        {articleData.article ? (
          <ArticleContent
            t={t}
            locale={locale}
            categoryName={articleData.category?.data.attributes?.name}
            categoryUrl={articleData.category?.data.attributes?.url}
            pageName={articleData?.title}
            pageDescription={articleData?.content}
            tags={articleData?.tags}
            videos={articleData?.videos}
            leftMenuIsOpen={leftMenuIsOpen}
            setLeftMenuIsOpen={setLeftMenuIsOpen}
          />
        ) : (
          currentCategoryData?.[`level_2_${categorySlugMany}`]?.data?.some(item => item.attributes?.[`level_3_${categorySlugMany}`]?.data?.length > 0) ? (
            <CategoryContent
              t={t}
              categorySlug={categorySlug}
              categoryName={categoryData?.name}
              categoryUrl={categoryData?.url}
              pageName={currentCategoryData?.name}
              pageDescription={currentCategoryData?.description}
              categoryData={currentCategoryData?.[`level_2_${categorySlugMany}`]?.data}
              leftMenuData={data}
              leftMenuLevel={3}
              leftMenuIsOpen={leftMenuIsOpen}
              articleData={currentCategoryData?.[`article_${categorySlugMany}`].data}
            />
          ) : (
            <SubCategoryContent
              t={t}
              categorySlug={categorySlug}
              categoryName={categoryData?.name}
              categoryUrl={categoryData?.url}
              pageName={currentCategoryData?.name}
              categoryData={currentCategoryData?.[`level_2_${categorySlugMany}`]?.data}
              articleData={currentCategoryData?.[`article_${categorySlugMany}`].data}
              leftMenuData={data}
              leftMenuIsOpen={leftMenuIsOpen}
              pageDescription={currentCategoryData?.description}
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
  const pathUrl = `${locale === "en" ? "" : `/${locale}`}/${params.page}/${params.level2}`;
  const data = await getLevel2Data(locale, params.page, pathUrl);
  const currentCategoryData = data.data.filter(item => item.attributes.slug_id === params.page)[0]?.attributes?.[`category_${params.page === "docs" ? "docs" : `${params.page}s`}`]?.data.filter(item => item.attributes.url === pathUrl)[0];

  if (data.data?.[0]?.attributes.article === true ? !data.data : !currentCategoryData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      data,
      categorySlug: params.page,
      categoriesMenuData: data.categoriesMenuData || null,
      currentCategoryData: currentCategoryData ? currentCategoryData?.attributes : null
    },
  };
}

export default Level2Page;