import CONFIG from "@config/config";

const getCategoryLevel4 = async (locale, category, url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const categorySlugMany = category === "docs" ? "docs" : `${category}s`;
  const categorySlugOne = category === "docs" ? "doc" : category;

  const articleRes = await fetch(`${CMSConfigAPI}/api/${category === "docs" ? "articles" : "article"}-${categorySlugMany}/?locale=${locale}` +
    `&filters[url][$eq]=${url}` +
    `&populate=category_${category === "docs" ? "docs" : category}.general_category` +
    `&populate=level_2_${categorySlugOne}.category_${categorySlugOne}.general_category` +
    `&populate=level_3_${categorySlugOne}.level_2_${categorySlugOne}.category_${categorySlugOne}.general_category` +
    `&populate=level_4_${categorySlugOne}.level_3_${categorySlugOne}.level_2_${categorySlugOne}.category_${categorySlugOne}.general_category` +
    `&populate=tags`
  );
  const articleData = await articleRes.json();

  if (articleData?.data?.length > 0) {
    articleData.data[0].attributes.article = true;
    return articleData;
  }

  const categoryResponse = await fetch(`${CMSConfigAPI}/api/level-3-${categorySlugMany}/?locale=${locale}` +
    `&filters[url][$eq]=${url}` +
    `&populate=icon` +
    `&populate=level_4_${categorySlugMany}.article_${categorySlugMany}` +
    `&populate=level_2_${categorySlugOne}.category_doc.general_category` +
    `&populate=video`
  );
  const categoryData = await categoryResponse.json();
  return categoryData;
};

export default getCategoryLevel4;