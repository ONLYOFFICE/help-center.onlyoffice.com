import CONFIG from "@config/config";

const getDocSpaceArticles = async (locale) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/articles-docspaces/?locale=${locale}&sort=title:asc&pagination[pageSize]=100&populate=*`
  );
  const data = await res.json();
  return data;
};

export default getDocSpaceArticles;