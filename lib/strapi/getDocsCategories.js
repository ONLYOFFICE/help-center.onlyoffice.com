import CONFIG from "@config/config";

const getDocsCategories = async (locale, slug) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/categories-docs/?locale=${locale}&populate=*`;

  if (slug) {
    url += `&filters[slug_id][$eq]=${slug}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getDocsCategories;