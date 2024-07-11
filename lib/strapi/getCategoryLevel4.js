import CONFIG from "@config/config";

const getCategoryLevel4 = async (locale, category, level3Url, level4Url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const categorySlug = category === "docs" ? "docs" : `${category}s`;

  const res = await fetch(`${CMSConfigAPI}/api/level-3-${categorySlug}/?locale=${locale}` +
    `&filters[url][$eq]=${level4Url}` +
    `&filters[level_2_${category === "docs" ? "doc" : category}][url][$eq]=${level3Url}` +
    `&populate=icon` +
    `&populate=level_4_${categorySlug}.article_${categorySlug}` +
    `&populate=level_2_${category === "docs" ? "doc" : category}` +
    `&populate=category_${category === "docs" ? "doc" : category}.general_category`
  );
  const data = await res.json();
  return data;
};

export default getCategoryLevel4;