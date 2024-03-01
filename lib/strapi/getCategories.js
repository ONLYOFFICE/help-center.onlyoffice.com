import CONFIG from "@config/config";

const getCategories = async (locale) => {
  const CMSConfigAPI = "https://cmshelpcenter.teamlab.info" || "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/categories/?locale=${locale}&sort=name:asc&populate=*`
  );
  const data = await res.json();
  return data;
};

export default getCategories;
