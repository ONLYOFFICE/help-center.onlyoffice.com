import CONFIG from "@config/config";

const getArticle = async (locale, category, url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const categorySlugMany = category === "docs" ? "docs" : `${category}s`;
  const categorySlugOne = category === "docs" ? "doc" : category;

  const response = await fetch(`${CMSConfigAPI}/api/${category === "docs" ? "articles" : "article"}-${categorySlugMany}/?locale=${locale}&filters[url][$eq]=${url}&[fields]=title,content,url,seo_title,seo_description
    &populate[category_${category === "docs" ? "docs" : category}][fields]=name,url&populate[category_${category === "docs" ? "docs" : category}][populate][general_category][fields]=name,url
    &populate[level_2_${categorySlugOne}][fields]=name,url&populate[level_2_${categorySlugOne}][populate][category_${categorySlugOne}][fields]=name,url&populate[level_2_${categorySlugOne}][populate][category_${categorySlugOne}][populate][general_category][fields]=name,url
    &populate[level_3_${categorySlugOne}][fields]=name,url&populate[level_3_${categorySlugOne}][populate][level_2_${categorySlugOne}][fields]=name,url&populate[level_3_${categorySlugOne}][populate][level_2_${categorySlugOne}][populate][category_${categorySlugOne}][fields]=name,url&populate[level_3_${categorySlugOne}][populate][level_2_${categorySlugOne}][populate][category_${categorySlugOne}][populate][general_category][fields]=name,url
    &populate[level_4_${categorySlugOne}][fields]=name,url&populate[level_4_${categorySlugOne}][populate][level_3_${categorySlugOne}][fields]=name,url&populate[level_4_${categorySlugOne}][populate][level_3_${categorySlugOne}][populate][level_2_${categorySlugOne}][fields]=name,url&populate[level_4_${categorySlugOne}][populate][level_3_${categorySlugOne}][populate][level_2_${categorySlugOne}][populate][category_${categorySlugOne}][fields]=name,url&populate[level_4_${categorySlugOne}][populate][level_3_${categorySlugOne}][populate][level_2_${categorySlugOne}][populate][category_${categorySlugOne}][populate][general_category][fields]=name,url
    &populate[tags][fields]=title,version&populate[videos][fields]=title,url,description
  `);
  const data = await response.json();

  return data;
};

export default getArticle;