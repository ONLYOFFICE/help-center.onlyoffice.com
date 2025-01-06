import CONFIG from "@config/config";

const getLevel2Data = async (locale, category, url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const articleApi = category === "integration" ? "articles" : `${category === "docs" ? "articles-docs" : `article-${category}s`}`;
  const categoryApi = category === "docs" ? "categories-docs" : category === "docspace" ? "category-doc-spaces" : `category-${category}s`;
  const categorySlugPlural = category === "docs" ? "docs" : `${category}s`;

  const articleParams = `
    &filters[url][$eq]=${url}
    &[fields]=title,url,content,seo_title,seo_description
    &populate[tags][fields]=title
    ${category === "integration" ? (`
      &populate[category][fields]=name,url
      &populate[videos][fields]=title,url
    `) : (`
      &populate[category_${category === "docs" ? "docs" : category}][populate][general_category][fields]=name,url
    `)}
  `.replace(/\s+/g, "");

  const categoryParams = `
    &filters[url][$eq]=${url}
    &fields=seo_title,seo_description,name,description,url,position
    &populate[general_category][fields]=name,url
    &populate[article_${categorySlugPlural}][fields]=title,url,position
    &populate[article_${categorySlugPlural}][populate][icon][fields]=url
    &populate[level_2_${categorySlugPlural}][fields]=name,url,subtitle,position
    &populate[level_2_${categorySlugPlural}][populate][category_pic][fields]=url,width,height
    &populate[level_2_${categorySlugPlural}][populate][level_3_${categorySlugPlural}][fields]=name,url,position,position_top
    &populate[level_2_${categorySlugPlural}][populate][level_3_${categorySlugPlural}][populate][icon_small][fields]=url
    &populate[level_2_${categorySlugPlural}][populate][article_${categorySlugPlural}][fields]=title,url,position,level_4_title
  `.replace(/\s+/g, "");

  const [
    articleData,
    categoryData
  ] = await Promise.all([
    fetch(`${CMSConfigAPI}/api/${articleApi}/?locale=${locale}${articleParams}`).then(res => res.json()),
    fetch(`${CMSConfigAPI}/api/${categoryApi}/?locale=${locale}${categoryParams}`).then(res => res.json())
  ]);

  if (articleData?.data?.length) {
    articleData.data[0].attributes.article = true;
    return { data: articleData.data };
  } else {
    return { data: categoryData.data };
  }
};

export default getLevel2Data;