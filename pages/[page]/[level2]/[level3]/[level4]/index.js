import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import getLevel4Data from "@lib/strapi/getLevel4Data";
import getCategoriesMenu from "@lib/strapi/getCategoriesMenu";
import getLeftMenu from "@lib/strapi/getLeftMenu";
import Layout from "@components/layout";
import HeadSEO from "@components/screens/head";
import Header from "@components/screens/header";
import ArticleContent from "@components/screens/article-content";
import SubCategoryContent from "@components/screens/subcategory-content";
import Footer from "@components/screens/footer";

const Level4Page = ({ locale, data, menuData, categorySlug }) => {
  const { t } = useTranslation();
  const [leftMenuIsOpen, setLeftMenuIsOpen] = useState(false);
  const [leftMenuData, setLeftMenuData] = useState(menuData);

  const categorySlugSingular = categorySlug === "docs" ? "doc" : categorySlug;
  const categorySlugPlural = categorySlug === "docs" ? "docs" : `${categorySlug}s`;
  const dataAttr = data.data?.[0]?.attributes;

  useEffect(() => {
    if (!dataAttr.article) {
      const loadData = async () => {
        const data = await getLeftMenu(locale);
        setLeftMenuData(data);
      };
  
      loadData();
    }
  }, []);

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={dataAttr.seo_title || (dataAttr.name || dataAttr.title ? `${dataAttr.name || dataAttr.title} - ONLYOFFICE` : `${t("HelpCenter")} - ONLYOFFICE`)}
          description={dataAttr.seo_description || t("ONLYOFFICEMeta")}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <Header
          t={t}
          locale={locale}
          data={menuData}
          leftMenuIsOpen={leftMenuIsOpen}
          setLeftMenuIsOpen={setLeftMenuIsOpen}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        {dataAttr.article ? (
          <ArticleContent
            t={t}
            locale={locale}
            categoryName={dataAttr[`category_${categorySlug}`]?.data?.attributes?.general_category.data.attributes.name || dataAttr[`level_2_${categorySlugSingular}`]?.data?.attributes[`category_${categorySlugSingular}`].data.attributes.general_category.data.attributes.name || dataAttr[`level_3_${categorySlugSingular}`]?.data?.attributes[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.general_category.data.attributes.name || dataAttr[`level_4_${categorySlugSingular}`]?.data?.attributes[`level_3_${categorySlugSingular}`].data.attributes[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.general_category.data.attributes.name}
            categoryUrl={dataAttr[`category_${categorySlug}`]?.data?.attributes?.general_category.data.attributes.url || dataAttr[`level_2_${categorySlugSingular}`]?.data?.attributes[`category_${categorySlugSingular}`].data.attributes.general_category.data.attributes.url || dataAttr[`level_3_${categorySlugSingular}`]?.data?.attributes[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.general_category.data.attributes.url || dataAttr[`level_4_${categorySlugSingular}`]?.data?.attributes[`level_3_${categorySlugSingular}`].data.attributes[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.general_category.data.attributes.url}
            level2CategoryName={dataAttr[`category_${categorySlug}`]?.data?.attributes?.name || dataAttr[`level_2_${categorySlugSingular}`]?.data?.attributes[`category_${categorySlugSingular}`].data.attributes.name || dataAttr[`level_3_${categorySlugSingular}`]?.data?.attributes[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.name || dataAttr[`level_4_${categorySlugSingular}`]?.data?.attributes[`level_3_${categorySlugSingular}`].data.attributes[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.name}
            level2CategoryUrl={dataAttr[`category_${categorySlug}`]?.data?.attributes?.url || dataAttr[`level_2_${categorySlugSingular}`]?.data?.attributes[`category_${categorySlugSingular}`].data.attributes.url || dataAttr[`level_3_${categorySlugSingular}`]?.data?.attributes[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.url || dataAttr[`level_4_${categorySlugSingular}`]?.data?.attributes[`level_3_${categorySlugSingular}`].data.attributes[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.url}
            level3CategoryName={dataAttr[`level_2_${categorySlugSingular}`]?.data?.attributes?.name || dataAttr[`level_3_${categorySlugSingular}`]?.data?.attributes[`level_2_${categorySlugSingular}`].data.attributes.name || dataAttr[`level_4_${categorySlugSingular}`]?.data?.attributes[`level_3_${categorySlugSingular}`].data.attributes[`level_2_${categorySlugSingular}`].data.attributes.name}
            level3CategoryUrl={dataAttr[`level_2_${categorySlugSingular}`]?.data?.attributes?.url || dataAttr[`level_3_${categorySlugSingular}`]?.data?.attributes[`level_2_${categorySlugSingular}`].data.attributes.url || dataAttr[`level_4_${categorySlugSingular}`]?.data?.attributes[`level_3_${categorySlugSingular}`].data.attributes[`level_2_${categorySlugSingular}`].data.attributes.url}
            level4CategoryName={dataAttr[`level_4_${categorySlugSingular}`]?.data?.attributes[`level_3_${categorySlugSingular}`].data.attributes?.name || dataAttr[`level_3_${categorySlugSingular}`]?.data?.attributes.name}
            level4CategoryUrl={dataAttr[`level_4_${categorySlugSingular}`]?.data?.attributes[`level_3_${categorySlugSingular}`].data.attributes?.url || dataAttr[`level_3_${categorySlugSingular}`]?.data?.attributes.url}
            pageName={dataAttr?.title}
            pageDescription={dataAttr?.content}
            tags={dataAttr?.tags}
            leftMenuIsOpen={leftMenuIsOpen}
            setLeftMenuIsOpen={setLeftMenuIsOpen}
          />
        ) : (
          <SubCategoryContent 
            t={t}
            categorySlug={categorySlug}
            categoryName={dataAttr[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.general_category.data.attributes.name}
            categoryUrl={dataAttr[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.general_category.data.attributes.url}
            level2CategoryName={dataAttr[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.name}
            level2CategoryUrl={dataAttr[`level_2_${categorySlugSingular}`].data.attributes[`category_${categorySlugSingular}`].data.attributes.url}
            level3CategoryName={dataAttr[`level_2_${categorySlugSingular}`].data.attributes.name}
            level3CategoryUrl={dataAttr[`level_2_${categorySlugSingular}`].data.attributes.url}
            pageName={dataAttr.name}
            pageIcon={dataAttr?.icon}
            categoryData={dataAttr?.[`level_4_${categorySlugPlural}`]?.data}
            articleData={dataAttr?.[`article_${categorySlugPlural}`]?.data}
            leftMenuData={leftMenuData}
            leftMenuIsOpen={leftMenuIsOpen}
            setLeftMenuIsOpen={setLeftMenuIsOpen}
            video={dataAttr?.video}
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

  if (data.data.length === 0) {
    return {
      notFound: true
    };
  }

  const menuData = data.data[0]?.attributes.article ? await getCategoriesMenu(locale) : await getLeftMenu(locale, params.page);
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
      menuData,
      categorySlug: params.page
    },
  };
};

export default Level4Page;