import CONFIG from "@config/config";

const getDocSpaceCategories = async (locale) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/category-doc-spaces/?locale=${locale}&populate=*`
  );
  const data = await res.json();
  return data;
};

export default getDocSpaceCategories;