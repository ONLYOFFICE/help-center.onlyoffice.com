import CONFIG from "@config/config";

const getDesktopCategories = async (locale) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/category-desktops/?locale=${locale}&sort=name:asc&populate=*`
  );
  const data = await res.json();
  return data;
};

export default getDesktopCategories;