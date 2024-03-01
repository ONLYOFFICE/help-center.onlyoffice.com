import CONFIG from "@config/config";

const getArticles = async (locale) => {
  const CMSConfigAPI = "https://cmshelpcenter.teamlab.info" || "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/articles/?locale=${locale}&sort=title:asc&populate=*`
  );
  const data = await res.json();
  return data;
};

export default getArticles;