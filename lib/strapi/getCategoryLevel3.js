import CONFIG from "@config/config";

const getCategoryLevel3 = async (locale, category, url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const categorySlugMany = category === "docs" ? "docs" : `${category}s`;
  const categorySlugOne = category === "docs" ? "doc" : category;
  const categorySlug = `${category === "docs" ? "categories" : "category"}-${category === "docs" ? "docs" : category === "docspace" ? "doc-spaces" : `${category}s`}`;

  const articleRes = await fetch(`${CMSConfigAPI}/api/${category === "docs" ? "articles" : "article"}-${categorySlugMany}/?locale=${locale}` +
    `&filters[url][$eq]=${url}` +
    `&populate=category_${category === "docs" ? "docs" : category}.general_category` +
    `&populate=level_2_${categorySlugOne}.category_${categorySlugOne}.general_category` +
    `&populate=level_3_${categorySlugOne}.level_2_${categorySlugOne}.category_${categorySlugOne}.general_category` +
    `&populate=level_4_${categorySlugOne}.level_3_${categorySlugOne}.level_2_${categorySlugOne}.category_${categorySlugOne}.general_category` +
    `&populate=tags&populate=videos`
  );
  const articleData = await articleRes.json();

  if (articleData?.data?.length > 0) {
    articleData.data[0].attributes.article = true;
    return articleData;
  }

  const categoryLevel2Response = await fetch(`${CMSConfigAPI}/api/level-2-${categorySlugMany}/?locale=${locale}` +
    `&filters[url][$eq]=${url}` +
    `&populate=article_${categorySlugMany}` +
    `&populate=article_${categorySlugMany}.icon` +
    `&populate=level_2_${categorySlugMany}.category_pic` +
    `&populate=category_${categorySlugOne}.general_category` +
    `&populate=level_3_${categorySlugMany}` +
    `&populate=level_3_${categorySlugMany}.level_4_${categorySlugMany}` +
    `&populate=level_3_${categorySlugMany}.icon` +
    `&populate=level_3_${categorySlugMany}.icon_small` +
    `&populate=level_3_${categorySlugMany}.article_${categorySlugMany}`
  );
  const categoryLevel2Data = await categoryLevel2Response.json();

  if (categoryLevel2Data?.data?.length > 0) {
    return categoryLevel2Data;
  }

  const categoryResponse = await fetch(`${CMSConfigAPI}/api/${categorySlug}/?&locale=${locale}&filters[url][$eq]=${url}&populate=description&populate=general_category&populate=tags`);
  const categoryData = await categoryResponse.json();

  return categoryData;
};

export default getCategoryLevel3;