import CONFIG from "@config/config";

const getWorkspaceCategories = async (locale) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/category-workspaces/?locale=${locale}&populate=*`
  );
  const data = await res.json();
  return data;
};

export default getWorkspaceCategories;