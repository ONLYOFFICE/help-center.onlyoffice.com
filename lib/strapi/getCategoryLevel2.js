import CONFIG from "@config/config";

const getCategoryLevel2 = async (locale, category, url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const categorySlugMany = category === "docs" ? "docs" : `${category}s`;
  const articleApiName = category === "integration" ? "articles" : `${category === "docs" ? "articles" : "article"}-${categorySlugMany}`;
  const categoryApiName = `${category === "docs" ? "categories" : "category"}-${category === "docs" ? "docs" : category === "docspace" ? "doc-spaces" : `${category}s`}`;

  const articleRes = await fetch(`${CMSConfigAPI}/api/${articleApiName}/?locale=${locale}` +
    `&filters[url][$eq]=${url}${category === "integration" ?
      "&populate=category&populate=videos" :
      `&populate=category_${category === "docs" ? "docs" : category}`}.general_category` +
    `&populate=tags`
  );
  const articleData = await articleRes.json();

  if (articleData?.data?.length > 0) {
    articleData.data[0].attributes.article = true;
    return articleData;
  }

  const categoryResponse = await fetch(`${CMSConfigAPI}/api/${categoryApiName}/?locale=${locale}` +
    `&filters[url][$eq]=${url}` +
    `&populate=general_category` +
    `&populate=article_${categorySlugMany}` +
    `&populate=level_2_${categorySlugMany}` +
    `&populate=level_2_${categorySlugMany}.category_pic` +
    `&populate=level_2_${categorySlugMany}.level_3_${categorySlugMany}` +
    `&populate=level_2_${categorySlugMany}.level_3_${categorySlugMany}.icon_small` +
    `&populate=level_2_${categorySlugMany}.article_${categorySlugMany}`
  );
  const categoryData = await categoryResponse.json();
  return categoryData;
};

export default getCategoryLevel2;