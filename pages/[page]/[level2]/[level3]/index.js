import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useRouter } from "next/router";
import getLevel3Data from "@lib/strapi/getLevel3Data";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import SubCategoryContent from "@components/screens/subcategory-content";
import CategoryContent from "@components/screens/category-content";
import ArticleContent from "@components/screens/article-content";
import Footer from "@components/screens/footer";
import Cookies from "universal-cookie";

const Level3Page = ({ locale, categoriesMenuData, data, categoryLevel3Data, categoryArticleData }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [leftMenuIsOpen, setLeftMenuIsOpen] = useState(false);

  const categorySlug = router.query.page;
  const categorySlugOne = categorySlug === "docs" ? "doc" : categorySlug;
  const categorySlugMany = categorySlug === "docs" ? "docs" : `${categorySlug}s`;
  const articleData = data.data?.[0]?.attributes;
  const categoryData = data.data.filter(item => item.attributes.slug_id === categorySlug)[0]?.attributes;
  const categoryLevel2Data = categoryData?.[`category_${categorySlugMany}`]?.data.filter(item => item.attributes.url === `/${router.query.page}/${router.query.level2}`)[0]?.attributes;
  const level4DataLength = categoryLevel3Data?.[`level_3_${categorySlugMany}`]?.data.map(item => item.attributes[`level_4_${categorySlugMany}`]?.data.length);

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={articleData.seo_title || categoryLevel3Data?.seo_title || categoryArticleData?.seo_title || (categoryLevel3Data.name ? `${categoryLevel3Data.name} - ONLYOFFICE` : articleData.title || categoryArticleData ? `${articleData.title || categoryArticleData} - ONLYOFFICE` : `Help Center - ONLYOFFICE`)}
          description={articleData.seo_description || categoryLevel3Data?.seo_description || categoryArticleData?.seo_description || t("metaDescriptionOgIndexPage")}
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
            categoryName={articleData[`category_${categorySlug}`]?.data?.attributes?.general_category.data.attributes.name || articleData[`level_2_${categorySlugOne}`]?.data?.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.name || articleData[`level_3_${categorySlugOne}`]?.data?.attributes[`level_2_${categorySlugOne}`].data.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.name || articleData[`level_4_${categorySlugOne}`]?.data?.attributes[`level_3_${categorySlugOne}`].data.attributes[`level_2_${categorySlugOne}`].data.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.name}
            categoryUrl={articleData[`category_${categorySlug}`]?.data?.attributes?.general_category.data.attributes.url || articleData[`level_2_${categorySlugOne}`]?.data?.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.url || articleData[`level_3_${categorySlugOne}`]?.data?.attributes[`level_2_${categorySlugOne}`].data.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.url || articleData[`level_4_${categorySlugOne}`]?.data?.attributes[`level_3_${categorySlugOne}`].data.attributes[`level_2_${categorySlugOne}`].data.attributes[`category_${categorySlugOne}`].data.attributes.general_category.data.attributes.url}
            level2CategoryName={articleData[`category_${categorySlug}`]?.data?.attributes?.name || articleData[`level_2_${categorySlugOne}`]?.data?.attributes[`category_${categorySlugOne}`].data.attributes.name || articleData[`level_3_${categorySlugOne}`]?.data?.attributes[`level_2_${categorySlugOne}`].data.attributes[`category_${categorySlugOne}`].data.attributes.name || articleData[`level_4_${categorySlugOne}`]?.data?.attributes[`level_3_${categorySlugOne}`].data.attributes[`level_2_${categorySlugOne}`].data.attributes[`category_${categorySlugOne}`].data.attributes.name}
            level2CategoryUrl={articleData[`category_${categorySlug}`]?.data?.attributes?.url || articleData[`level_2_${categorySlugOne}`]?.data?.attributes[`category_${categorySlugOne}`].data.attributes.url || articleData[`level_3_${categorySlugOne}`]?.data?.attributes[`level_2_${categorySlugOne}`].data.attributes[`category_${categorySlugOne}`].data.attributes.url || articleData[`level_4_${categorySlugOne}`]?.data?.attributes[`level_3_${categorySlugOne}`].data.attributes[`level_2_${categorySlugOne}`].data.attributes[`category_${categorySlugOne}`].data.attributes.url}
            level3CategoryName={articleData[`level_2_${categorySlugOne}`]?.data?.attributes?.name || articleData[`level_3_${categorySlugOne}`]?.data?.attributes[`level_2_${categorySlugOne}`].data.attributes.name || articleData[`level_4_${categorySlugOne}`]?.data?.attributes[`level_3_${categorySlugOne}`].data.attributes[`level_2_${categorySlugOne}`].data.attributes.name}
            level3CategoryUrl={articleData[`level_2_${categorySlugOne}`]?.data?.attributes?.url || articleData[`level_3_${categorySlugOne}`]?.data?.attributes[`level_2_${categorySlugOne}`].data.attributes.url || articleData[`level_4_${categorySlugOne}`]?.data?.attributes[`level_3_${categorySlugOne}`].data.attributes[`level_2_${categorySlugOne}`].data.attributes.url}
            level4CategoryName={articleData[`level_4_${categorySlugOne}`]?.data?.attributes[`level_3_${categorySlugOne}`].data.attributes.name || articleData[`level_3_${categorySlugOne}`]?.data?.attributes.name}
            level4CategoryUrl={articleData[`level_4_${categorySlugOne}`]?.data?.attributes[`level_3_${categorySlugOne}`].data.attributes.url || articleData[`level_3_${categorySlugOne}`]?.data?.attributes.url}
            pageName={articleData.title}
            pageDescription={articleData.content}
            tags={articleData.tags}
            leftMenuIsOpen={leftMenuIsOpen}
            setLeftMenuIsOpen={setLeftMenuIsOpen}
            videos={articleData.videos}
          />
        ) : (
          !level4DataLength?.every(item => item === undefined) && level4DataLength?.filter(item => item !== 0).length > level4DataLength?.filter(item => item === 0).length ? (
            <CategoryContent
              t={t}
              locale={locale}
              categorySlug={categorySlug}
              categoryName={categoryData.name}
              categoryUrl={categoryData.url}
              level2CategoryName={categoryLevel2Data.name}
              level2CategoryUrl={categoryLevel2Data.url}
              pageName={categoryLevel3Data.name}
              categoryData={categoryLevel3Data[`level_3_${categorySlugMany}`]?.data}
              leftMenuData={data}
              leftMenuLevel={4}
              pageDescription={categoryLevel3Data.description}
              leftMenuIsOpen={leftMenuIsOpen}
              setLeftMenuIsOpen={setLeftMenuIsOpen}
              articleData={categoryLevel3Data[`article_${categorySlugMany}`]?.data}
              tags={categoryLevel2Data?.tags}
            />
          ) : (
            <SubCategoryContent
              t={t}
              locale={locale}
              categorySlug={categorySlug}
              categoryName={categoryData?.name}
              categoryUrl={categoryData?.url}
              level2CategoryName={categoryArticleData ? "" : categoryLevel2Data?.name}
              level2CategoryUrl={categoryArticleData ? "" : categoryLevel2Data?.url}
              pageName={categoryLevel3Data?.name || categoryArticleData?.name}
              pageIcon={categoryLevel3Data?.icon}
              categoryData={categoryLevel3Data?.[`level_3_${categorySlugMany}`]?.data || categoryArticleData?.[`level_3_${categorySlugMany}`]?.data}
              leftMenuData={data}
              articleData={categoryLevel3Data?.[`article_${categorySlugMany}`]?.data}
              leftMenuIsOpen={leftMenuIsOpen}
              setLeftMenuIsOpen={setLeftMenuIsOpen}
              pageDescription={categoryLevel3Data?.description || categoryArticleData?.description}
              tags={categoryArticleData?.tags}
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
  const pathUrl = `${locale === "en" ? "" : `/${locale}`}/${params.page}/${params.level2}/${params.level3}`;
  const data = await getLevel3Data(locale, params.page, pathUrl);
  const categoryLevel3Data = data?.data.filter(item => item.attributes.slug_id === params.page)[0]?.attributes?.[`category_${params.page === "docs" ? "docs" : `${params.page}s`}`]?.data.map(categoryItem => categoryItem?.attributes?.[`level_2_${params.page === "docs" ? "docs" : `${params.page}s`}`]?.data.find(categoryLevel2Item => categoryLevel2Item.attributes.url === pathUrl)).find(Boolean)?.attributes;
  const categoryArticleData = data?.data.filter(item => item.attributes.slug_id === params.page)[0]?.attributes?.[`category_${params.page === "docs" ? "docs" : `${params.page}s`}`]?.data.filter(item => item.attributes.url === pathUrl)[0]?.attributes;

  if (data.data?.[0]?.attributes.article === true ? !data.data : !categoryLevel3Data && !categoryArticleData) {
    return {
      notFound: true
    };
  }

  const cookies = new Cookies(req.headers.cookie, { path: "/" });
  if (cookies.get("neverShowTranslators") === "never" && data.data[0]?.attributes.content) {
    data.data[0].attributes.content = data.data[0].attributes.content.replace(
      /<div class="bringattention translator" id="translatorAttention_block" style="display: block;">/g,
      '<div class="bringattention translator" id="translatorAttention_block" style="display: none;">'
    );
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      data,
      categoriesMenuData: data?.categoriesMenuData || null,
      categoryLevel3Data: categoryLevel3Data || null,
      categoryArticleData: categoryArticleData || null
    },
  };
};

export default Level3Page;