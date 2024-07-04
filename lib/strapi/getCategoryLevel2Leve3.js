import CONFIG from "@config/config";

const getCategoryLevel2Leve3 = async (locale, category, slug) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const categoryApiName = `${category === "docs" ? "categories" : "category"}-${category === "docs" ? "docs" : category === "docspace" ? "doc-spaces" : `${category}s`}`;
  const categorySlug = category === "docs" ? "docs" : `${category}s`;

  const res = await fetch(`${CMSConfigAPI}/api/${categoryApiName}/?locale=${locale}&filters[slug_id][$eq]=${slug}&populate=general_category&populate=level_2_${categorySlug}.level_3_${categorySlug}`);
  const data = await res.json();
  return data;
};

export default getCategoryLevel2Leve3;