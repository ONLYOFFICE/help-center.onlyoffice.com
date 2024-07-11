import CONFIG from "@config/config";

const getCategoryLevel3 = async (locale, category, url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const categorySlug = category === "docs" ? "docs" : `${category}s`;

  const articleRes = await fetch(`${CMSConfigAPI}/api/${category === "docs" ? "articles" : "article"}-${categorySlug}/?locale=${locale}` +
    `&filters[url][$eq]=${url}` +
    `&populate=category_${category === "docs" ? "docs" : category}.general_category&populate=tags`
  );
  const articleData = await articleRes.json();

  if (articleData?.data?.length > 0) {
    articleData.data[0].attributes.article = true;
    return articleData;
  }

  const categoryResponse = await fetch(`${CMSConfigAPI}/api/level-2-${categorySlug}/?locale=${locale}` +
    `&filters[url][$eq]=${url}` +
    `&populate[0]=category_${category === "docs" ? "doc" : category}.general_category` +
    `&populate[1]=level_3_${categorySlug}` +
    `&populate[2]=level_3_${categorySlug}.level_4_${categorySlug}` +
    `&populate[3]=level_3_${categorySlug}.icon`
  );
  const categoryData = await categoryResponse.json();
  return categoryData;
};

export default getCategoryLevel3;