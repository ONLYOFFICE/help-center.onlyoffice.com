import CONFIG from "@config/config";

const getCategoryLevel2 = async (locale, category, url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const categorySlug = category === "docs" ? "docs" : `${category}s`;
  const articleApiName = category === "integration" ? "articles" : `${category === "docs" ? "articles" : "article"}-${categorySlug}`;
  const categoryApiName = `${category === "docs" ? "categories" : "category"}-${category === "docs" ? "docs" : category === "docspace" ? "doc-spaces" : `${category}s`}`;

  const articleRes = await fetch(`${CMSConfigAPI}/api/${articleApiName}/?locale=${locale}` +
    `&filters[url][$eq]=${url}${category === "integration" ?
      "&populate=category&populate=videos" :
      `&populate=category_${category === "docs" ? "docs" : category}.general_category`}` +
    `&populate=tags`
  );
  const articleData = await articleRes.json();

  if (articleData?.data?.length > 0) {
    articleData.data[0].attributes.article = true;
    return articleData;
  }

  const categoryResponse = await fetch(`${CMSConfigAPI}/api/${categoryApiName}/?locale=${locale}` +
    `&filters[url][$eq]=${url}` +
    `&populate[0]=general_category` +
    `&populate[1]=level_2_${categorySlug}` +
    `&populate[2]=level_2_${categorySlug}.level_3_${categorySlug}` +
    `&populate[3]=level_2_${categorySlug}.level_3_${categorySlug}.icon_small` +
    `&populate[4]=level_2_${categorySlug}.article_${categorySlug}`
  );
  const categoryData = await categoryResponse.json();
  return categoryData;
};

export default getCategoryLevel2;