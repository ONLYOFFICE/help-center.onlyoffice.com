import CONFIG from "@config/config";
import getArticle from "./getArticle";

const getLevel4Data = async (locale, category, url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const categorySlugSingular = category === "docs" ? "doc" : category;
  const categorySlugPlural = category === "docs" ? "docs" : `${category}s`;

  const categoryParams = `
    &filters[url][$eq]=${url}
    &fields=name,seo_title,seo_description
    &populate[icon][fields]=url
    &populate[video][fields]=title,url,description
    &populate[article_${categorySlugPlural}][fields]=title,url,position,level_4_title
    &populate[article_${categorySlugPlural}][populate][icon]=url
    &populate[level_2_${categorySlugSingular}][fields]=name,url
    &populate[level_2_${categorySlugSingular}][populate][category_${categorySlugSingular}][fields]=name,url
    &populate[level_2_${categorySlugSingular}][populate][category_${categorySlugSingular}][populate][general_category][fields]=name,url
    &populate[level_4_${categorySlugPlural}][fields]=name,url,position
    &populate[level_4_${categorySlugPlural}][populate][article_${categorySlugPlural}][fields]=title,url,position
    &populate[level_4_${categorySlugPlural}][populate][icon][fields]=url
  `.replace(/\s+/g, "");

  const [
    articleData,
    categoryData
  ] = await Promise.all([
    getArticle(locale, category, url),
    fetch(`${CMSConfigAPI}/api/level-3-${category === "docs" ? "docs" : `${category}s`}/?locale=${locale}${categoryParams}`).then(res => res.json())
  ]);

  if (articleData?.data?.length > 0) {
    articleData.data[0].attributes.article = true;
    return { data: articleData.data };
  } else {
    return { data: categoryData.data };
  }
};

export default getLevel4Data;