import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import getLevel4Data from "@lib/strapi/getLevel4Data";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import ArticleContent from "@components/screens/article-content";
import SubCategoryContent from "@components/screens/subcategory-content";
import Footer from "@components/screens/footer";

const Level4Page = ({ locale, categoriesMenuData, data, currentCategoryData }) => {
  const { t } = useTranslation();
  const [leftMenuIsOpen, setLeftMenuIsOpen] = useState(false);
  const router = useRouter();

  const categorySlug = router.query.page;
  const categorySlugOne = categorySlug === "docs" ? "doc" : categorySlug;
  const categorySlugMany = categorySlug === "docs" ? "docs" : `${categorySlug}s`;
  const articleData = data.data?.[0]?.attributes;
  const categoryData = data.data.filter(item => item.attributes.slug_id === categorySlug)[0]?.attributes;
  const categoryLevel2Data = categoryData?.[`category_${categorySlugMany}`]?.data.filter(item => item.attributes.url === `/${router.query.page}/${router.query.level2}`)[0]?.attributes;
  const categoryLevel3Data = categoryData?.[`category_${categorySlugMany}`]?.data.map(categoryItem => categoryItem?.attributes?.[`level_2_${categorySlugMany}`]?.data.find(categoryLevel2Item => categoryLevel2Item.attributes.url === `/${router.query.page}/${router.query.level2}/${router.query.level3}`)).find(Boolean)?.attributes;

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={articleData.seo_title || categoryData.seo_title || (currentCategoryData.name ? `${currentCategoryData.name} - ONLYOFFICE` : articleData.title ? `${articleData.title} - ONLYOFFICE` : `Help Center - ONLYOFFICE`)}
          description={articleData.seo_description || currentCategoryData?.seo_description || t("metaDescriptionOgIndexPage")}
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
            level4CategoryName={articleData[`level_4_${categorySlugOne}`]?.data?.attributes[`level_3_${categorySlugOne}`].data.attributes?.name || articleData[`level_3_${categorySlugOne}`]?.data?.attributes.name}
            level4CategoryUrl={articleData[`level_4_${categorySlugOne}`]?.data?.attributes[`level_3_${categorySlugOne}`].data.attributes?.url || articleData[`level_3_${categorySlugOne}`]?.data?.attributes.url}
            pageName={articleData?.title}
            pageDescription={articleData?.content}
            tags={articleData?.tags}
            leftMenuIsOpen={leftMenuIsOpen}
            setLeftMenuIsOpen={setLeftMenuIsOpen}
          />
        ) : (
          <SubCategoryContent 
            t={t}
            categorySlug={categorySlug}
            categoryName={categoryData?.name}
            categoryUrl={categoryData?.name}
            level2CategoryName={categoryLevel2Data?.name}
            level2CategoryUrl={categoryLevel2Data?.url}
            level3CategoryName={categoryLevel3Data?.name}
            level3CategoryUrl={categoryLevel3Data?.url}
            pageName={currentCategoryData?.name}
            pageIcon={currentCategoryData?.icon}
            categoryData={currentCategoryData?.[`level_4_${categorySlugMany}`]?.data}
            articleData={currentCategoryData?.[`article_${categorySlugMany}`]?.data}
            leftMenuData={data}
            leftMenuIsOpen={leftMenuIsOpen}
            setLeftMenuIsOpen={setLeftMenuIsOpen}
            video={currentCategoryData?.video}
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
  const pathUrl = `${locale === "en" ? "" : `/${locale}`}/${params.page}/${params.level2}/${params.level3}/${params.level4}`;
  const data = await getLevel4Data(locale, params.page, pathUrl);
  const currentCategoryData = data.data.filter(item => item.attributes.slug_id === params.page)[0]?.attributes?.[`category_${params.page === "docs" ? "docs" : `${params.page}s`}`]?.data.map(categoryItem => categoryItem?.attributes?.[`level_2_${params.page === "docs" ? "docs" : `${params.page}s`}`]?.data.find(level2Item => level2Item.attributes.url === `${locale === "en" ? "" : `/${locale}`}/${params.page}/${params.level2}/${params.level3}`)?.attributes?.[`level_3_${params.page === "docs" ? "docs" : `${params.page}s`}`]?.data.find(level3Item => level3Item.attributes.url === pathUrl)).find(Boolean);

  if (data.data?.[0]?.attributes.article === true ? !data.data : !currentCategoryData) {
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
      currentCategoryData: currentCategoryData?.attributes || null
    },
  };
};

export default Level4Page;