import CONFIG from "@config/config";

const getDocsCategories = async (locale) => {
  const CMSConfigAPI = "https://cmshelpcenter.teamlab.info" || "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/categories-docs/?locale=${locale}&populate=*`
  );
  const data = await res.json();
  return data;
};

export default getDocsCategories;