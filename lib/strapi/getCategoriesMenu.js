import CONFIG from "@config/config";

const getCategoriesMenu = async (locale) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const res = await fetch(`${CMSConfigAPI}/api/categories/?locale=${locale}&fields=name,url,position,slug_id`);
  const data = await res.json();
  return data;
};

export default getCategoriesMenu;
