import CONFIG from "@config/config";

const getDocspaceCategories = async (locale, slug, pageUrl) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/category-doc-spaces/?locale=${locale}&populate=card_field_img,general_category`;

  if (slug && !pageUrl) {
    url += `&filters[slug_id][$eq]=${slug}`;
  }

  if (!slug && pageUrl) {
    url += `&filters[url][$contains]=${pageUrl}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getDocspaceCategories;