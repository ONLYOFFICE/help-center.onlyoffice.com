import CONFIG from "@config/config";

const getCategoryLevel4 = async (locale, category, level3Url, level4Url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const categorySlugMany = category === "docs" ? "docs" : `${category}s`;
  const categorySlugOne = category === "docs" ? "doc" : category;

  const res = await fetch(`${CMSConfigAPI}/api/level-3-${categorySlugMany}/?locale=${locale}` +
    `&filters[url][$eq]=${level4Url}` +
    `&filters[level_2_${categorySlugOne}][url][$eq]=${level3Url}` +
    `&populate=icon` +
    `&populate=level_4_${categorySlugMany}.article_${categorySlugMany}` +
    `&populate=level_2_${categorySlugOne}.category_doc.general_category` +
    `&populate=videos`
  );
  const data = await res.json();
  return data;
};

export default getCategoryLevel4;